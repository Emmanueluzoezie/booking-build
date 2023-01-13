import { format } from 'date-fns';
import moment from 'moment';
import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { GrFormClose } from 'react-icons/gr';
import Moment from 'react-moment';
import { useContextState } from '../context/context';

const SideSearch = () => {
    const { startDate, setStartDate, endDate, setEndDate, setSearch} = useContextState()

    const handleSearch = () => {
        setSearch(false)
    }

    console.log(startDate)

  return (
    <div className='w-[370px]'>
        
          <div className='bg-red-400 px-6 py-10 relative rounded-xl'>
              <button onClick={() => setSearch(false)} className="text-2xl absolute top-3 rounded-full bg-white right-3">
                  <GrFormClose />
              </button>
              <h1 className='font-semibold text-xl'>Please fill in inputs</h1>
              <form>

                  <div className='mt-6'>
                      <div>
                          <h3 className='text-xl font-bold'>Location:</h3>
                          <input type="text" name='location' className='w-full mt-2 p-2 ' placeholder='Select a place or car or location'/>
                      </div>
                      <div className='mt-10'>
                          <div className="space-y-3">
                              <h2 className='text-xl font-bold'>Date</h2>
                              <div className='flex items-center'>
                                  <h2 className='font-semibold w-[35%]'>Start Date:</h2>
                                  <div>
                                      <DatePicker
                                          selected={startDate}
                                          onChange={date => setStartDate(date)}
                                          dateFormat="dd/MM/yyyy"
                                          className='w-[120px] text-center'
                                          placeholderText="Select a date"
                                      />
                                  </div>
                              </div>
                              <div className='flex items-center'>
                                  <h2 className='font-semibold w-[35%]'>End Date:</h2>
                                  <div>
                                      <DatePicker
                                          selected={startDate}
                                          onChange={date => setStartDate(date)}
                                          dateFormat="dd/MM/yyyy"
                                          className='w-[120px] text-center'
                                          placeholderText="Select a date"
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='pt-10 space-y-4'>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-semibold w-[35%]'>Children:</h2>
                              <input className='font-semibold w-[70px] text-center text-sm sm:text-lg outline-none py-1' placeholder='0' />
                          </div>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-semibold w-[35%]'>Children:</h2>
                              <input className='font-semibold w-[70px] text-center text-sm sm:text-lg outline-none py-1' placeholder='0' />
                          </div>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-semibold w-[35%]'>Children:</h2>
                              <input className='font-semibold w-[70px] text-center text-sm sm:text-lg outline-none py-1' placeholder='0' />
                          </div>
                      </div>
                  </div>
                  <button className='my-10 p-2 text-xl font-semibold text-white bg-blue-500 w-full rounded-lg' onClick = {() => setSearch(false)}>
                      Search
                  </button>
              </form>
        </div>
    </div>
  )
}
 
export default SideSearch