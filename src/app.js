const express =require('express');
const path =require('path')
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app =express()

// setings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Pagina raiz
app.get('/', (req, res) => {
  res.render('index.ejs')
});

//routes
const productoRoutes = require('./routes/producto');
const categoriasRoutes = require('./routes/categoria');
const calzadoRoutes = require('./routes/calzado');
const lijasRoutes = require('./routes/lija');
const llantasRoutes = require('./routes/llanta');
const tablasRoutes = require('./routes/tabla');
const trucksRoutes = require('./routes/trucks');

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '2609',
    port: 3306,
    database: 'lklskateshop'
},'single'));
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/Eproducto', productoRoutes);
app.use('/Ecategoria', categoriasRoutes);
app.use('/calzado', calzadoRoutes);
app.use('/lijas', lijasRoutes);
app.use('/llantas', llantasRoutes);
app.use('/tablas', tablasRoutes);
app.use('/trucks', trucksRoutes);


// Static files
app.use(express.static(path.join(__dirname, 'public')));

//Conexion al puerto
app.listen(app.get('port'), ()=> {
  console.log('Server listen on port 3000');
});
