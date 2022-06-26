const handleCopiesIncrease = (req, res, db) => {
  const { isbn } = req.params;
  if (!isbn) {
    return res.status(400).json("incorrect form submission");
  }
  db("books")
    .where({ isbn })
    .increment("copies", 1)
    .then((copies) => {
      res.json(copies[0]);
    })
    .catch((err) => res.status(400).json(err));

  db("issue")
    .where({ isbn })
    .del()
    .then((books) => {
      res.json(books[0]);
    })
    .catch((err) => res.status(400).json("unable to delete data"));
};

module.exports = {
  handleCopiesIncrease: handleCopiesIncrease,
};
