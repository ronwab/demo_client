
import React , {useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
const BASE_URL = process.env.BASE_URL

function MyPeople () {
const [myPeopleData, setMyPeopleData] = useState ([])

 useEffect(()=>{
  const getMyPeople = async()=>{
      try
       {

//        const url = `${BASE_URL}/people`
       const url = `http://localhost:3000/people`
       const results = await fetch(url)
       const data = await results.json()
      setMyPeopleData(data.request.data)
       }catch(e) {
       console.log(e)
       }

  }
  getMyPeople()
 }, [myPeopleData.first_name])
console.log("outside ", myPeopleData)


return (
<div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Title</th>
    </tr>
  </thead>
          <tbody>
                        { myPeopleData.map((peopleFields, i) => (
                            <tr key ={i}>

                               <td> {peopleFields.first_name}</td>
                               <td> {peopleFields.last_name}</td>
                               <td> {peopleFields.email_address}</td>
                               <td> {peopleFields.title}</td>
                         </tr>
                      ))}
                     </tbody>
</Table>

</div>
)}
export default MyPeople