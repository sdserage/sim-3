INSERT INTO robots(authid)
VALUES($1)
RETURNING *;