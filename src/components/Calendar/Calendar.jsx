import React from 'react'
import moment from 'moment'
import styled from 'styled-components';

import './Calendar.css'

const GridWrapper = styled.div`
    font-size:40px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap:1px;
    background-color: #404040;
`;
const CallWrapper = styled.div`
    min-width: 140px;
    min-height: 80px;
    background-color: #1e1f21;
    color:#DDDCDD;
`

function Calendar() {
    // moment.updateLocale('en', {week: {dow:1}})
    // const startDey = moment().startOf('month').startOf('week');
    // const endDey = moment().endOf('month').endOf('week');   

    // const calendar = [];
    // const day = startDey.clone();
    
    // while (!day.isAfter(endDey)) {
    //     calendar.push(day.clone())
    //     day.add(1,'day')
    // }
    // console.log(calendar);

    const totalday = 42;
    const daysArray = [...Array(42)]

    return (
        <GridWrapper>
            {
                daysArray.map((_, index) => (
                    <CallWrapper>{index}</CallWrapper>
                ))
            }
        </GridWrapper>
    );
}
export default Calendar