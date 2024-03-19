const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM categoria', (err, categoria) => {
      if (err) {
        res.json(err);
      }
      res.render('Ecategoria', {
        data: categoria
      });
    });
  });
};

module.exports = controller;