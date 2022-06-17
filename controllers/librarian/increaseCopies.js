const handleCopiesIncrease = (req, res, db) => {
    const { isbn } = req.body;
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
  };
  
  module.exports = {
    handleCopiesIncrease: handleCopiesIncrease,
  };
  