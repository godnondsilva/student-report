import React from 'react';

class LoadReports extends React.Component {
    constructor(props)  {
        super(props);
        // this.updateReports = this.updateReports.bind(this)
        this.state = {
            reports: []
        }
    }

    componentDidMount() {
        var that = this;
        console.log('component has been mounted');
        fetch('http://localhost:3000/api/reports')
        .then(res => res.json())
        .then(data => {
            that.setState({
                reports: data 
            }, () => console.log(this.state.reports))
        })
      }

    // updateReports = (reports) => {
    //     this.setState({
    //       reports: reports
    //     })
    // }

    render() {
        const { reports } = this.state;
        return(
            <div>
                <ul>
                    {reports.map(report => (
                        <li key={report.id}>
                            <h3>{report.report_title}</h3>
                            <p>{report.report_level} | {report.report_category} | {report.date}</p>
                            <p>{report.report_text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default LoadReports;