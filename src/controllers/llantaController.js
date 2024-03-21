const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM producto WHERE categoria = "LLantas"', (err, llanta) => {
      if (err) {
        res.json(err);
      }
      res.render('llantas', {
        data: llanta
      });
    });
  });
};

module.exports = controller;