import React, { useContext, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange  } from 'react-date-range';
import * as dayjs from 'dayjs'
import { SearchContext } from '../contexts/SearchContext';

export default function DatePicker() {
  const [openDate, setOpenDate]= useState(false)

  const {dateState, setDateState} = useContext(SearchContext)

  


  return (
    <>
    <div className='select'><button onClick={(e) => setOpenDate(!openDate)}>
    {dayjs(dateState[0].startDate).$D}.{dayjs(dateState[0].startDate).$M + 1}.{dayjs(dateState[0].startDate).$y}
    -
    {dayjs(dateState[0].endDate).$D}.{dayjs(dateState[0].endDate).$M + 1}.{dayjs(dateState[0].endDate).$y}
    </button></div>
    <div className={`${openDate? 'absolute' : 'hidden'} shadow-lg z-[998]`}>
      <DateRange
      editableDateInputs={true}
      onChange={item => setDateState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={dateState}
      />
    </div>
    </>
  )
}
