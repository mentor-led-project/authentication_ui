'use client';
import AuthLayout from '@/components/AuthLayout'
import LoginForm from '@/components/LoginForm'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <AuthLayout
    title="Welcome back"
    subtitle="Log in to your account to continue"
  >
    <LoginForm />
  </AuthLayout>
  )
}

export default Login