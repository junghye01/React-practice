import React from 'react';

// 배열 렌더링

const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b><span>{user.email}</span>
        </div>
    )
}
const UserList2 = ({users}) =>{ // 배열을 받아서 
   

      return (
        <div>
            {users.map((user,index)=> (<User user={user} key={index}/>))}
        </div>
      )
}

export default UserList2;