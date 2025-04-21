const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = 5000


app.use(bodyParser.json());

app.use('/', userRoutes);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));