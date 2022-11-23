import moment from 'moment/moment';
import React from 'react'
import styled from 'styled-components';
import './Calendar.css'

const RowInCell = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
    ${props => props.pr && `margin-right: ${props.pr * 8}px`}
`
const GridWrapper = styled.div`
    background-color:${props => props.isHeader ? '#1e1f21' : '#404040'};
    ${props => props.isHeader && 'border-bottom:1px solid #404040;'}
`
const CallWrapper = styled.div`
    background-color:${props => props.isWeekend ? '#272829' : '#1e1f21'};
    min-height: ${props => props.isHeader ? 24 : 80}px;
`

function CalendarGrid({startDay}) {
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
    const isCurraentDAY = (day) => moment().isSame(day, 'day');

    return (
        <>
        <GridWrapper className='GridWrapper' isHeader>
            {[...Array(7)].map((_, index) => (
                <CallWrapper isHeader>
                    <RowInCell justifyContent={'flex-end'} pr={1}>
                        {moment().day(index + 1, ).format('dddd')}
                    </RowInCell>
                </CallWrapper>
            ))}
        </GridWrapper>
        <GridWrapper className='GridWrapper'>
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
        </GridWrapper>
        </>
    );
}
export default CalendarGrid