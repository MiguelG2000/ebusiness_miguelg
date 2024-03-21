const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto WHERE categoria = "Lijas"', (err, lija) => {
      if (err) {
        res.json(err);
      }
      res.render('lijas', {
        data: lija
      });
    });
  });
};

module.exports = controller;