import React from 'react'
import moment from 'moment'

import CalendarTopBar from "./CalendarTopBar";
import CalendarGrid from './CalendarGrid';
import './Calendar.css'
import CalendarTitle from './CalendarTitle';

function Calendar() { 
    // изменение на европейскую систему дней
    moment.updateLocale('en', {week: {dow:1}})

    const today = moment()
    const startDay = today.clone().startOf('month').startOf('week');
    
    // window.moment = moment;
    
    return (
        <div className='Calendar'>
            <CalendarTitle/>
            <CalendarTopBar today={today}/>
            <CalendarGrid startDay={startDay}/>
        </div>
    );
}
export default Calendar