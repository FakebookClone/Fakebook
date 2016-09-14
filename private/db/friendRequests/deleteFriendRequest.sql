DELETE FROM friend_requests WHERE request_sender_id = $1 AND requested_id = $2;
