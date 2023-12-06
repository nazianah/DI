-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab 
-- VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- -- SELECT * FROM SecondTab

-- --  SELECT COUNT(*) 
-- --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL ) -- count 0 because null is present in secondtab
	
-- --  SELECT COUNT(*) 
-- --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ) --count 2 exclude the id 5 in firsttab 

-- --  SELECT COUNT(*) 
-- --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ) -- count 0  If there are NULL values in FirstTab or non-matching values, they will contribute to the count.
	
-- --  SELECT COUNT(*) 
-- --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ) -- count 2 
	