import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const Planets = () => {
 const [page, setPage] = useState(1)
 const { data, status } = useQuery(['planets', page], async () => {
  const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`)
  return await response.json();
 })

 return (
  <div>
   <h2>Planets</h2>
   {
    status === 'loading' && (
     <div>Loading data....</div>
    )
   }
   {
    status === 'error' && (
     <div>Error fetching data</div>
    )
   }
   {
    status === 'success' && (
     <>
      {console.log(data.next)}
      <span>Current Page: {page}</span>
      <button
       onClick={() => setPage(old => Math.max(old - 1, 0))}
       disabled={page === 1}
      >
       Previous Page
       </button>{' '}
      <button
       onClick={() => setPage(old => old + 1)}
       // Disable the Next Page button until we know a next page is available
       disabled={data.next === null}
      >
       Next Page
   </button>
      <div>{data.results.map((planet) => (
       <Planet planet={planet} key={planet.name} />
      ))}</div>
     </>
    )
   }
  </div >
 )
}

export default Planets
