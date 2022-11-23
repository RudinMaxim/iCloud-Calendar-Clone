import moment from 'moment/moment';
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
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    const isCurraentDAY = (day) => moment().isSame(day, 'day');

    return (
        <div className='GridWrapper'>
            {
                daysArray.map((dayItem) => (
                    <CallWrapper 
                        className='CallWrapper'
                        key={dayItem.unix()}
                        isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                    >
                        <RowInCell justifyContent={'flex-end'}>
                            <div className='DayWrapper'>
                                {isCurraentDAY(dayItem) ? <div className='CurraentDAY'>{dayItem.format('D')}</div> 
                                : dayItem.format('D')}
                            </div>
                        </RowInCell>
                    </CallWrapper>
                ))
            }
        </div>
    );
}
export default CalendarGrid