import React from 'react'
import './styles.css'
import { FormInputProps } from '@/types'

type Props = {}

const FormInput: React.FC<FormInputProps> = ({  id,
    label,
    type,
    placeholder,
    register,
    rules,
    error,
    disabled = false,}) => {

  return (
    <div className='formGroup'>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register(id, rules)}
      disabled={disabled}
    />
    {error && <div className='errorText'>{error.message}</div>}
  </div>
  )
}

export default FormInput