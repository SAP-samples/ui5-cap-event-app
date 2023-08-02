const cds = require('@sap/cds');

cds.on('bootstrap', (app) => {
    app.post("/odata/v4/event-registration/logout", (req, res) => {
        // Send 401 Unauthorized to tell the browser to forget the credentials.
        // NOTE: while this works for the sample app, it is not double-checked for 100% security! 
        res.status(401);
        res.send();
    });
});

// Delegate bootstrapping to built-in server.js of CDS
module.exports = cds.server