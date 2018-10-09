import React from 'react'
import styled from 'styled-components'
import DatepickerMonth from './DatepickerMonth'
import { MonthNames } from './Helper'

const DatepickerContainer = styled.div`
`

const HeaderRow = styled.div`
  font-weight: ${(props) => props.centered ? 'normal' : 'bold'};
  text-align: center;
  font-size: ${(props) => props.centered ? '1em' : '1.2em'};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.centered ? 'center' : 'space-between'};
  align-items: center;
  line-height: 1.5em;
`

const Container = styled.div`
  padding: 15px;
  color: #15bfea;
  background: #21262d; 
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  top: calc(100vh / 2 - 170px);
  margin: auto;
  box-shadow: 0 5px 29px 0px rgba(0,0,0,0.2),0 40px 50px -50px rgba(0,0,0,0.3);
`

const DateButton = styled.button`
  padding: 10px 25px;
  color: #ffffff;
  background: transparent; 
  cursor: pointer;
  border-radius: 3px;
  font-weight: bold;
  font-size: 0.8em;
  border: solid 2px #ffffff;
  margin: 10px;
`

const Overlay = styled.div`
  background: rgba(0,0,0,0.8);
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PreviousArrow = styled.div`
  width: 0;
  height: 0;
  border: solid transparent;
  border-color: rgba(136, 183, 213, 0);
  border-right-color: rgba(136, 183, 213, 0.3);
  border-width: 8px;
  cursor: pointer;
  margin: ${(props) => props.centered ? '0 15px' : '0'};

  :hover{
    border-right-color: rgba(136, 183, 213, 0.8);
  }
`

const NextArrow = styled.div`
  width: 0;
  height: 0;
  border: solid transparent;
  border-left-color: rgba(136, 183, 213, 0.3);
  border-width: 8px;
  cursor: pointer;
  margin: ${(props) => props.centered ? '0 15px' : '0'};

  :hover{
    border-left-color: rgba(136, 183, 213, 0.8);
  }
`

class Datepicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
      currentDate: this.props.date,
      oldDate: new Date(this.props.date)
    }

    this.switchState = this.switchState.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.changeOldDate = this.changeOldDate.bind(this)
    this.handleNextMonthClick = this.handleNextMonthClick.bind(this)
    this.handleNextYearClick = this.handleNextYearClick.bind(this)
    this.handlePrevMonthClick = this.handlePrevMonthClick.bind(this)
    this.handlePrevYearClick = this.handlePrevYearClick.bind(this)
  }

  switchState () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  changeOldDate (date) {
    this.setState({
      oldDate: date
    })
  }

  handlePrevMonthClick () {
    const param = {
      incr: false,
      obj: 'month'
    }

    this.changeDate(param)
  }

  handleNextMonthClick () {
    const param = {
      incr: true,
      obj: 'month'
    }

    this.changeDate(param)
  }

  handlePrevYearClick () {
    const param = {
      incr: false,
      obj: 'year'
    }

    this.changeDate(param)
  }

  handleNextYearClick () {
    const param = {
      incr: true,
      obj: 'year'
    }

    this.changeDate(param)
  }

  changeDate (param) {
    let newDate = this.state.currentDate

    if (param.incr) {
      switch (param.obj) {
        case 'month': newDate.setMonth(newDate.getMonth() + 1)
          break
        case 'year': newDate.setYear(newDate.getFullYear() + 1)
          break
      }
    } else {
      switch (param.obj) {
        case 'month': newDate.setMonth(newDate.getMonth() - 1)
          break
        case 'year': newDate.setYear(newDate.getFullYear() - 1)
          break
      }
    }

    this.setState({
      currentDate: newDate
    })
  }

  render () {
    const MonthData = {
      date: this.state.currentDate,
      onDayClick: this.props.onDayClick,
      closeCalendar: this.switchState,
      changeOldDate: this.changeOldDate,
      oldDate: this.state.oldDate
    }

    const DatepickerDiv = this.state.isOpen && <div><Overlay onClick={this.switchState} />
      <Container><HeaderRow centered><PreviousArrow centered onClick={this.handlePrevYearClick} />
        {MonthData.date.getFullYear()}<NextArrow centered onClick={this.handleNextYearClick} /></HeaderRow>
        <HeaderRow><PreviousArrow onClick={this.handlePrevMonthClick} />
          {MonthNames[MonthData.date.getMonth()]}
          <NextArrow onClick={this.handleNextMonthClick} /></HeaderRow>
        <DatepickerMonth {...MonthData} />
      </Container></div>

    return (
      <DatepickerContainer className='date-picker'>
        <DateButton onClick={this.switchState}>Change the date</DateButton>
        {DatepickerDiv}
      </DatepickerContainer>
    )
  }
}

export default Datepicker
