import React, { useState } from "react"
import './Calendar.scss'
import DatePicker from "react-datepicker";
const Calendar : React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="card">
    <div className="card-body p-0 d-flex">
      <div className="dashboard-custom-date-picker">
        <DatePicker selected={startDate} onChange={(date : Date) => setStartDate(date)} />
        </div>
        </div>
      </div>
  )
}

export default Calendar
