const handleBooksDelete = (req, res, db) => {
  const { isbn } = req.params;

  db("books")
    .where({ isbn })
    .del()
    .then((books) => {
      res.json(books[0]);
    })
    .catch((err) => res.status(400).json("unable to delete data"));
    db("issue")
    .where({ isbn })
    .del()
    .then((books) => {
      res.json(books[0]);
    })
    .catch((err) => res.status(400).json("unable to delete data"));
};

module.exports = {
  handleBooksDelete: handleBooksDelete,
};
