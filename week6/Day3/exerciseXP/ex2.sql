-- SELECT * FROM film
-- UPDATE film
-- SET language_id = 2
-- WHERE language_id =1
-- SELECT * FROM film
--  if the "customer" table has a foreign key that references the "orders" table, and the foreign key is on the "order_id" column in the "customer" table, you would need to ensure that any value you insert into "order_id" already exists in the "orders" table.

-- DROP TABLE customer_review
--is an easy step 


-- SELECT * FROM rental

-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;

-- SELECT
--     f.title AS movie_title,
--     f.rental_rate AS rental_rate,
--     r.rental_date,
--     r.return_date
-- FROM
--     rental r
-- JOIN
--     inventory i ON r.inventory_id = i.inventory_id
-- JOIN
--     film f ON i.film_id = f.film_id
-- WHERE
--     r.return_date IS NULL
-- ORDER BY
--     f.rental_rate DESC
-- LIMIT 30;

-- SELECT * FROM film

-- SELECT * FROM film_actor
-- SELECT * FROM actor
-- SELECT
--     f.title AS movie_title
-- FROM
--     film f
-- JOIN
--     film_actor fa ON f.film_id = fa.film_id
-- JOIN
--     actor a ON fa.actor_id = a.actor_id
-- WHERE
--     f.description ILIKE '%sumo wrestler%'
--     AND a.first_name = 'Penelope'
--     AND a.last_name = 'Monroe';


-- SELECT
--     title AS movie_title
-- FROM
--     film
-- WHERE
--     length < 60 -- Assuming "length" represents the duration in minutes
--     AND rating = 'R';

-- SELECT
--     f.title AS movie_title
-- FROM
--     film f
-- JOIN
--     inventory i ON f.film_id = i.film_id
-- JOIN
--     rental r ON i.inventory_id = r.inventory_id
-- JOIN
--     customer c ON r.customer_id = c.customer_id
-- WHERE
--     c.first_name = 'Matthew'
--     AND c.last_name = 'Mahan'
--     AND f.rental_rate > 4.00
--     AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- SELECT
--     f.title AS movie_title
-- FROM
--     film f
-- JOIN
--     inventory i ON f.film_id = i.film_id
-- JOIN
--     rental r ON i.inventory_id = r.inventory_id
-- JOIN
--     customer c ON r.customer_id = c.customer_id
-- WHERE
--     c.first_name = 'Matthew'
--     AND c.last_name = 'Mahan'
--     AND f.rental_rate > 4.00
--     AND f.title ILIKE '%boat%' OR f.description ILIKE '%boat%'
-- 	ORDER BY
--     f.replacement_cost DESC
-- LIMIT 1 OFFSET 3;



