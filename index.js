const express = require('express');

const app = express();

app.use(() => {
    console.log('halo server');
})

app.listen(4000);