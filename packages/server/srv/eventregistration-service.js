module.exports = async (srv) => {

    srv.on('NEW', 'Person', (req, next) => {
        req.data.Email = req.user.id; // add user e-mail to the dataset (not entered in the UI, but derived from logged-in user)
        return next();
    });
}
