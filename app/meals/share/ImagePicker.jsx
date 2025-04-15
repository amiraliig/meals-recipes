'use client'
import React, { useRef, useState, useEffect } from 'react'

const ImagePicker = ({ ref }) => {
    const handleClick = (e) => {
        e.preventDefault()
        ref.current.click()
    }
    return (
        <div className="">
            <div className='gap-4'>
                <button
                    onClick={handleClick}
                    className="border-2 border-[#ffa125] rounded-xl p-2"
                >
                    select
                </button>

            </div>
        </div>
    )
}

export default ImagePicker
