const handleBooksInsertion = (req, res, db) => {
  const { author, copies, isbn, name } = req.body;
  if (!author || !copies || !isbn || !name) {
    return res.status(400).json("incorrect form submission");
  }

  db("books")
    .insert({
      author: author,
      copies: copies,
      isbn: isbn,
      name: name,
    })
    .then((books) => {
      res.json(books[0]);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  handleBooksInsertion: handleBooksInsertion,
};
