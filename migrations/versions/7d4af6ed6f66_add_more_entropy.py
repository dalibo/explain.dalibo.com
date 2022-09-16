"""Add more entropy

Revision ID: 7d4af6ed6f66
Revises: c0aa1c5e8ce2
Create Date: 2022-09-16 14:32:47.226219

"""
from alembic import op

# revision identifiers, used by Alembic.
revision = "7d4af6ed6f66"
down_revision = "c0aa1c5e8ce2"
branch_labels = None
depends_on = None


def upgrade():
    op.execute(
        """
    --
    -- Name: get_random_string(integer); Type: FUNCTION; Schema: public; Owner: -
    --
    CREATE OR REPLACE FUNCTION get_random_string(string_length integer) RETURNS text
        LANGUAGE plpgsql
        AS $$
    DECLARE
        possible_chars TEXT = '0123456789abcdefgh';
        output TEXT = '';
        i INT4;
        pos INT4;
    BEGIN
        FOR i IN 1..string_length LOOP
            pos := 1 + cast( random() * ( length(possible_chars) - 1) as INT4 );
            output := output || substr(possible_chars, pos, 1);
        END LOOP;
        RETURN output;
    END;
    $$;

    CREATE OR REPLACE FUNCTION public.register_plan(in_title text, in_plan
    text, in_sql text, in_is_public boolean)
     RETURNS register_plan_return
     LANGUAGE plpgsql
    AS $function$
    DECLARE
        use_hash_length int4 := 16;
        reply register_plan_return;
        insert_sql TEXT;
    BEGIN
        insert_sql := 'INSERT INTO public.plans (id, title, plan, sql,
        is_public, created, delete_key) VALUES ($1, $2, $3, $4, $5, now(), $6)';
        reply.delete_key := get_random_string( 50 );
        LOOP
            reply.id := get_random_string(use_hash_length);
            BEGIN
                execute insert_sql using reply.id, in_title, in_plan, in_sql, in_is_public, reply.delete_key;
                RETURN reply;
            EXCEPTION WHEN unique_violation THEN
                -- do nothing
            END;
            use_hash_length := use_hash_length + 1;
            IF use_hash_length >= 30 THEN
                raise exception 'Random string of length == 30 requested. something''s wrong.';
            END IF;
        END LOOP;
    END;
    $function$;
    """
    )  # noqa


def downgrade():
    op.execute(
        """
    --
    -- Name: get_random_string(integer); Type: FUNCTION; Schema: public; Owner: -
    --
    CREATE OR REPLACE FUNCTION get_random_string(string_length integer) RETURNS text
        LANGUAGE plpgsql
        AS $$
    DECLARE
        possible_chars TEXT = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        output TEXT = '';
        i INT4;
        pos INT4;
    BEGIN
        FOR i IN 1..string_length LOOP
            pos := 1 + cast( random() * ( length(possible_chars) - 1) as INT4 );
            output := output || substr(possible_chars, pos, 1);
        END LOOP;
        RETURN output;
    END;
    $$;

    CREATE OR REPLACE FUNCTION public.register_plan(in_title text, in_plan
    text, in_sql text, in_is_public boolean)
     RETURNS register_plan_return
     LANGUAGE plpgsql
    AS $function$
    DECLARE
        use_hash_length int4 := 2;
        reply register_plan_return;
        insert_sql TEXT;
    BEGIN
        insert_sql := 'INSERT INTO public.plans (id, title, plan, sql,
        is_public, created, delete_key) VALUES ($1, $2, $3, $4, $5, now(), $6)';
        reply.delete_key := get_random_string( 50 );
        LOOP
            reply.id := get_random_string(use_hash_length);
            BEGIN
                execute insert_sql using reply.id, in_title, in_plan, in_sql, in_is_public, reply.delete_key;
                RETURN reply;
            EXCEPTION WHEN unique_violation THEN
                -- do nothing
            END;
            use_hash_length := use_hash_length + 1;
            IF use_hash_length >= 30 THEN
                raise exception 'Random string of length == 30 requested. something''s wrong.';
            END IF;
        END LOOP;
    END;
    $function$;
    """
    )  # noqa
