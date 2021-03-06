const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

//init middleware
app.use(express.json({ extended:false }));

app.get('/',(req,res) => res.send(`API running...`));

var cors = require('cors')

app.use(cors());

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/bank', require('./routes/api/bank'));
app.use('/api/transaction', require('./routes/api/transaction'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
