import { SubmitButtonProps } from '@/types'
import React from 'react'
import './styles.css'

type Props = {}

const Button: React.FC< SubmitButtonProps> = ({isLoading,loadingText, defaultText}) => {
        return (
            <button
              type="submit"
              className='submitButton'
              disabled={isLoading}
            >
              {isLoading ? loadingText : defaultText}
            </button>
      )
    };


export default Button