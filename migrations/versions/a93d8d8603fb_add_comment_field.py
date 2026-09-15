"""Add support for a comment field.

Revision ID: a93d8d8603fb
Revises: a9ed4fe59f75
Create Date: 2026-09-15 08:05:14.002042

"""

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "a93d8d8603fb"
down_revision = "a9ed4fe59f75"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table("plans", schema=None) as batch_op:
        batch_op.add_column(sa.Column("comment", sa.String(), nullable=True))

    op.execute(
        """
    DROP FUNCTION public.register_plan;

    CREATE FUNCTION public.register_plan(in_title text, in_plan
    text, in_sql text, in_comment text, in_is_public boolean, in_password_hash text)
     RETURNS register_plan_return
     LANGUAGE plpgsql
    AS $function$
    DECLARE
        use_hash_length int4 := 16;
        reply register_plan_return;
        insert_sql TEXT;
    BEGIN
        insert_sql := 'INSERT INTO public.plans (id, title, plan, sql, comment,
        is_public, created, delete_key, password_hash) VALUES ($1, $2, $3, $4, $5, $6, now(), $7, $8)';
        reply.delete_key := get_random_string( 50 );
        LOOP
            reply.id := get_random_string(use_hash_length);
            BEGIN
                execute insert_sql using reply.id, in_title, in_plan, in_sql, in_comment, in_is_public, reply.delete_key, in_password_hash;
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
    )


def downgrade():
    with op.batch_alter_table("plans", schema=None) as batch_op:
        batch_op.drop_column("comment")

    op.execute(
        """
    DROP FUNCTION public.register_plan;

    CREATE FUNCTION public.register_plan(in_title text, in_plan
    text, in_sql text, in_is_public boolean, in_password_hash text)
     RETURNS register_plan_return
     LANGUAGE plpgsql
    AS $function$
    DECLARE
        use_hash_length int4 := 16;
        reply register_plan_return;
        insert_sql TEXT;
    BEGIN
        insert_sql := 'INSERT INTO public.plans (id, title, plan, sql,
        is_public, created, delete_key, password_hash) VALUES ($1, $2, $3, $4, $5, now(), $6, $7)';
        reply.delete_key := get_random_string( 50 );
        LOOP
            reply.id := get_random_string(use_hash_length);
            BEGIN
                execute insert_sql using reply.id, in_title, in_plan, in_sql, in_is_public, reply.delete_key, in_password_hash;
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
    )
