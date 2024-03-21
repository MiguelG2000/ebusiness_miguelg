const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto WHERE categoria = "Calzado"', (err, calzado) => {
      if (err) {
        res.json(err);
      }
      res.render('calzado', {
        data: calzado
      });
    });
  });
};

module.exports = controller;