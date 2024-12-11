import React, { useEffect, useState } from 'react'
import { Product } from '../../../Types/ProductType';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Close, Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { useAppDispatch } from '../../../State/Store';
import { addProductToWishlist } from '../../../State/customer/WishlistSlice';

const WishListProductCard = ({item}:{item:Product}) => {

    const[currentImg, setCurrentImg] = useState(0);
    const[isHoverd, setIsHoverd] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        let interval:any;

        if(isHoverd){
            interval=setInterval(()=>{
                setCurrentImg((prevImg)=>(prevImg+1)%item.image.length);
            },1000)
        }
        else if(interval){
            clearInterval(interval);
            interval = null;
        }

        return ()=> clearInterval(interval);

    },[isHoverd])

    const handleWishlist = (e:any)=>{
        e.stopPropagation();
        item.id && dispatch(addProductToWishlist({productId:item.id}))
    }


  return (
    <>
      <div onClick={()=>navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id }`)} className='group relative'>
        <div className="card"
        onMouseLeave={()=>setIsHoverd(false)}
        
        onMouseEnter={()=>setIsHoverd(true)}
        >
            {item.image.map((item,index)=>
            <img
            className='card-media object-top'
             src={item} alt="" 
             style={{transform:`translateX(${(index-currentImg)*100}%)`}}
             />
            )}
        </div>

        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                <div className=''>
            <h1>{item.seller?.businessDetails.businessName}</h1>
            <p>{item.title}</p>
                </div>

                <div className='price flex item-center gap-3'>
                    <span className='font-sans text-gray-800'>₹ {item.sellingPrice}</span>
                    <span className='thin-line-through tex-gray-400'>₹ {item.mrpPrice}</span>
                    <span className='text-primary-color font-semibold'>{item.discountPercentage}%</span>
                </div>
        </div>
        <div className="absolute top-1 right-5">
            <button onClick={handleWishlist}>
                <Close className='cursor-pointer hover:bg-white rounded-full p-1' sx={{color:teal[500], fontSize:"2rem"}} />
            </button>
        </div>
      </div>
    </>
  )
}

export default WishListProductCard
