const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
require('./src/startup/server')(app);

const PORT = process.env.PORT || 3600;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
