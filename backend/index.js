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

app.get("/", (req, res) => {
  return res.json("endpont books");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`des`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.des, req.body.cover];
  db.query(q, [values], (error, data) => {
    if (error) return res.json(error);
    return res.json("Books has ben create successfully");
  });
});

app.listen(8800, () => {
  console.log("connected to server");
});
