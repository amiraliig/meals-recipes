import { getMeal } from '@/lib/meals'
import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
const page = async ({ params }) => {
  const { slug } = await params
  const ingredients = ["tomato", "onion", "garlic", "olive oil", "ground beef"];

  const meal = getMeal(slug)
  if (!meal) {
    notFound()
  }
  const steps = meal.instructions.split(/\d+\.\s/).filter(step => step.trim() !== "");
  return (
    <div className='md:m-6 md:p-6 p-2 m-2'>
      <header className='grid justify-between md:grid-cols-2 gap-6 grid-cols-1'>
        <div className=' bg-[#ff9100] rounded-2xl '>
          <img src={meal.image} alt="" className=' rounded-xl object-cover w-full h-[310px]' />
        </div>
        <div className='p-5 bg-slate-100 rounded-2xl'>
          <h2 className='text-5xl font-bold my-5 text-[#ff9100]'>{meal.title}</h2>
          <h3 className='text-2xl my-5 text-white'> <span className='bg-[#ff9100] p-1 rounded-xl'><i>{meal.creator}</i></span></h3>
          <p className='text-lg my-5'>{meal.summary}</p>
          <h3 className='text-2xl my-5'>category</h3>
        </div>

      </header >
      <main className='grid grid-cols-2 justify-center bg-slate-100 rounded-2xl my-5 p-5 gap-5'>
        <div>
          <h2 className='text-2xl'>Method</h2>

          <ul>
            {steps.map((step, index) => <li className='border-b-2  border-[#ffaa3b9d] p-3 h-24 text-lg' key={index}>
              Step{index + 1}
              {step}</li>)}
          </ul>
        </div>
        <div>
          <h2 className='text-2xl'>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => <li key={index} className='h-24 text-lg p-3 border-b-2 border-[#ffaa3b9d]'>{ingredient}</li>)}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default page