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
            <a className='project-name' href='https://taejin-netflix.netlify.app'>NETFLIX</a>
          </Col>
          <Col md={6}>
            2
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Project