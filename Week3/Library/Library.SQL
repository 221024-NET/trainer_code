-- create a schema
CREATE SCHEMA Library;
GO

-- create book table
CREATE TABLE Library.Books 
(
    Title VARCHAR(MAX) NOT NULL,
    Author VARCHAR(MAX) NOT NULL,
    ISBN VARCHAR(20) NOT NULL PRIMARY KEY,
    Inventory INT NOT NULL
);
GO
-- DROP TABLE Library.Books;

-- create user table
CREATE TABLE Library.Users
(
    CardNum INT IDENTITY PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(MAX) NOT NULL
);
GO
-- DROP TABLE Library.Users;

-- create check-out table
CREATE TABLE Library.Checkout
(
    TransactionId INT IDENTITY PRIMARY KEY,
    ISBN VARCHAR(20) NOT NULL,
    CardNum INT NOT NULL,
    TransactionDate DATE NOT NULL,
    ReturnDate DATE
);
GO
-- DROP TABLE Library.Checkout;

-- establish the relationships
ALTER TABLE Library.Checkout ADD CONSTRAINT
    FK_Books_Checkout FOREIGN KEY (ISBN) REFERENCES Library.Books (ISBN);

ALTER TABLE Library.Checkout ADD CONSTRAINT
    FK_Users_Checkout FOREIGN KEY (CardNum) REFERENCES Library.Users (CardNum);

-- seed tables
INSERT INTO Library.Books (Title, Author, ISBN, Inventory)
VALUES
    ('Fool', 'Christopher Moore', '978-0-06-059032-1', 3),
    ('The Blood Mirror', 'Brent Weeks', '978-0-316-25132-7', 2),
    ('Wrath', 'John Gwynne', '978-0-316-38634-0', 4);

INSERT INTO Library.Users (FirstName, LastName, Email)
VALUES
    ('Bryon', 'Fields', 'BF@gmail.com'),
    ('Skyler','Ow-Bearing', 'Sky@hotmail.com'),
    ('Damon', 'Boone', 'admin@damon.net');

INSERT INTO Library.Checkout (ISBN, CardNum, TransactionDate)
VALUES
    ('978-0-06-059032-1', 3, SYSUTCDATETIME()),
    ('978-0-316-38634-0', 3, SYSUTCDATETIME()),
    ('978-0-316-25132-7', 2, SYSUTCDATETIME()),
    ('978-0-316-25132-7', 1, SYSUTCDATETIME());


    SELECT * FROM Library.Books;
    SELECT * FROM Library.Users;
    SELECT * FROM Library.Checkout;

    select * from library.books;


-- select the number of each book that is checked out (count of each book that is checked out)
    
    SELECT Title, Inventory - COUNT(Title) AS Available FROM Library.Books
        JOIN Library.Checkout 
        ON Library.Books.ISBN = Library.Checkout.ISBN
        WHERE ReturnDate IS NULL 
        GROUP BY Title, Inventory
        HAVING (Inventory - COUNT(Title)) > 0;
    