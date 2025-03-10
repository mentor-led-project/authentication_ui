import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import FormSwitch from '../FormSwitch';
import Button from '../Button';
import FormInput from '../FormInput';
import ErrorMessage from '../ErrorMessage';
import { SignupFormData } from '@/types';

const SignupForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<SignupFormData>();
    
    const password = watch('password');
    
    const onSubmit = async (data: SignupFormData) => {
      try {
        setIsLoading(true);
        setError('');
        
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Registration data:', data);

        router.push('/login');
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
          id="name"
          label="Full name"
          type="text"
          placeholder="Enter your name"
          register={register}
          rules={{
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
          }}
          error={errors.name}
          disabled={isLoading}
        />
        
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
          placeholder="Create a password"
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
        
        <FormInput
          id="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
          register={register}
          rules={{
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          }}
          error={errors.confirmPassword}
          disabled={isLoading}
        />
        
        <Button
          isLoading={isLoading}
          loadingText="Creating account..."
          defaultText="Create account"
        />
        
        <FormSwitch
          text="Already have an account?"
          linkText="Log in"
          href="/login"
        />
      </form>
    );
};

export default SignupForm;