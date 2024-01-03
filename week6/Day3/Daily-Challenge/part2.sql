-- CREATE TABLE Book (
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL, 
-- 	author VARCHAR(50) NOT NULL
-- );

-- INSERT INTO Book (title, author) VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL UNIQUE,
--     age INTEGER CHECK (age <= 15)
-- );

-- INSERT INTO Student (name, age) VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- CREATE TABLE Library (
--     book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id)
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
-- ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');


-- SELECT * FROM Library

-- SELECT S.name, B.title
-- FROM Library AS L
-- JOIN Student AS S ON L.student_fk_id = S.student_id
-- JOIN Book AS B ON L.book_fk_id = B.book_id;

-- SELECT AVG(S.age) AS average_age
-- FROM Library AS L
-- JOIN Student AS S ON L.student_fk_id = S.student_id
-- WHERE L.book_fk_id = (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland');

-- DELETE FROM Student WHERE name = 'Patrick';
--that the data integrity is maintained, and any references to the deleted student are automatically removed from the junction table.