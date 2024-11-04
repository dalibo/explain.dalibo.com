# =====================================
# Stage 1: Build dependencies
# =====================================
FROM python:3.12-alpine AS builder

# Install system-level build dependencies:
# - libpq-dev: Required for PostgreSQL client library (https://pkgs.alpinelinux.org/package/edge/main/x86/libpq-dev)
# - gcc: GNU Compiler Collection, needed for compiling some Python packages (https://pkgs.alpinelinux.org/package/edge/main/x86/gcc)
# - musl-dev: Development files for musl C library (https://pkgs.alpinelinux.org/package/edge/main/x86/musl-dev)
RUN apk add --no-cache libpq-dev gcc musl-dev

# Sets up the build directory and install Python dependencies
WORKDIR /build
COPY requirements.txt .

# Creates wheel files for all dependencies:
# - --no-cache-dir: Don't cache downloaded packages
# - --no-deps: Don't install package dependencies
# - --wheel-dir: Directory to place wheels (used later in the final image)
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /build/wheels -r requirements.txt

# =====================================
# Stage 2: Final runtime image
# =====================================
FROM python:3.12-alpine

# Copy wheel files from builder stage
COPY --from=builder /build/wheels /wheels

COPY . /app

WORKDIR /app

# Install runtime dependencies:
# - libpq: PostgreSQL client library (runtime only) (https://pkgs.alpinelinux.org/package/edge/main/x86/libpq)
# Install Python wheels created in builder stage
RUN apk add --no-cache libpq && \
    pip install --no-cache-dir /wheels/*

ENV FLASK_APP="app"
EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
