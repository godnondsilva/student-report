const handleSubmit = (req, res, pool) => {
    var report_title = req.body.report_title;
    var report_text = req.body.report_text;
    var report_level = req.body.report_level;
    var report_category = req.body.report_category;
    var date = new Date()
    //var id = req.body.id;
    pool.connect((err, db, done) => {
        if(err) {
            return res.status(400).send(err);
        } 
        else {
            db.query('INSERT INTO reports (date, report_title, report_text, report_level, report_category) VALUES ($1, $2, $3, $4, $5)', [date, report_title, report_text, report_level, report_category], (err, table) => {
                done();
                if(err) {
                    return res.status(400).send(err);
                }
                else {
                    console.log('DATA HAS BEEN INSERTED');
                    res.status(201).send({message: 'DATA HAS BEEN INSERTED'});
                    // db.end();
                }
            })
        }
    })
}

module.exports = {
    handleSubmit
}