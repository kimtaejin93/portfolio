import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'


const SelfIntroduce = () => {
  return (
<div className='self-introduce-box'>
    <Container>
        <Row>
            <Col md={4} >
            <h3>☑️개발자가 된 이유</h3>
            <p className='self-border'><b>개발자</b>라는 직업은 새로운 것을 접하는 것을 좋아하는 저에게 즐거움을 선사해 주고 <b>프론트엔드</b>는 제가 작업하는 내용을 직관적으로 눈으로 볼 수 있어 선택하였습니다.
            </p>
            </Col>
            <Col md={4} >
            <h3>☑️원하는 개발</h3>
            <p className='self-border'>
              사용자가 사용했을 때 불편함이 없는 웹<br/>
              개발자가 보았을 때 무분별한 문법사용을 줄여 가독성 있는 코드
            </p>
            </Col>
            <Col md={4} >
            <h3>☑️되고싶은 개발자</h3>
            <p className='self-border'>끊임없이 공부하여 최신동향에 맞는 문법을 사용하는 <b>개발자</b><br/>
            코딩하는 것이 재미있는 <b>개발자</b></p>
            </Col>
        </Row>
        
    </Container>
</div>
  )
}

export default SelfIntroduce