import React,{useState} from 'react';

// number 표현, +1,-1 버튼
// useState hooks -> 컴포넌트에서 상태 관리

const Counter = () => {
    const [number,setNumber]=useState(0);

    const onIncrease = () =>{
        setNumber((prev)=>prev+1);

    };

    const onDecrease = () => {
        setNumber((prev) => prev-1);

    };

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    );

    
};


export default Counter;