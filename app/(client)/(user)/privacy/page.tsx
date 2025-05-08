import Container from '@/components/container'
import React from 'react'

const Privacy = () => {
  return (
    <Container className='space-y-4 max-w-3xl px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-3xl font-bold'>Prtivacy And Policy</h1>
      <h1 className='text-xl font-semibold mb-2'>1. Acceptance of Terms</h1>
      <p className='text-sm text-gray-700'>By accessing and using Tulos's services, you agree to be bound by these Terms and Conditions.</p>
      <h1 className='text-xl font-semibold mb-2'>2. Use of Services</h1>
      <p className='text-sm text-gray-700'>
      You agree to use Tulos's services only for lawful purposes and in accordance with these Terms and Conditions.
      </p>
      <h1 className='text-xl font-semibold mb-2'>3. Intellectual Property</h1>
      <p className='text-sm text-gray-700'>
      All content and materials available on Tulos's services are the property of Tulos and are protected by applicable intellectual property laws.
      </p>
      <h1 className='text-xl font-semibold mb-2'>4. Limitation of Liability</h1>
      <p className='text-sm text-gray-700'>
      Tulos shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
      </p>
      <h1 className='text-xl font-semibold mb-2'>5. Governing Law</h1>
      <p className='text-sm text-gray-700'>
      These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Tulos operates.
      </p>

    </Container>
  )
}

export default Privacy