-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- INSERT INTO users (user_full_name, email)
-- VALUES  ('David Budimir', 'dav.budimir@gmail.com');