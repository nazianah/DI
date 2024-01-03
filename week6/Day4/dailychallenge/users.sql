
-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     product_name VARCHAR(255),
--     price DECIMAL(10, 2)
-- );


-- CREATE TABLE product_orders (
--     order_id SERIAL PRIMARY KEY,
--     order_date DATE
-- );

-- CREATE TABLE order_items (
--     order_id INT REFERENCES product_orders(order_id),
--     item_id INT REFERENCES items(item_id),
--     quantity INT,
--     PRIMARY KEY (order_id, item_id)
-- );

-- INSERT INTO items (product_name, price) VALUES
--     ('Product A', 10.00),
--     ('Product B', 15.00),
--     ('Product C', 20.00);


-- INSERT INTO product_orders (order_date) VALUES
--     ('2023-01-15'),
--     ('2023-02-20');


-- INSERT INTO order_items (order_id, item_id, quantity) VALUES
--     (1, 1, 2),
--     (1, 2, 1),
--     (2, 3, 3),
--     (2, 1, 1);


-- CREATE OR REPLACE FUNCTION calculate_total_price(p_order_id INT)
-- RETURNS DECIMAL AS $$
-- DECLARE
--     total_price DECIMAL := 0;
-- BEGIN
--     SELECT SUM(items.price * order_items.quantity)
--     INTO total_price
--     FROM order_items
--     JOIN items ON order_items.item_id = items.item_id
--     WHERE order_items.order_id = p_order_id;

--     RETURN total_price;
-- END;
-- $$ LANGUAGE plpgsql;


SELECT calculate_total_price(1) AS total_price;
