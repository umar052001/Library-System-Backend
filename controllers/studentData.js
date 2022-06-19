const handleStudentData = (req, res, db) => {
    const {email} = req.params
    db.select()
      .from("student").where("email","=",email)
      .then((student) => {
        res.json(student);
      })
      .catch((err) => res.status(400).json(err));
  };
  
  module.exports = {
    handleStudentData: handleStudentData,
  };