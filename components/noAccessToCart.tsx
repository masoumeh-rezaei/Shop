import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Logo from './Logo'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const NoAccessToCart = () => {
  return (
    <div className='flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4'>
        <Card className='max-w-md w-full'>
            <CardHeader className='space-y-4'>
                <div className='flex justify-center'>
                <Logo className="font-bold">
                    <div className="flex">
                    Style
                    <small className="text-sm">MoOn</small>
                    </div>
                </Logo>
                </div>
                <CardTitle className='text-2xl font-bold text-center'>Welcome Back!</CardTitle>
            </CardHeader>
            <CardContent >
                <p>
                    log in to view your cart items and checkOut.
                     Don&apos;t miss out on
                    your favorite products
                    <SignInButton mode='modal'>
                        <Button className=' w-full font-semibold mt-5' size={'lg'}>Sign In</Button>
                    </SignInButton>
                </p>
            </CardContent>
            <CardFooter className='flex flex-col space-y-2'>
                <div>
                    Don&apos;t have an account?
                </div>
                <SignUpButton mode='modal'>
                    <Button variant='outline' className='w-full' size='lg'>Creat An Account</Button>
                </SignUpButton>
            </CardFooter>
        </Card>
    </div>
  )
}

export default NoAccessToCart