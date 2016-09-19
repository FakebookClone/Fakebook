CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  facebook_id VARCHAR(20)
);

CREATE TABLE profiles (
  profile_id SERIAL PRIMARY KEY,
  facebook_id VARCHAR(20),
  profile_pic varchar(200) defualt 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c14.0.48.48/p48x48/10354686_10150004552801856_220367501106153455_n.jpg?oh=459b9f8',
  profile_pic_lg varchar(200) default 'https://s3-us-west-2.amazonaws.com/bucket-fakebook%2Fdevmountain.clone%40gmail.com/default-large-profile.jpg',
  name varchar(80),
  first_name varchar(40),
  last_name varchar(40),
  email varchar(80),
  cover VARCHAR(200) DEFAULT 'http://static1.squarespace.com/static/55fc0004e4b069a519961e2d/t/55fc06a8e4b043168701253c/1466862019287/?format=1000w'
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
  post_image text,
  post_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  profile_picture text
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  comment_text text,
  comment_image varchar(100),
  comment_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  post_id INT,
  profile_id VARCHAR(20),
  hidden BOOLEAN DEFAULT false;
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

CREATE TABLE friend_requests (
  friend_request_id SERIAL PRIMARY KEY,
  request_sender_id VARCHAR(20),
  requested_id VARCHAR(20)
);

CREATE TABLE hidden_comments (
  hidden_id SERIAL PRIMARY KEY,
  comment_id INT,
  profile_id VARCHAR(20)
);
