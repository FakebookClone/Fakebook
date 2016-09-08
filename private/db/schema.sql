CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  facebook_id VARCHAR(20)
);

CREATE TABLE profiles (
  profile_id SERIAL PRIMARY KEY,
  facebook_id VARCHAR(20),
  profile_pic varchar(200),
  name varchar(80),
  first_name varchar(40),
  last_name varchar(40),
  email varchar(80),
  cover VARCHAR(200)
);

CREATE TABLE friends (
  friend_id SERIAL PRIMARY KEY,
  requested_id VARCHAR(20),
  accepted_id VARCHAR(20)
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  profile_id VARCHAR(20),
  post_text text,
  post_image varchar(100),
  post_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  profile_picture text
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  comment_text text,
  comment_image varchar(100),
  comment_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  post_id INT,
  profile_id VARCHAR(20)
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  profile_id INT,
  image varchar(100),
  photo_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
  like_id SERIAL PRIMARY KEY,
  profile_id VARCHAR(20),
  post_id INT,
  comment_id INT,
  photo_id INT
);

CREATE TABLE shares (
  share_id SERIAL PRIMARY KEY,
  post_id INT,
  photo_id INT,
  share_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
