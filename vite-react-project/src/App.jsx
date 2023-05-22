import { useState,useRef } from 'react';
import Counter from './Counter.jsx';
import InputSample from './InputSample.jsx';
import UserList2 from './UserList2.jsx';
import CreateUser from './CreateUser.jsx';

// CreateUser : 상태관리를
const App = () => {
// App -> UserList2 에게 props로 전달
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId=useRef(4);

  const onCreate = () =>{


    nextId.current+=1;
  }
  return(
    <div>
      <Counter/>
      <InputSample/>
      <p>App이 UserList2에게 props로 배열 전달</p>
      <UserList2 users={users}/>
      <CreateUser/>
    </div>
    
  );

  
}



export default App; // 다른 코드에서 App 변수/함수를 사용할 수 있게함
