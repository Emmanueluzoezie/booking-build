import React from 'react'
import { useContextState } from '../context/context'
import Footer from './footer'
import SideSearch from './sideSearch'

const Body = () => {
    const {search} = useContextState()

  return (
    <div className='flex pt-10 h-[92vh] px-4'>
          {search && <div className='fixed md:relative'>
              <SideSearch />
            </div>}
          <div className='h-[87vh] bg-blue-400 w-full'>
            <div className='p-4 '>
                  <h2>body</h2>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Body