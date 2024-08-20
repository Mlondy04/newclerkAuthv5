import React from 'react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

const navbar = () => {
    const {userId} = auth();
  return (
    <div className='bg-cyan-950 rounded-b-xl'>
        <ul className='flex justify-between py-4 px-6'>
            <div>
                <Link href="/">
                     <li>Home</li>
                </Link>
            </div>
            <div>
                <Link href="/client">
                    <li>Client</li>
                </Link>
            </div>
            <div className='flex gap-6 items-center'>
                {!userId ? (
                    <> 
                    <Link href="/sign-in">
                    <li>login</li>
                    </Link>
                    <Link href="/sign-up">
                        <li>sign-up</li>
                    </Link>
                    </>
                ): (
                    <>
                       <Link href='/profile'>
                        <li>Profile</li>
                       </Link>
                       <li className='flex items-center'>
                            <UserButton/>
                       </li>
                    </>
                )}
            </div>
        </ul>
    </div>
  )
}

export default navbar
