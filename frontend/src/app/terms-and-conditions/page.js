import React from 'react'
import TermsAndConditions from "../../components/terms-and-conditions/index"

export const metadata = {
  title: 'Terms and conditions',
  description: 'Terms and conditions',
}



const page = () => {
  return (
    <div className='bg-[#1F1F29] px-4 lg:px-16 py-6 w-[100%] '>
      <TermsAndConditions/>
    </div>
  )
}

export default page
