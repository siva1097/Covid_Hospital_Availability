import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CovidItem from './CovidItem'

export class CovidList extends Component {
    render() {
        return this.props.CovidData.map((item) => (
          <CovidItem key={item._id}  {...item}/>  
        ));
    }
}

// PropTypes
CovidList.propTypes = {
  CovidData: PropTypes.array
  }
export default CovidList
