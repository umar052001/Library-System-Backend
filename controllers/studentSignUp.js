const handleStudentSignUp = (req, res, db) => {
  const { email, name, password, phone, dpt } = req.body;
  if (!email || !name || !password || !dpt) {
    return res.status(400).json("incorrect form submission");
  }
  db.insert({
    password: password,
    email: email,
    name: name,
    phone: phone,
    department: dpt,
  })
    .into("student")
    .then((student) => {
      res.json(student[0]);
    })

    .catch((err) => res.status(400).json(err));
};

module.exports = {
  handleStudentSignUp: handleStudentSignUp,
};
