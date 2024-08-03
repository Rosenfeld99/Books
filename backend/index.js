import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "sys",
});

// get endpoint
app.get("/", (req, res) => {
  return res.json("endpoint books");
});

// get all books
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

// get single books
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM books WHERE id = ?";
  
  db.query(q, [id], (error, data) => {
    if (error) return res.status(500).json(error);
    if (data.length === 0) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json(data[0]);
  });
});

// add single books
app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books (`title`,`description`,`cover`,`price`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [values], (error, data) => {
    if (error) return res.status(500).json(error);
    return res.status(201).json("Book has been created successfully");
  });
});

// delete single books
app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const deleteQuery = "DELETE FROM books WHERE id = ?";
  const selectQuery = "SELECT * FROM books";

  db.query(deleteQuery, [id], (deleteError, deleteData) => {
    if (deleteError) return res.status(500).json(deleteError);

    db.query(selectQuery, (selectError, selectData) => {
      if (selectError) return res.status(500).json(selectError);
      return res.status(200).json({
        message: "Book has been deleted successfully",
        books: selectData,
      });
    });
  });
});

// update single books
app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const updateQuery = 
    "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE `id` = ?";
  const selectQuery = "SELECT * FROM books";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.cover,
  ];

  db.query(updateQuery, [...values, id], (updateError, updateData) => {
    if (updateError) return res.status(500).json(updateError);

    db.query(selectQuery, (selectError, selectData) => {
      if (selectError) return res.status(500).json(selectError);
      return res.status(200).json({
        message: "Book has been updated successfully",
        books: selectData,
      });
    });
  });
});


app.listen(8800, () => {
  console.log("connected to server");
});
