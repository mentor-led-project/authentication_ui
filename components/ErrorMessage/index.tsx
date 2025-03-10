import { ErrorMessageProps } from '@/types';
import React from 'react'
import './styles.css'

type Props = {}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {

    if (!message) return null;
  return (
    <div className='formError'>
      {message}
    </div>
  )
}

export default ErrorMessage