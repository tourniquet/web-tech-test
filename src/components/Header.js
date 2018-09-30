import React from 'react';
import styled from 'styled-components';
import {MonthNames} from './Helper'; 
import Datepicker from './Datepicker';

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  background: #2f4387;
  margin: 0;
  overflow: hidden;
`;

const DayMonth = styled.p`
  font-size: 1.5em;
  margin: 5px 0;
  font-weight: bold;
`;

const Year = styled.p`
  font-size: 1em;
  margin: 15px 0 5px;
`;

const Description = styled.p`
padding: 0 20px;
text-align: justify;
font-size: 1em;
line-height: 1.2em; 
margin: 10px 0;
display: none;

@media (min-width: 700px) and (min-height: 700px){
    display: block;
  }
`;

class Header extends React.Component{
    render(){
        const DatepickerData = {
            date: this.props.date,
            onDayClick : this.props.onDayClick
        };
        
        return(
            <HeaderContainer>
                <Year>{DatepickerData.date.getFullYear()}</Year>
                <DayMonth>{DatepickerData.date.getDate()} of {MonthNames[DatepickerData.date.getMonth()]}</DayMonth>
                <Description>{this.props.desc}</Description>
                <Datepicker {...DatepickerData}/>
            </HeaderContainer>
        )
    }
}

export default Header;