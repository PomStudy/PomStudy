"use client"
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {useUser} from "@auth0/nextjs-auth0/client"

export default function Home() {
  const {user, error, isLoading} = useUser();
  return (
    
    <div>
        <a href="/api/auth/login" className="text-black"> Login </a>
          
        <Link href="/courses" className="text-black"> Start your study journey here </Link>

      </div>
  )
}
