const handleBooksDisplay = (req, res, db) => {
  db.select()
    .from("books")
    .then((books) => {
      res.json(books);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  handleBooksDisplay: handleBooksDisplay,
};
