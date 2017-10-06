UPDATE robots
SET firstName = $2
  , lastName = $3
  , hobby = $4
WHERE id = $1;
