const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto', (err, producto) => {
      if (err) {
        res.json(err);
      }
      res.render('Eproducto', {
        data: producto
      });
    });
  });
};

module.exports = controller;