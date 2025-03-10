import { ReactNode } from "react";
import { RegisterOptions, UseFormRegister, FieldError } from 'react-hook-form';

export interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle: string;
  }

  export interface LoginFormData {
    email: string;
    password: string;
  }
  
  export interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  export interface FormInputProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    rules: RegisterOptions;
    error?: FieldError;
    disabled?: boolean;
  }

  export interface SubmitButtonProps {
    isLoading: boolean;
    loadingText: string;
    defaultText: string;
  }

  export interface FormSwitchProps {
    text: string;
    linkText: string;
    href: string;
  }

  export interface ErrorMessageProps {
    message: string;
  }