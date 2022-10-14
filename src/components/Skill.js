import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCss3Alt,faHtml5,faJs,faBootstrap,faReact,faGit} from '@fortawesome/free-brands-svg-icons';
import {Row,Col } from 'react-bootstrap'
import { useRef,useState,useEffect  } from 'react';



const Skill = () => {
    const [skillShow,setSkillShow]=useState();
    const skillRef=useRef(null);
    const stateY=()=>{
        {setSkillShow(skillRef.current.getBoundingClientRect().y)}
               
    }
    useEffect(()=>{
        if(skillRef.current!=null){
            window.addEventListener("scroll",stateY)
        }},[window.scrollY])
        
    
    
    
  return (
    
        <div className='skill-page' ref={skillRef}>
            {skillShow<600?
        
            <div>
        <h4>SKILLS</h4>
        
        <Row> 
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faHtml5}/>
                <div className='skill-name'>HTML</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faCss3Alt}/>
                <div className='skill-name'>CSS</div>
            </Col>           
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faJs}/>
                <div className='skill-name'>JAVASCRIPT</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faBootstrap}/>
                <div className='skill-name'>BOOTSTRAP</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faReact}/>
                <div className='skill-name'>REACT</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faGit}/>
                <div className='skill-name'>GIT</div>
            </Col>
        </Row>
        </div>
        
        :
        <Row className='invisible'> 
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faHtml5}/>
                <div className='skill-name'>HTML</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faCss3Alt}/>
                <div className='skill-name'>CSS</div>
            </Col>           
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faJs}/>
                <div className='skill-name'>JAVASCRIPT</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faBootstrap}/>
                <div className='skill-name'>BOOTSTRAP</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faReact}/>
                <div className='skill-name'>REACT</div>
            </Col>
            <Col md={4}>
                <FontAwesomeIcon className='skill-icon' icon={faGit}/>
                <div className='skill-name'>GIT</div>
            </Col>
        </Row>
        }
        
    </div>

  )

}

export default Skill