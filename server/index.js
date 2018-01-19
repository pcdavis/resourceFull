const express = require('express'),
        bodyParser = require('body-parser'),
        app = express(),
        control = require ('./controllers/api-request_controller'),
        port = 3001;

app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

app.post('/api/messages', control.create);
app.get('/api/messages', control.read);
app.put('/api/messages/:update', control.update);
app.delete('/api/messages/:id', control.delete);

// const dataToExport = require('./path to where dataToExport exists - its a psuedo database to use before actual database is used)