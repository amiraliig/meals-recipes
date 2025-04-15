import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const RecipesCards = ({ data }) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-20 '>
      {
        data.map(meal => {
          console.log(meal.image)
          return <Link href={`/meals/${meal.slug}`} key={meal.id}>
            <div key={meal.id} className=' shadow-xl rounded-2xl min-h-[390px] bg-gray-100'>
              <Image src={meal.image || `/images/wiener-schnitzel.jpg`} alt={meal.slug} className='w-full object-cover rounded-xl h-64' width={200} height={200} />
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
        }
        )
      }
    </div>
  )
}

export default RecipesCards