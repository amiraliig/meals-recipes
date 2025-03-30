import getMeals from '@/lib/meals'
import React from 'react'

const page = async ({ params }) => {
 
  return (
    <div>{params.slug}</div>
  )
}

export default page