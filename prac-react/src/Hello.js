import React from "react";
// 안녕하세요 출력
// isSpecial가 true면 좌측에 * 표시 
const Hello = ({color,name,isSpecial}) =>{
    return (
        //sol1) props 내부의 값 조회 props. 
        // props를 통해 App -> Hello 컴포넌트에게 값 전달 
        //sol2) 비구조화 할당 props. 안 쓰고 그냥 값 때려넣기 
        <div style={{ color }}> {isSpecial ? <b>*</b> :null } 안녕하세여 {name}</div> 
    )
}
// 상위 컴포넌트(app)에서 props를 지정하지 않았을 때 
Hello.defaultProps={
    name:'이름없음'
}

export default Hello; 