const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');
const { start } = require('repl');

let userInformation = [];

const parser = parse({
    columns: true
});

fs.createReadStream('./data/UserInformation.csv')
    .pipe(parser)
    .on('data', (json) => {
        userInformation.push(json);
    });

module.exports = function(app) {
    app.get('/data', function(req, res) {
        res.json(userInformation);
    });
    app.get('/user/:id', function(req, res) {
        const userInput = req.params.id;
        const requestedUser = userInformation.filter(user => user.id === userInput || user.profession === userInput || user.country === userInput);
        res.json(requestedUser);
    });
    app.post('/date-range', (req, res) => {
        let { startDate, endDate } = req.body;

        if (!startDate || !endDate) {
            return res.status(400).json({ error: 'Start date and end date are required' });
        }

        startDate = new Date(startDate).getTime();
        endDate = new Date(endDate).getTime();

        const filteredUsers = userInformation.filter(user => new Date(user.dateCreated).getTime() >= startDate && new Date(user.dateCreated).getTime() <= endDate);

        res.json(filteredUsers);
    });
}