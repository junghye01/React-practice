import React,{useState,useRef} from 'react';
//input 상태 관리
// 값을 text상자에 입력하면 값: 에 뜨고, 초기화 버튼을 누르면 삭제됨
// 실습 2: 이름과 닉네임을 입력하면 값에 각각 보여지는 
const InputSample = () => {

    const [inputs,setInputs]=useState({ //객체 형태의 상태 관리
        name:'',
        nickname:''
    });

    const nameInput= useRef(); //Ref 객체 생성

    const {name,nickname}=inputs; //비구조화 할당

    const onChange = (e) =>{
        const {value,name}=e.target; //e.target에서 name,value 추출 

        setInputs({
            ...inputs,
            [name]:value //input textbox의 name을 받아서 inputs 객체 수정
        });
    };

    //모든 상태를 초기화해야 하기 때문에 스프레드 x
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus(); // reset을 하면 input dom 가리킴
    };

    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>


        </div>
    );







    

}

export default InputSample;