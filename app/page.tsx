"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="auth-container">
      <h2>Welcome to Auth App</h2>
      <p>Please login or signup to continue.</p>

      <div className="button-group">
        {" "}
        <button onClick={() => router.push("/Login")}>Login</button>
        <button onClick={() => router.push("/Signup")}>Signup</button>
      </div>
    </div>
  );
}
