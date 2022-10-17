import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { folding } from '../redux/Reducer';



const Navigation = () => {
  const fold = useSelector((state) => state.fold.fold);
  const dispatch = useDispatch()
  


  
  useEffect(()=>{
    const handleResize=()=>{
      
      if(fold==false&&window.innerWidth>768){
        dispatch((folding()))
        
      }
    };
    

    window.addEventListener('resize',handleResize);

    return()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[window.innerWidth])

  

  const foldClick=()=>{
    
    dispatch((folding()))
  }
  return (
    
      
    <div className='navbar'>
        <div className='nav-title'>
            <h1 className='logo'>KIMTAEJIN</h1>
            <FontAwesomeIcon icon={faBars} className='nav-fold'onClick={foldClick}/>
            
            
        </div>
        <div className={'nav-menu '+(fold?'':'active')}>
            <div className='menu'>CONTACT</div>
            <div className='menu'>tj4467@naver.com</div>
            <div className='menu'>010-4187-4467</div>
                        
        </div>
        <div className={'nav-social '+(fold?'':'active')}>
            <a href="https://github.com/kimtaejin93">
            <FontAwesomeIcon icon={faGithub} className='nav-icon'/>
            </a>
        </div>
        
          
        
    </div>
    
  )
}

export default Navigation