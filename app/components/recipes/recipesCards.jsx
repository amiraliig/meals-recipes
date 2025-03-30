import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const RecipesCards = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-20 '>
      {
        data.map(meal =>
          <Link href={`/meals/${meal.slug}`} key={meal.id}>
            <div key={meal.id} className=' shadow-xl rounded-2xl min-h-[390px] bg-gray-100'>
              <img src={meal.image} className='w-full object-cover rounded-xl h-64' />
              <div className='m-2'>
                <h3 className='text-xl font-bold'>{meal.title}</h3>
                <p>
                  {meal.summary}
                </p>
                <button className='bg-[#ffa125] p-1 rounded-xl text-white my-2'>
                  View Details
                </button>
              </div>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default RecipesCards