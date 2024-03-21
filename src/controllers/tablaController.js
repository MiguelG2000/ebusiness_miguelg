const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto WHERE categoria = "Tablas"', (err, tabla) => {
      if (err) {
        res.json(err);
      }
      res.render('tablas', {
        data: tabla
      });
    });
  });
};

module.exports = controller;