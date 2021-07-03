import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './App.css';
import Header from './Components/Header';
import CovidList from './Components/CovidList';
import About from './Components/Pages/About';
import axios from 'axios'
export class App extends Component {

  constructor(props){
    super(props);
  this.state = {CovidData : [],District : 'Select District', DistrictsData: []
  };
}

  componentDidMount(){
    axios.get('https://tncovidbeds.tnega.org/api/district')

    .then(res => {
    this.setState({DistrictsData: res.data.result});

  });
  };

  stateSelect = (v) => {
    //this.setState({District: v})
    axios.post('https://tncovidbeds.tnega.org/api/hospitals',{
      "Districts": [v],
      "FacilityTypes": ["CHO",
      "CHC",
      "CCC"],
      "IsGovernmentHospital": true,
      "IsPrivateHospital": true,
      "SortValue": "Availability",
      "pageLimit": 10000
    })

    .then(res => {
    this.setState({CovidData: res.data.result});
    this.setState({District: res.data.result[0].District.Name})

  });

  }

  render() {
    return (
      <Router>
      <div >
       <Header/>
       <div style={{ margin:'10px',display: 'flex',justifyContent: 'center' }}>
       <DropdownButton
          className = 'Black-button'
          title={this.state.District}
          id="DistrictDropdown"
          variant="secondary"
          onSelect={this.stateSelect}
            >
             { this.state.DistrictsData.map((item) => (
                <Dropdown.Item  key={item._id} eventKey={item.id}>{item.Name}</Dropdown.Item>  
        ))}
                  
                 
      </DropdownButton>
      </div>
       <Route exact path= "/" render = { props => (
         <React.Fragment>
            <CovidList CovidData={this.state.CovidData} />
          </React.Fragment>
       )}/> 
              <Route path= "/about" component = {About}></Route>
      </div>
      </Router>
    )
  }
}

export default App
