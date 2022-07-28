const app = require('express')();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./Route/Route')(app);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);