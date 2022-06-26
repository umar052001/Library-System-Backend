const handleCopiesDecrease = (req, res, db) => {
  const { isbn } = req.params;
  if (!isbn) {
    return res.status(400).json("incorrect form submission");
  }
  db("books")
    .where({ isbn })
    .decrement("copies", 1)
    .then((copies) => {
      res.json(copies[0]);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  handleCopiesDecrease: handleCopiesDecrease,
};
