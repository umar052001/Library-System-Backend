const handleLibrarianSignIn = (db) => (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("incorrect form submission");
    }
    db.select("email", "password")
      .from("librarian")
      .where({
        email: email,
        password: password,
      })
      .then((users) => {
        if (users.length) {
          res.json(users[0]);
        } else {
          res.status(400).json("user not found");
        }
      })
      .catch((err) => res.status(400).json("user not found"));
  };
  module.exports = {
    handleLibrarianSignIn: handleLibrarianSignIn,
  };
  