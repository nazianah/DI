
-- CREATE TABLE items (
--     items_id SERIAL PRIMARY KEY,
--     item_name TEXT,
--     price INTEGER
-- );

-- CREATE TABLE customers (
--     customers_id SERIAL PRIMARY KEY,
--     first_name TEXT,
--     last_name TEXT
-- );


-- INSERT INTO items (item_name, price)
-- VALUES
--     ('Small Desk', 100),
--     ('Large Desk', 300),
--     ('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES
--     ('Greg', 'Jones'),
--     ('Sandra', 'Jones'),
--     ('Scott', 'Scott'),
--     ('Trevor', 'Green'),
--     ('Melanie', 'Johnson');


-- SELECT * FROM items;

-- SELECT * FROM customers;


-- SELECT * FROM items WHERE price > 80;

-- SELECT * FROM items WHERE price <= 300;

-- SELECT * FROM items WHERE last_name = "Smith";
-- last_name "smith doesnt exist"

-- SELECT * FROM customers WHERE last_name = 'Jones';

-- SELECT * FROM customers WHERE first_name != 'Scott';