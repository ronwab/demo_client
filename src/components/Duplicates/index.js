import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
const BASE_URL = process.env.BASE_URL

function PeopleDuplicates() {
  const [myDuplicates, setMyDuplicates] = useState([])

  useEffect(() => {
    const getMyPeople = async () => {
      try {

        const url = `http://localhost:3000/duplicate_checker`
        const results = await fetch(url)
        const data = await results.json()
        setMyDuplicates(data.message)
      } catch (e) {
        console.log(e)
      }

    }
    getMyPeople()
  }, [setMyDuplicates])
  return (
    <div style={styles}>
      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Duplicates?</th>
          </tr>
        </thead>
        <tbody>
          {myDuplicates.map((duplicates, i) => (
            <tr key={i}>

              <td> {duplicates.first_name}</td>
              <td> {duplicates.last_name}</td>
              <td> {duplicates.email_address}</td>
              <td> {duplicates.is_duplicate.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}
const styles = {

  padding: "100px 80px"
}

export default PeopleDuplicates