-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "user_full_name" varchar,
    "email" varchar,
    "created_at" timestamp DEFAULT now(),
    "access_level" varchar DEFAULT 'user'::character varying,
    "password" varchar,
    "username" varchar(20),
    "reset_password_token" varchar,
    "reset_password_expiration" timestamp,
    PRIMARY KEY ("id")
);