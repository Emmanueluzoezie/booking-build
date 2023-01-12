import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useContextState } from '../context/context';

const Search = () => {
    const { dateRange, setDateRange, setOpenDate, openDate } = useContextState()

    const range = dateRange?.[0];
    if (range?.startDate === undefined || range?.endDate === undefined) {
        return <span>Invalid range!</span>
    }

  return (
      <div className='p-4 relative '>
          <form className='lg:flex w-full items-center bg-white rounded-xl'>
              <div className='sm:flex lg:w-[50%]'>
                  <div className='flex-1'>
                      <input placeholder='country/city/place' className='w-full w-inherit p-2 bg-inherit pl-4 sm:pl-0 font-semibold text-[16px]' />
                  </div>
                  <div className='relative'>
                      <div onClick={() => setOpenDate(!openDate)} className="cursor-pointer flex justify-around pr-28 md:pr-0 space-x-4 bg-inherit font-semibold text-[16px]">
                          <h2>{format(range.startDate, "MM/dd/yyyy")}</h2>
                          <h2>To</h2>
                          <h2>{format(range.endDate, "MM/dd/yyyy")}</h2>
                      </div>
                      {openDate && (
                          <DateRange
                              editableDateInputs={false}
                              // onChange={handleChange}
                              onChange={(item: any) => setDateRange([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={dateRange}
                              className="absolute right-0 z-50"
                              minDate={new Date()}
                              showDateDisplay={false}
                              // showMonthAndYearPickers={false}
                              showPreview={false}
                          />
                      )}
                  </div>
              </div>

              <div className='flex items-center lg:w-[50%]'>
                  <div className='flex-1'>
                      <div className='flex justify-around lg:pl-10 p-2 pt-4' onClick={() => setOpenDate(false)}>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-bold'>Children:</h2>
                              <input className='w-[32px] sm:w-[60px] text-center focus:bg-white text-sm sm:text-lg bg-inherit' placeholder='0' />
                          </div>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-bold'>Children:</h2>
                              <input className='w-[33px] sm:w-[60px] text-center focus:bg-white text-sm sm:text-lg bg-inherit' placeholder='0' />
                          </div>
                          <div className='flex items-center space-x-2'>
                              <h2 className='font-bold'>Children:</h2>
                              <input className='w-[32px] sm:w-[60px] text-center focus:bg-white text-sm sm:text-lg bg-inherit' placeholder='0' />
                          </div>
                      </div>
                  </div>
                  <button className='absolute top-[53px] right-6 sm:relative sm:top-0 sm:right-0 md:right-0 bg-gray-700 py-1 px-7 md:px-20 sm:py-3 lg:px-10 text-white rounded-md'>Search</button>
              </div>
          </form>
      </div>
  )
}

export default Search