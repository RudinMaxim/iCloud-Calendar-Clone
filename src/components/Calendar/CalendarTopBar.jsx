import React from 'react'
import styled from 'styled-components';
import './Calendar.css'

const TextWrapper = styled('span')`
  font-size: 32px;
  margin-right: 8px;
`

function CalendarTopBar({today}) {
  return (
    <div className='DivWrapper'>
      <div className='TextWrapper'>
        <TextWrapper><b>{today.format('MMMM')}</b></TextWrapper>
        <TextWrapper>{today.format('YYYY')}</TextWrapper>
      </div>
      <div className='ButtonWrapper'>
        <button> &lt; </button>
        <button className='ToDayBatton'><b>ToDay</b></button>
        <button> &gt; </button>
      </div>
    </div>
  )
}

export default CalendarTopBar