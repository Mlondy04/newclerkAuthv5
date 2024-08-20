"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'

const Clientpage = () => {
    const { isSignedIn, user, isLoaded } = useUser()

    if (!isLoaded) {
        // Handle loading state however you like
        return null
    }

    if (isSignedIn) {
        return <div className='h-full flex flex-col items-center justify-center text-2xl'>Hello, {user.fullName}!</div>
    }

  return (
    <div>
      
    </div>
  )
}

export default Clientpage
