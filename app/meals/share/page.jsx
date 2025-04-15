'use client'
import React, { useActionState, useRef } from 'react'
import { useState } from 'react'
import ImagePicker from './ImagePicker'
import sharemeal from './action'
import MealFormSubmit from './MealFormSubmit'

const Share = () => {

  const [state, formAction] = useActionState(sharemeal, { massage: null })
  const [submit, setSubmit] = useState(false)
  const ref = useRef(null)


  return (
    <div>
      <header className='p-2 m-2 lg:px-8 lg:mx-8 '>
        <h1 className='text-2xl font-bold'>
          Share your favorite meals
        </h1>
        <p>
          Or any other meals you feel need sharing!
        </p>
      </header>
      <main>
        <form className='lg:px-8 lg:mx-8 p-2 m-2' action={formAction}>
          <div className='grid grid-cols-2 gap-x-7 items-start'>

            <div className=''>
              <label htmlFor="name" className='m-2'>Your name</label>
              <input name='name' type="text" id='name' className=' bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border px-3 py-2 border-slate-200 rounded-md  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full' />
            </div>
            <div>
              <label htmlFor="email" className='m-2' >Your email</label>
              <input name='email' type="email" id='email' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border px-3 py-2 border-slate-200 rounded-md  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' />
            </div>

            <div className='col-span-2'>
              <label htmlFor="title">Title</label>
              <input name='title' type="text" id='title' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border px-3 py-2 border-slate-200 rounded-md  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' />
            </div>
            <div className='col-span-2'>
              <label htmlFor="summary">Short Summary</label>
              <input name='summary' type="text" id='summary' className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border px-3 py-2 border-slate-200 rounded-md  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' />
            </div>
            <div className='col-span-2'>
              <label htmlFor="instructions">Instructions</label>
              <textarea name="instructions" id="instructions" className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border px-3 py-2 border-slate-200 rounded-md  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'></textarea>
            </div>
            <input
              ref={ref}
              id='image'
              type="file"
              name="image"
              accept="image/jpeg, image/png"
              className=""
            />
            <ImagePicker submitted={submit} ref={ref} />
            <div className=''>
              <button type='submit' className='bg-[#ffa125] px-3 py-2 rounded-xl text-white  cursor-pointer' onClick={() => {
                setSubmit(true)
              }}><MealFormSubmit /></button>
            </div>
          </div>
          {state.massage && <p>{state.massage}</p>}
        </form>
      </main>
    </div>
  )
}

export default Share