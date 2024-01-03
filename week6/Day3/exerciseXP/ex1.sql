--EXERCISE 1

-- SELECT * FROM language

-- SELECT * FROM film

-- SELECT film.title, film.description, language.name AS language_name
-- FROM film
-- INNER JOIN language ON film.language_id = language.language_id;

-- SELECT film.title, film.description, language.name AS language_name
-- FROM film
-- INNER JOIN language ON film.language_id != language.language_id;

-- CREATE TABLE new_film(
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50)
-- )

-- INSERT INTO new_film (title)
-- VALUES
-- ('John Wick'),
-- ('James Bond'),
-- ('Avengers')

-- SELECT * FROM new_film

-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT REFERENCES new_film (new_film_id) ON DELETE CASCADE,
--     language_id INT REFERENCES language(language_id),
--     title VARCHAR(50),
--     score INT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- (1, 1, 'Great Movie', 9, 'Really enjoyed the storyline and the action scenes. Highly recommended!'),
-- (2, 2, 'Awesome Film', 8, 'Amazing plot and great cinematography. A must-watch for all movie enthusiasts.');

-- SELECT * FROM customer_review;

-- DELETE FROM new_film WHERE new_film_id = 1;

-- SELECT * FROM customer_review;
-- because cascade is use when delete from new_film it will delete on customer_review auto


