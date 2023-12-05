-- CREATE TABLE actors(
-- actors_id SERIAL PRIMARY KEY,
-- first_name TEXT,
-- last_name TEXT,
-- age DATE,
-- number_oscars INTEGER
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt', 'Damon', '1970-08-10', 5),
-- ('George', 'Clooney', '1961-06-05', 2),
-- ('Angelina', 'Jolie', '1975-06-04', 1),
-- ('Jennifer', 'Aniston', '1969-02-11', 0)

-- SELECT * FROM actors

-- SELECT * FROM actors ORDER BY last_name DESC

-- SELECT * FROM actors WHERE first_name LIKE '%e%'

-- SELECT * FROM actors WHERE number_oscars  >= 5

-- SELECT COUNT(*) FROM actors

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Tom', 'Hardy', , ) -- RESULTS IN ERROR UNLESS WE USE NULL INSTEAD BLANK SPACE