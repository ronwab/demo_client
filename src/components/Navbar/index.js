import  React from 'react'

import {NavLink} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

function Nav () {
 return (
<div>

 <Navbar style={styles.bar}>
<ul>
    <NavLink to= '/blah' exact activeStyle={{color: "green"} } style={styles.children} >All People</NavLink>
    <NavLink to= '/frequency' exact activeStyle={{color: "green"}} style={styles.children}>Frequency </NavLink>
    <NavLink to= '/duplicates' exact activeStyle={{color: "green"}} style={styles.children}>Duplicates </NavLink>
</ul>
 </Navbar>
</div>
 )
}
const styles ={
 bar: {
    display:'flex',
    backgroundColor:'black',
    height: '56px',
    position: "sticky",
    top: 0

 },
 children: {
     color: 'white',
     paddingLeft: "10px"
 }
}

export default Nav