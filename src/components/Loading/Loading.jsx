"use client";
import Image from "next/image";
import React from 'react'

export default function Loading() {
  return (
    <div className="w-full min-h-screen">
        <div className="">
            <Image src="https://res.cloudinary.com/dfwigpcer/image/upload/v1772139311/halo_dtqrmx.png" 
            alt="Loading" 
            width={350} 
            height={250} 
            className="mx-auto"
            />
        </div>
    </div>
  )
}
