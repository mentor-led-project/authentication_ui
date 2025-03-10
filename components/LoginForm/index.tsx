import { LoginFormData } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import ErrorMessage from '../ErrorMessage';
import FormInput from '../FormInput';
import Button from '../Button';
import FormSwitch from '../FormSwitch';

const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginFormData>();
    
    const onSubmit = async (data: LoginFormData) => {
      try {
        setIsLoading(true);
        setError('');
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
    
        if (data.email === 'user@example.com' && data.password === 'password') {
        
          router.push('/dashboard');
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ErrorMessage message={error} />
          
          <FormInput
            id="email"
            label="Email address"
            type="email"
            placeholder="Enter your email"
            register={register}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            error={errors.email}
            disabled={isLoading}
          />
          
          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            error={errors.password}
            disabled={isLoading}
          />
          
          <Button
            isLoading={isLoading}
            loadingText="Logging in..."
            defaultText="Log in"
          />
          
          <FormSwitch
            text="Don't have an account?"
            linkText="Sign up"
            href="/signup"
          />
        </form>
    );
};

export default LoginForm;