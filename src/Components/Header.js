import React, { Component } from 'react'
//import {Link} from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div style = {headerStyle} >
               <p style = {{margin:'0'}}>Tamilnadu Covid Hospital Availability </p>
              {/* <Link to="/" style = {linkStyle}>Home</Link> | <Link style = {linkStyle} to="/about">About</Link> */}
               <p style = {{margin:'0'}}>Humanity Never Fails</p>
            </div>
        )
    }
}

const headerStyle = {
    background : 'rgb(53 63 70)',
    padding : '20px',
    color : 'white',
    fontSize : '25px',
    textAlign: 'center'
}
// const linkStyle = {
//     color : 'white',
//     fontSize : '15px',
//     textAlign: 'center'

// }
export default Header
