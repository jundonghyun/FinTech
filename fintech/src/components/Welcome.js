//자주사용하는 것은 컴포넌트로 만드는게 좋음
import styled from "styled-components"

const WelcomeBlock = styled.div`
  margin: 20px;
`;

const Welcome = (props) => {
    return(
      <WelcomeBlock>
      <p>안녕하세요 {props.username} 의 나이는 {props.age} 입니다</p>
      </WelcomeBlock>
    );
  }

  export default Welcome;