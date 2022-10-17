import React from 'react'
import photo from '../image/photo.jpg'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'



const Intro = () => {
  
  const fold=useSelector(state=>state.fold.fold)
  
  useEffect(()=>{},[fold])
  return (
  <div className='intro' >
    <div className={'intro-box'+(fold?'':' intro-padding')} >
      <div className='main-introduce'>
        TAEJIN'S PORTFOLIO
      </div>
      <div>
        <img src={photo} title="증명사진" className="intro-photo"/>
      </div>
      <div className='sub-introduce'>
        안녕하세요<br/>
        어제보다 발전하는 <b>개발자</b>를 꿈꾸는 김태진입니다.
      </div>
      
      

    </div>
  </div>
  )
}

export default Intro