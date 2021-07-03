import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Card,Row,Col} from 'react-bootstrap';

export class CovidItem extends Component {

   
    render() {
       

        return (
        <div style={{ margin:'10px',display: 'flex',justifyContent: 'center' }}>
            <Card border="light" style={{ width: '50rem', textAlign: 'center' }}>
                <Card.Header>{this.props.Name}</Card.Header>
                <Card.Body>
                <div style={{ margin:'10px 30px'}}>
                <Row xs={2} md={2} lg={2}>
                    <Col></Col>
                    <Col style= {{textAlign:'left'}}>Vacant/Total</Col>
                </Row>
                <Row xs={2} md={2} lg={2}>
                    <Col>Normal</Col>
                    <Col style= {{textAlign:'left'}}>{this.props.CovidBedDetails.VaccantNonO2Beds}/{this.props.CovidBedDetails.AllotedNonO2Beds}</Col>
                </Row>
                <Row xs={2} md={2} lg={2}>
                    <Col>Oxygen</Col>
                    <Col style= {{textAlign:'left'}}>{this.props.CovidBedDetails.VaccantO2Beds}/{this.props.CovidBedDetails.AllotedNonO2Beds}</Col>
                </Row>
                <Row xs={2} md={2} lg={2}>
                    <Col>ICU</Col>
                    <Col style= {{textAlign:'left'}}>{this.props.CovidBedDetails.VaccantICUBeds}/{this.props.CovidBedDetails.AllotedICUBeds}</Col>
                </Row>
                <Row xs={2} md={2} lg={2}>
                    <Col>Total</Col>
                    <Col style= {{textAlign:'left'}}>{this.props.CovidBedDetails.TotalVaccantBeds}/{this.props.CovidBedDetails.BedsAllotedForCovidTreatment}</Col>
                </Row>
                <hr></hr>
                <Row xs={1} md={2} lg={2}>
                    <Col>{this.props.PrimaryContactPerson}</Col>
                    <Col> <a href={"tel:+91 "+this.props.MobileNumber}>{this.props.MobileNumber}</a> </Col>
                </Row>
                <hr></hr>
                <Row xs={1} md={3} lg={3}>
                    <Col>{'ContactName' in this.props.ContactDetails[0] === false || this.props.ContactDetails[0].ContactName === ''? 'N/A' : this.props.ContactDetails[0].ContactName}</Col>
                    <Col>{'ContactNumber' in this.props.ContactDetails[0] === false || this.props.ContactDetails[0].ContactNumber === ''? 'N/A' : <a href={"tel:+91 "+this.props.ContactDetails[0].ContactNumber}>{this.props.ContactDetails[0].ContactNumber}</a>}</Col>
                    <Col>{'Timing' in this.props.ContactDetails[0] === false || this.props.ContactDetails[0].Timing === ''? 'N/A' : this.props.ContactDetails[0].Timing}</Col>
                </Row>

                <hr></hr>
                <Row xs={1} md={1} lg={1}>
                    <Col>{Object.keys(this.props.AddressDetail).length > 0 ? Object.keys(this.props.AddressDetail).map((k) =>{return /Line\d+$/.test(k) ? this.props.AddressDetail[k] : '' }).join(",").replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',') === '' ? 'N/A' : Object.keys(this.props.AddressDetail).map((k) =>{return /Line\d+$/.test(k) ? this.props.AddressDetail[k] : '' }).join(",").replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',') :'N/A'}</Col>
                    <Col>
                    <a href={"https://www.google.com/maps/search/?api=1&query="+this.props.Latitude+","+this.props.Longitude} target="_blank" rel="noreferrer">Location</a></Col>
                </Row>
                </div>
                </Card.Body>
            </Card>
        </div>
        )
    }
}


// PropTypes
CovidItem.propTypes = {
    item: PropTypes.object,
    
  }
  
export default CovidItem
