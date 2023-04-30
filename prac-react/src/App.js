import React from "react";
import Hello from "./Hello";
import Wrapper from './Wrapper';


// 데이터는 상위 컴포넌트 -> 하위 컴포넌트로 전달 
const App = () => {
  return (
    // Hello 컴포넌트에 name값 전달 
    // by props

    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/> 
      <Hello color='pink' isSpecial={true}/>
    </Wrapper>
      
    
  )

}

export default App; 





