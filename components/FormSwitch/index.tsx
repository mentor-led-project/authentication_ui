import { FormSwitchProps } from '@/types'
import Link from 'next/link'
import React from 'react'
import './styles.css'
type Props = {}

const FormSwitch:React.FC<FormSwitchProps> = ({ text, linkText, href }) => {
  return (
    <div className='formSwitch'>
      {text}
      <Link href={href}>{linkText}</Link>
    </div>
  )
}

export default FormSwitch