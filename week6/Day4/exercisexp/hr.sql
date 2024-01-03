-- SELECT first_name AS first, last_name AS Last FROM employees

-- SELECT DISTINCT department_id FROM employees

-- SELECT * FROM employees ORDER BY first_name DESC

-- SELECT first_name, last_name, salary, 0.15 * salary AS pf FROM employees

-- SELECT employee_id, (first_name || ' ' || last_name) AS name, salary FROM employees ORDER BY salary ASC

-- SELECT SUM(salary) FROM employees

-- SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM  employees

-- SELECT AVG(salary) AS average_salary FROM  employees

-- SELECT COUNT(*) AS total_employees FROM employees

-- SELECT UPPER(first_name) FROM  employees

-- SELECT LEFT(first_name,3) FROM employees

-- SELECT (first_name || ' ' || last_name) AS full_name FROM employees

-- SELECT first_name,last_name, LENGTH(first_name || ' ' || last_name)-1 AS full_name FROM employees

-- SELECT first_name FROM employees WHERE first_name LIKE '%[0-9]%' 

-- SELECT * FROM employees LIMIT 10

-- SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000

-- SELECT 
--     first_name,
--     last_name,
--     hire_date
-- FROM 
--     employees
-- WHERE 
--     EXTRACT(YEAR FROM CAST(hire_date AS DATE)) = 1987;

-- SELECT * FROM employees WHERE first_name ILIKE '%c' AND first_name ILIKE '%e%'
-- SELECT 
--     e.last_name,
--     j.job_title,
--     e.salary
-- FROM 
--     employees e
-- JOIN
--     jobs j ON e.job_id = j.job_id
-- WHERE 
--     j.job_title NOT IN ('Programmer', 'Shipping Clerk')
--     AND e.salary NOT IN (4500, 10000, 15000);

-- SELECT last_name FROM  employees WHERE last_name ILIKE '______'

-- SELECT last_name FROM  employees WHERE last_name ILIKE '__e%'

-- SELECT DISTINCT j.job_title
-- FROM employees e
-- JOIN jobs j ON e.job_id = j.job_id;

-- SELECT * FROM employees WHERE last_name ILIKE 'JONES' OR last_name ILIKE 'BLAKE' OR last_name ILIKE ' SCOTT' OR last_name ILIKE 'KING' OR last_name ILIKE ' FORD'



