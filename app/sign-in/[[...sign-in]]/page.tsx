"use client";
import { addUserToDatabase } from '@/users/user'
import { SignIn } from '@clerk/nextjs'
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    async function handleUser() {
      await addUserToDatabase();
    }
    handleUser();
  }, []);
  
  return (
    <div className='flex items-center justify-center h-full'>
      <SignIn afterSignOutUrl="/"/>
    </div>
)
}