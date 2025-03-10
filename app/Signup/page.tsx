'use client'
import AuthLayout from '@/components/AuthLayout'
import SignupForm from '@/components/SignupForm'
import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
    <AuthLayout
    title="Create an account"
    subtitle="Sign up to get started"
  >
    <SignupForm />
  </AuthLayout>
  )
};

export default Signup