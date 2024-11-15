import React, { useEffect, useState } from 'react'
import './productCards.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = ["https://media.istockphoto.com/id/1151182788/photo/empty-white-t-shirt.jpg?s=2048x2048&w=is&k=20&c=Bo94r6kG8q9VePtU0nVMMjV-5I3_I0WRacyDuP0wsjE=",
"https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://media.istockphoto.com/id/1160095342/photo/empty-white-t-shirt.jpg?s=612x612&w=is&k=20&c=vfuHrvLq0B__C37rBzVhNdShCjjnqCRGDLNhVcsVLOk="
]

const ProductCard = () => {

    const[currentImg, setCurrentImg] = useState(0);
    const[isHoverd, setIsHoverd] = useState(false);

    useEffect(()=>{
        let interval:any;

        if(isHoverd){
            interval=setInterval(()=>{
                setCurrentImg((prevImg)=>(prevImg+1)%images.length);
            },1000)
        }
        else if(interval){
            clearInterval(interval);
            interval = null;
        }

        return ()=> clearInterval(interval);

    },[isHoverd])


  return (
    <>
      <div className='group px-4 relative'>
        <div className="card"
        onMouseLeave={()=>setIsHoverd(false)}
        
        onMouseEnter={()=>setIsHoverd(true)}
        >
            {images.map((item,index)=>
            <img
            className='card-media object-top'
             src={item} alt="" 
             style={{transform:`translateX(${(index-currentImg)*100}%)`}}
             />
            )}

            {isHoverd && 
                <div className='indicator flex flex-col items-center space-y-2'>
                    <div className='flex gap-3'>
                        <Button variant='contained' color='secondary'>
                            <Favorite sx={{color:teal[500]}}/>
                        </Button>

                        <Button variant='contained' color='secondary'>
                            <ModeComment sx={{color:teal[500]}}/>
                        </Button>
                    </div>
                </div>
            }
        </div>

        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                <div className=''>
            <h1>Niky</h1>
            <p>White tshirt</p>
                </div>

                <div className='price flex item-center gap-3'>
                    <span className='font-sans text-gray-800'>₹ 800</span>
                    <span className='thin-line-through tex-gray-400'>₹ 999</span>
                    <span className='text-primary-color font-semibold'>60%</span>
                </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
