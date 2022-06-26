const handleIssueData = (req, res, db) => {
    db.select()
      .from("issue")
      .then((request) => {
        res.json(request);
      })
      .catch((err) => res.status(400).json(err));
  };
  
  module.exports = {
    handleIssueData: handleIssueData,
  };
  