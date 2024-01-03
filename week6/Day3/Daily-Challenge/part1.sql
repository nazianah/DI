-- CREATE TABLE Customer (
--     Customer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE CustomerProfile (
--     CustomerProfile_id SERIAL PRIMARY KEY,
--     IsLoggedIn BOOLEAN DEFAULT false,
--     customer_id SERIAL,
--     FOREIGN KEY (customer_id) REFERENCES Customer(Customer_id)
-- );

-- INSERT INTO Customer ( first_name, last_name) VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive');

-- INSERT INTO CustomerProfile (IsLoggedIn, customer_id) VALUES
-- (true, (SELECT Customer_id FROM Customer WHERE first_name = 'John')),
-- (false, (SELECT Customer_id FROM Customer WHERE first_name = 'Jerome'));

-- SELECT c.first_name
-- FROM Customer c
-- JOIN CustomerProfile cp ON c.Customer_id = cp.customer_id
-- WHERE cp.isLoggedIn = true;

-- SELECT c.first_name, cp.isLoggedIn
-- FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.Customer_id = cp.customer_id;

-- SELECT COUNT(c.Customer_id) AS NotLoggedInCustomers
-- FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.Customer_id = cp.customer_id
-- WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;