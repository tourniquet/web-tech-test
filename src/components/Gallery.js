import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import Header from './Header'
import {Memory} from './Helper'


const ContainerG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 1000px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: 0 5px 25px -13px rgba(0,0,0,0.9);
  overflow: hidden;
`

class Gallery extends React.Component {
  constructor() {
    super()

    this.handleDayClick = this.handleDayClick.bind(this)

    this.state = {
      key: `DEMO_KEY`,  // Please insert your key here
      date: new Date()
    }
  }

  state = {
      background: '',
      descr: '',
      code: null
  } 

  componentDidMount() {
    this.getImage()
  }

  getImage = async () => {
      let day = this.state.date.getDate()
      let month = this.state.date.getMonth()
      let year = this.state.date.getFullYear()

      let urlDate = `${year}-${('0'+(month+1)).slice(-2)}-${('0'+day).slice(-2)}`
      let data
      let cached = false

      let loop = 0
      while (!cached && loop < Memory.length) {
        if (Memory[loop].data.date == urlDate) {
          cached = true
          data = Memory[loop].data
          console.log("Image data was cached")
        }

        loop++;
      }
      
      if (!cached) {
        const URL = `https://api.nasa.gov/planetary/apod?api_key=${this.state.key}&date=${urlDate}`
        
        const apiCall = await fetch(URL)
        data = await apiCall.json()
        Memory.push({data})
      }

      if (data.hasOwnProperty("code")) {
        this.setState({
          background: '',
          code: data.code,
          desc: ''
        })
      } else {
        this.setState({
          background: data.url,
          code: null,
          desc: data.explanation
        })
      }
  }

  handleDayClick (newDate) {
    this.setState({
      date: newDate
    }, function() {
      this.getImage()
    })
  }

  render() {
    const HeaderData = {
      date       : this.state.date,
      desc       : this.state.desc,
      onDayClick : this.handleDayClick
    }
      
    return (
      <ContainerG className='gallery'> 
        <Header {...HeaderData} />
        <Image background={this.state.background} error={this.state.code} />
      </ContainerG>
    )
  }
}

export default Gallery
