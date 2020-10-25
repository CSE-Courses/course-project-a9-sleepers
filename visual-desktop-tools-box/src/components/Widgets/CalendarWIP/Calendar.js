import React, { useState } from 'react';

function Calendar(props) {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <RCalendar value={date} onChange={(date) => {setDate(date); console.log(date)}}></RCalendar>
        </div>
    )
}

export default Calendar;