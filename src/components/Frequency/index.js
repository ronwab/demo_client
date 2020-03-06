import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'

function Frequency(){

const [frequencyCount, setFrequencyCount]= useState([])

useEffect(()=>{
  const getFrequency = async()=>{
      try
       {
       const url = `http://localhost:3000/frequency_checker`
       const results = await fetch(url)
       const data = await results.json()

      setFrequencyCount(data.message)
      console.log(data.message)
        console.log("frequency", frequencyCount)

       }catch(e) {
       console.log(e)
       }
  }
  getFrequency()
  console.log("frequency", frequencyCount)
 }, [frequencyCount.k])

return (
<div style= {styles}>
<Table striped bordered hover size="sm" >
  <thead>
    <tr>
      <th>Count</th>
      <th>Character</th>

    </tr>
  </thead>
           <tbody>
                            { frequencyCount.map((frequency, i) => (
                                <tr key ={i}>

                                   <td> {Object.keys(frequency)[0]}</td>
                                   <td> {Object.values(frequency)[0]}</td>

                             </tr>
                          ))}
                      </tbody>
</Table>

</div>
)}
const styles = {

padding: "100px 80px"
}
export default Frequency