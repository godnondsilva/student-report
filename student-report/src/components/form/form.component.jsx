import React from 'react';

import './form.styles.css'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitReport = this.submitReport.bind(this)
        this.levelHandler = this.levelHandler.bind(this)
        this.categoryHandler = this.categoryHandler.bind(this)
        this.state = {
            reports: [],
            report_category: '',
            report_level: ''
        }
    }

    submitReport(e) {
        var that = this;
        e.preventDefault();

        if(that.refs.report_title.value === '' ||
        that.refs.report_text.value === '' || 
        this.state.report_level === '' || 
        this.state.report_category === '') {
            return this.validate();
        }

        alert("Your report has been submitted! Thank you!")

        //var presentYear = new Date().getFullYear();


        let report_data = {
            report_title: this.refs.report_title.value,
            report_text: this.refs.report_text.value,
            report_category: that.state.report_category,
            report_level: that.state.report_level
        };

        // var request = new Request('http://localhost:'+ PORT +'/api/submitreport', {
        //     method: 'POST',
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        //     body: JSON.stringify(report_data)
        // })

        // let reports = that.state.reports;
        //     reports.push(report_data);
        //     that.setState({
        //         reports: reports
        // })

        // fetch(request)
        //     .then(response => response.json())
        //     .catch(err => console.log(err))
        fetch('http://localhost:3000/api/submitreport', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report_data)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
        

        that.refs.report_title.value = '';
        that.refs.report_text.value = '';
    }


    validate() {
        alert("please enter the values");
    }

    levelHandler(e) {
        let that = this;
        e.preventDefault();
        that.setState({
            report_level: e.target.value
        })
    }

    categoryHandler(e) {
        let that = this;
        e.preventDefault();
        that.setState({
            report_category: e.target.value
        })
    }
    
    render() {
        return (
            <div className="App">
            <h1>report app</h1>
                <form>
                    Level:
                    <div className='select'>
                    <select required onChange={this.levelHandler} className="form-control" id="level" >
                        <option disabled selected value> -- Select an Option -- </option>
                        <option value = "Departmental level">Departmental level</option>
                        <option value = "Institute / College level">Institude/College level</option>
                        <option value = "University level">University level</option>
                    </select>
                    </div>
                    Category:
                    <div className='select'>
                    <select required onChange={this.categoryHandler} className="form-control" id="category" >
                        <option disabled selected value> -- Select an Option -- </option>
                        <option value = "Admission">Admission</option>
                        <option value = "Finance">Finance</option>
                        <option value = "Examination fees">Examination fees</option>
                        <option value = "Lecturer Timetable">Lecturer Timetable</option>
                        <option value = "Paper Re-Evaluation">Paper Re-Evaluation</option>
                    </select>
                    </div>
                    <label>Report Title: </label>
                    <div>
                        <input type="text" ref="report_title" placeholder="report title" />
                    </div>
                    <label>Report Text: </label>
                    <div>
                        <textarea type="text" ref="report_text" placeholder="report text"  />
                    </div>
                    <button onClick={this.submitReport}>Submit report</button>
                </form>
            </div>
        )
    }
}

export default Form;