const handleIssueDate = (req, res, db) => {
    const { issuedate, returndate, isbn, name } = req.body;
    if (!issuedate || !returndate || !name || !isbn) {
      return res.status(400).json("incorrect form submission");
    }
  
    db("issue")
      .insert({
        issuedate: issuedate,
        returndate: returndate,
        isbn: isbn,
        name: name,
      })
      .then((issue) => {
        res.json(issue[0]);
      })
      .catch((err) => res.status(400).json(err));
  };
  
  module.exports = {
    handleIssueDate: handleIssueDate,
  };
  