const fetchReports = (req ,res, pool) => {
    pool.connect((err, db, done) => {
        if(err) {
            return res.status(400).send(err);
        }
        else {
            db.query('SELECT * from reports', (err, table) => {
                done();
                if (err) {
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send(table.rows)
                }
            }) 
        }
    })
}

module.exports = {
    fetchReports
}