import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'
const fetchPeople = async () => {
 const response = await fetch('http://swapi.dev/api/people/')
 return await response.json();
}

const People = () => {
 const { data, status } = useQuery('People', fetchPeople)
 console.log(data);
 return (
  <div>
   <h1>People</h1>
   {status === 'loading' && (
    <div>Loading data....</div>
   )}
   {status === 'error' && (
    <div>Error fetching data</div>
   )}
   {status === 'success' && (
    <div>{data.results.map((person) => (
     <Person person={person} key={person.name} />
    ))}</div>
   )}
  </div>
 )
}

export default People
