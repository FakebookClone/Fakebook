SELECT comments.hidden, comments.profile_id, comments.comment_id, comments.comment_text, comments.comment_image, comments.comment_time, comments.post_id, profiles.name, profiles.profile_pic
FROM comments
JOIN profiles ON comments.profile_id = profiles.facebook_id
WHERE post_id = $1
ORDER BY comments.comment_time;
