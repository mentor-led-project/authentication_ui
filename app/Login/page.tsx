'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email.includes('@')) newErrors.email = 'Invalid email format';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert('Login successful!');
    router.push('/');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {errors.password && <div className="error">{errors.password}</div>}
        </label>

        <button type="submit">Login</button>
      </form>

      <p className="auth-switch">
      Ready to get started? <Link href="/Signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
