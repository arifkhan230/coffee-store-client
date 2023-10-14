

import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees,setCoffees] = useState(loadedCoffees)

  return (
    <>
      <h1 className='text-6xl text-purple-600 font-bold text-center'>Espresso Coffee</h1>
      <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-20'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees} >
            </CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
