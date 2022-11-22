import React from 'react'
import styled from 'styled-components';
import './Calendar.css'

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'}
`
const CallWrapper = styled.div`
    background-color:${props => props.isWeekend ? '#272829' : '#1e1f21'}
`
function CalendarGrid({startDay}) {
    // const totalday = 42;
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())
    // console.log(daysArray)

    return (
        <div className='GridWrapper'>
            {
                daysArray.map((dayItem) => (
                    <CallWrapper 
                    className='CallWrapper'
                    key={dayItem.format('DD-MM-YYYY')}
                    isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                    >
                        <RowInCell justifyContent={'flex-end'}>
                            <div className='DayWrapper'>
                                {dayItem.format('D')}
                            </div>
                        </RowInCell>
                    </CallWrapper>
                ))
            }
        </div>
    );
}
export default CalendarGrid