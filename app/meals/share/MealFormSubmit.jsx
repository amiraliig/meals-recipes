'use client'
import React from 'react'
import { useFormState } from 'react-dom'

const MealFormSubmit = () => {
    const{pending} = useFormState
  return (
    <div>{pending ? "submiting..." : "submit"}</div>
  )
}

export default MealFormSubmit