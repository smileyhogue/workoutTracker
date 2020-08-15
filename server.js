const express = require('express');

const app = express();

//------------ Routes ------------//
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/users'));

const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));