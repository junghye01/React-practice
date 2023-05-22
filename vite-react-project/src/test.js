const array=[
    {
      id: 0,
      text: 'a'
    },
    {
      id: 1,
      text: 'b'
    },
    {
      id: 2,
      text: 'c'
    },
    {
      id: 3,
      text: 'd'
    }
  ];


// 배열 렌더링

console.log(array.map(item => <div key={item.id}>{item.text}</div>));
