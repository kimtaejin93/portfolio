import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
const Project = () => {
  return (
    <div className='project-page'>
      <Container>
      <h4>PROJECTS</h4>
        <Row>
          <Col md={6}>
            <video src='/netflix.mp4' className='project-video' autoPlay loop muted/>
            <div>LINK TO</div>
            <a className='project-name' href='https://taejin-netflix.netlify.app'>NETFLIX Copy</a>
          </Col>
          <Col md={6}>
          <video src='/others.mp4' className='project-video' autoPlay loop muted/>
          <div>LINK TO</div>
            <a className='project-name' href='https://todolist-taejin.netlify.app'>TO DO LIST</a><br/>
            <a className='project-name' href='https://phonebook-by-redux.netlify.app'>PHONE BOOK</a><br/>
            <a className='project-name' href='https://weather-api-taejin.netlify.app'>WEATHER</a><br/>
            <a className='project-name' href='https://taejin-game.netlify.app'>ROCKSISSORPAPER GAME</a>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Project