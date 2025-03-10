import { AuthLayoutProps } from '@/types'
import React from 'react'
import './styles.css'

type Props = {}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className='container'>
    <div className='formCard'>
      <div className='header'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  </div>
  )
}

export default AuthLayout