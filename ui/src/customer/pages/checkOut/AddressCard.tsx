import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {

    const handleChange = (e:any)=>{
        console.log(e.target.checked)
    }
  return (
    <div className='p-5 border rounded-md flex'>
      <div>
        <Radio 
        checked={true}
        onChange={handleChange}
        value=""
        name='radio-button'
        />
      </div>
      <div className='space-y-3 pt-3'>
        <h1 className=''>Harsh Raj Kumar</h1>
        <p className='w-[320px]'>
            Professor colony, Bihar Sharif, Nalanda, Bihar, 803101
        </p>
        <p><strong>Mobile</strong>+917979757112</p>
      </div>
    </div>
  )
}

export default AddressCard
