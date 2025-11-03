import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        fetchdata();

    },[])
    const fetchdata =async()=>{
        try {
            const response= await axios.get()
            setData(response.data)
            
        } catch (error) {
            console.log(error);
            
            
        }
    }
    return (
        <>
        
            
        </>
    );
};

export default Home;