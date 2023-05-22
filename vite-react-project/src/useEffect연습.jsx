import {useEffect} from 'react';

const prac = ()=>{
    useEffect(()=>{
        console.log('뜸');
        return () =>{
            console.log('unmount');
        }
    },[])
}