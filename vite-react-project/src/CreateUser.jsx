import React from 'react';

// input 2개, button 1개

const CreateUser = ({username,email,onChange,onCreate}) => {
    //onChange : input에 상태가 변하면 감지해서 새로운 객체만들게끔
    return(
        <div>
            <input name='username' placeholder='계정명' onChange={onChange} value={username}/>
            <input name='email' placeholder='이메일' onChange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>

    );
}

export default CreateUser;

