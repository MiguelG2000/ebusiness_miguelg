const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto WHERE categoria = "Trucks"', (err, trucks) => {
      if (err) {
        res.json(err);
      }
      res.render('trucks', {
        data: trucks
      });
    });
  });
};

module.exports = controller;