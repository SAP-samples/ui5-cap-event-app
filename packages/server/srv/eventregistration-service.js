const cds = require('@sap/cds')

// https://cap.cloud.sap/docs/guides/providing-services#registering-event-handlers
module.exports = function () {
    this.on ('CREATE', `Person`, (req, next)=>{
        req.data.Email = req.user.id; // add user e-mail to the dataset (not entered in the UI, but derived from logged-in user)
        return next();
    });
}