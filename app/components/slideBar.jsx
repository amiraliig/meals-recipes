'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Img1 from "@/public/foodGallery/1.jpg"
import Img2 from "@/public/foodGallery/2.jpg"
import Img3 from "@/public/foodGallery/3.jpg"
import Img4 from "@/public/foodGallery/4.jpg"

const SlideBar = () => {
    const gallery = [
        { name: "pizza", src: Img1 },
        { name: "burger", src: Img2 },
        { name: "pasta", src: Img3 },
        { name: "sandwich", src: Img4 },
    ]

    const [picture, setPicture] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setPicture(prev => (prev + 1) % gallery.length)
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[600px] h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={gallery[picture].name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-full h-full"
                >
                    <Image
                        src={gallery[picture].src}
                        alt={gallery[picture].name}
                        className="w-full h-full object-cover rounded-2xl"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default SlideBar
