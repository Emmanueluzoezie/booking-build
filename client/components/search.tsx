import { format } from 'date-fns';
import { useContextState } from '../context/context';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
    const { startDate, setStartDate, endDate, setEndDate, } = useContextState()

  return (
      <div className='px-0 relative '>
          <form className='lg:flex w-full items-center bg-gray-300 rounded-xl p-4 space-y-2 sm:space-y-0'>
              <div className='sm:flex lg:w-[50%] space-y-4 sm:space-y-0'>
                  <div className='flex-1'>
                      <input placeholder='country/city/place' className='w-full w-inherit p-2 font-semibold text-[16px] outline-none bg-white px-2' />
                  </div>
                  <div className='relative flex items-center sm:ml-4'>
                      <div className="cursor-pointer flex items-center  pr-28 justify-between md:pr-0 space-x-4 bg-inherit text-[16px]">
                          <div>
                              <DatePicker
                                  selected={startDate}
                                  onChange={date => setStartDate(date)}
                                  dateFormat="dd/MM/yyyy"
                                  placeholderText="Select a date"
                                  className='w-[120px] text-center'
                              />
                          </div>
                          <h2 className='font-bold'>To</h2>
                          <div>
                              <DatePicker
                                  selected={endDate}
                                  onChange={date => setEndDate(date)}
                                  dateFormat="dd/MM/yyyy"
                                  placeholderText="Select a date"
                                  className='w-[120px] text-center'
                              />
                          </div>
                      </div>
                  </div>
              </div>

              <div className='flex items-center lg:w-[50%] sm:mt-3 lg-0'>
                  <div className='flex-1'>
                      <div className='flex justify-between lg:pl-10 pb-2 pt-2 sm:pt-0'>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-semibold'>Children:</h2>
                              <input className='font-semibold w-[60px] text-center bg-white text-sm sm:text-lg' placeholder='0' />
                          </div>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-semibold'>Children:</h2>
                              <input className='font-semibold w-[60px] text-center bg-white text-sm sm:text-lg' placeholder='0' />
                          </div>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-semibold'>Children:</h2>
                              <input className='font-semibold w-[60px] text-center bg-white text-sm sm:text-lg' placeholder='0' />
                          </div>
                      </div>
                  </div>
                  <button className='absolute top-[68px] right-4 sm:relative sm:top-0 sm:right-0 md:right-0 bg-gray-700 py-1 px-7 md:px-20 sm:py-2 lg:px-10 text-white rounded-md ml-4'>Search</button>
              </div>
          </form>
      </div>
  )
}

export default Search