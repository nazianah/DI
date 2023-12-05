-- CREATE TABLE students(
--     students_id SERIAL PRIMARY KEY,
--     first_name TEXT,
--     last_name TEXT,
--     birth_date DATE
-- );

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
--     ('Marc', 'Benichou', '1998-11-02'),
--     ('Yoan', 'Cohen', '2010-12-03'),
--     ('Lea', 'Benichou', '1987-07-27'),
--     ('Amelia', 'Dux', '1996-04-07'),
--     ('David', 'Grez', '2003-06-14'),
--     ('Omer', 'Simpson', '1980-10-03');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Nazianah', 'Jhakri', '1995-02-02')

-- SELECT * FROM students

-- SELECT first_name, last_name FROM students

-- SELECT first_name, last_name FROM students WHERE students_id = 2;

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' or last_name = 'Benichou'

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'

-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%'

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a'

-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_'

-- SELECT first_name, last_name FROM students WHERE students_id = 1 OR students_id = 3

SELECT * FROM students WHERE birth_date >= '2000-01-01'
