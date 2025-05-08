import Container from '@/components/container'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <Container className='max-w-3xl px-4 sm:px-6 lg:px-8 py-12'>
          <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
          <p className='mb-6'>we&apos;d love to here from u . please fill out the form below and we&apos;ll get back to u ASAP</p>
          <form className='space-y-4'>
            <div className='space-y-0.5'>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' className='w-full px-3 py-2 border border-gray-300 rounded-md' />
            </div>
            <div className='space-y-0.5'>
              <label htmlFor="email">Email</label>
              <input type="text" id='email' name='email' className='w-full px-3 py-2 border border-gray-300 rounded-md' />
            </div>
            <div className='space-y-0.5'>
              <label htmlFor="message">Message</label>
              <textarea rows={6}  name='message' className='w-full px-3 py-2 border border-gray-300 rounded-md' />
            </div>
            <button className='bg-gray-800/80 text-white px-6 py-3 font-semibold text-sm hoverEffect hover:bg-gray-800' type='submit'>Send Message</button>
          </form>
        </Container>
    </div>
  )
}

export default ContactPage