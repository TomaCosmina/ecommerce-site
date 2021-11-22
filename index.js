if (process.env.NODE_ENV !== "development") {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');

const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const Products = require('./models/products');

const productsRoutes = require('./routes/products')
const menRoutes = require('./routes/menRoutes')
const womenRoutes = require('./routes/womenRoutes')

dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/ecommerce-site';
const secret = process.env.SECRET || 'thisshouldbeabettersecret';


mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
})

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))


const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret
    }
});

store.on('error', function(e) {
    console.log('session store error', e)
});

const sessionConfig = {
    store,
    name: 'MySession',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));

app.get('/', async(req, res) => {
    const products = await Products.find({})
    res.render('home', { products })
})
app.get('/login', (req, res) => {
    res.render('pages/login');
})
app.get('/register', (req, res) => {
    res.render('pages/register')
})


app.use('/products', productsRoutes)
app.use('/men', menRoutes)
app.use('/women', womenRoutes)



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})