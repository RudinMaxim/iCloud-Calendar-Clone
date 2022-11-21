import React from 'react'
import moment from 'moment'
import s from './Calendar.css'

function Calendar() {
    moment.updateLocale('en', {week: {dow:1}})
    const startDey = moment().startOf('month').startOf('week');
    const endDey = moment().endOf('month').endOf('week');   

    const calendar = [];
    const day = startDey.clone();
    
    while (!day.isAfter(endDey)) {
        calendar.push(day.clone())
        day.add(1,'day')
    }
    console.log(calendar);

    // window.moment = moment;
    // window.startDey = startDey;
    // window.endDey = endDey;
    // window.day = day;
    return (
        <div>Calendar1</div>
    );
}

export default Calendar