import React,{useState} from 'react';

const User = ({user}) => {// User 컴포넌트 선언 user : 각 원소

    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}


const UserList = () =>{
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

      // 배열 렌더링 1: key(각 원소를 구분하는 고유값) 설정
      //2: index이용 (key가 없다면)
      return(
        <div>
            <h1>배열 렌더링 :map, key이용</h1>
            <span>고유값</span>
            {users.map(user => (<User user={user} key={user.id}/>))}
            
            <span>index 이용</span>
            {users.map((user,index)=>(<User user={user} key={index}/>))}

            <span>User 컴포넌트 안 사용</span>
            {users.map(user => <div key={user.id}><b>{user.username}</b> ({user.email})</div>)}
        </div>
      )

}

export default UserList;