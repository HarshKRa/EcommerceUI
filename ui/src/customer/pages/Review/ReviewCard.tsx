import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
        <Grid2 container spacing={10} >
            <Grid2 size={{xs:1}}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                        H
                    </Avatar>
                </Box>
            </Grid2>

            <Grid2 size={{xs:9}}>
                <div className='spce-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Harsh</p>
                        <p className='opacity-70'>2024-09-27T23:16:07.384794</p>
                    </div>
                </div>
                <Rating 
                readOnly
                value={4.5}
                precision={.5}/>

                <p>Value for money product, great product</p>

                <div>
                    <img
                    className='w-24 h-24 object-cover' src="https://plus.unsplash.com/premium_photo-1693221161704-4e4820bc2e28?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Grid2>

        </Grid2>

        <div>
        <IconButton>
                <Delete sx={{color:red[700]}}/>
            </IconButton>
        </div>
      
    </div>
  )
}

export default ReviewCard
