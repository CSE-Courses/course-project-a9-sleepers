import React, { Component } from 'react';
import dateFns from "date-fns";
import NavBar from '../../NavBar/NavBar';

// https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728

export default class CalendarWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
    currentMonth: new Date(),
    selectedDate: new Date()
    };
  }

  componentDidMount() {
    // console.log(getDatesInMonthDisplay(07, 2019));
  }

  renderHeader() {}
  renderDays() {}
  renderCells() {}

  onDateClick = day => {}
  nextMonth = () => {}
  prevMonth = () => {}

  render() {
    return (
      <div>
        <NavBar/>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </div>
    );
  }
}
