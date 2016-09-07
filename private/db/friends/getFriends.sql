SELECT *
FROM friends
WHERE requested_id = $1 OR accepted_id = $1;
