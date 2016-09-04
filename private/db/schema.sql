CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  facebook_id INT
);

CREATE TABLE profiles (
  profile_id SERIAL PRIMARY KEY,
  facebook_id REFERENCES users (facebook_id),
  profile_pic varchar(100),
  first_name varchar(40),
  last_name varchar(40),
  email varchar(80)
);

CREATE TABLE friends (
  friend_id SERIAL PRIMARY KEY,
  requested_id INT,
  accepted_id INT
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  user_id REFERENCES users (facebook_id),
  post text,
  image varchar(100),
  post_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  image varchar(100),
  comment text,
  comment_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  user_id REFERENCES users (facebook_id),
  post_id REFERENCES posts (post_id),
  image varchar(100),
  photo_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
  like_id SERIAL PRIMARY KEY,
  user_id REFERENCES users (facebook_id),
  post_id REFERENCES posts (post_id)
);

CREATE TABLE shares (
  share_id SERIAL PRIMARY KEY,
  post_id REFERENCES posts (post_id),
  share_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
