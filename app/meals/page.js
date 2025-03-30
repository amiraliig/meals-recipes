import React from 'react'
import getMeals from '@/lib/meals'
import RecipesCards from '../components/recipes/recipesCards'
import { Suspense } from 'react'
const Meals = async () => {
  const meals = await getMeals()
  return (
    <>
      <RecipesCards data={meals} />
    </>
  )
}
const MealsPage = () => {

  return (
    <div className='p-9 md:mx-9'>
      <header >
        <h1 className='text-4xl font-bold my-5'>
          Delicious meals , created {" "}
          <span className='text-[#ff9100] [text-shadow:_0_2px_8px_#ff9100] leading-snug font-manrope font-extrabold'>by you</span>
        </h1>
        <p className='text-2xl'>
          choose your favorite recipe and cook it yourself it is easy and fun!
        </p>
        <button className='text-white bg-[#ffa125] p-2 rounded-2xl my-5 text-2xl'>
          Share Your Favorite Recipe
        </button>
      </header>
      <main>
        <Suspense fallback={<div className='text-center text-2xl'>Loading...</div>}>
          <Meals />
        </Suspense>
      </main>
    </div>
  )
}

export default MealsPage