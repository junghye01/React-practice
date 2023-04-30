import React from "react";

//  컴포넌트 태그 사이에 넣은 값 조회 -> props.children을 조회
// 컴포넌트 Wrapper : 다른 컴포넌트를 감싸는 wrapper 컴포넌트 
const Wrapper = ({children}) => {
    const style = {
        border: '2px solid black',
        padding : '16px',
    };
    return (
        <div style={style}>
            {children}

        </div>
    )
}

export default Wrapper;