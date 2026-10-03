'use client';
import { useState } from "react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { signIn } from "@/lib/auth-client";

// Google Icon Component
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // আগের এরর ক্লিয়ার করার জন্য
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/", // সফল লগইনের পর হোম পেজে রিডাইরেক্ট হবে
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
          window.location.href = "/";
        },
        onError: (ctx) => {
          setLoading(false);
          console.error("Login Error:", ctx.error);
          // ভুল পাসওয়ার্ড বা ইমেইল দিলে এখানে কাস্টম বা আসল মেসেজ সেট হবে
          setErrorMessage(
            ctx.error?.message || "Invalid email or password. Please try again."
          );
        },
      }
    );
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("Google Sign-in Exception:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Container Card */}
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-500">
            Please sign in to access your account
          </p>
        </div>

        {/* 🔴 Error Message Banner (ভুল পাসওয়ার্ড বা ইমেইল দিলে এটি দেখাবে) */}
        {errorMessage && (
          <div className="flex items-center gap-3 p-3.5 text-sm text-rose-700 bg-rose-50 rounded-xl border border-rose-200/80 animate-in fade-in duration-200">
            <svg
              className="w-5 h-5 text-rose-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Google Sign-in Option */}
        <div>
          <Button 
            onClick={handleGoogleSignIn} 
            variant="bordered"
            className="w-full font-medium border-slate-300 text-slate-700 hover:bg-slate-50 transition-all py-5 rounded-xl flex items-center justify-center shadow-sm cursor-pointer"
          >
            <GoogleIcon />
            Sign in with Google
          </Button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
          <div className="border-t border-slate-200 w-full"></div>
          <span className="bg-white px-3 text-xs text-slate-400 uppercase font-semibold absolute">Or</span>
        </div>

        {/* Login Form */}
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          
          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) =>
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Please enter a valid email address"
                : null
            }
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-semibold text-slate-700">Email Address</Label>
            <Input 
              placeholder="john@example.com" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
            <FieldError className="text-xs text-rose-500 mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Password must contain at least one number";
              return null;
            }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex justify-between items-center">
              <Label className="text-sm font-semibold text-slate-700">Password</Label>
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot?</a>
            </div>
            <Input 
              placeholder="Enter your password" 
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
            <Description className="text-xs text-slate-400">
              Must be 8+ chars with 1 uppercase & 1 number
            </Description>
            <FieldError className="text-xs text-rose-500 mt-1" />
          </TextField>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-3">
            <Button 
              type="submit" 
              color="primary" 
              isLoading={loading}
              isDisabled={loading}
              className="w-full font-semibold py-2.5 rounded-xl shadow-md bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
            <Button 
              type="reset" 
              variant="flat" 
              onClick={() => setErrorMessage("")}
              className="w-1/3 font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer Navigation */}
        <p className="text-center text-xs text-slate-500 mt-4">
        Dont have an account?{" "}
          <a href="/sign-up" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
// ------------- old code -------------
// "use client";
// import { signIn, signUp } from "@/lib/auth-client";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

// const RegisterPage = () => {

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     const { data: response, error } = await signUp.email({
//       name: data.name,
//       email: data.email,
//       password: data.password,
//     });

//     if (error) {
//       console.error("Error signing up:", error);
//     } else {
//       console.log("Successfully signed up:", response);
//     }
//   };

//   // 🟢 Google Sign-In Fix
//   const handleGoogleSignUp = async () => {
//     try {
//       await signIn.social({
//         provider: "google",
//         callbackURL: "/", // সফলভাবে গুগল লগইন হলে হোম পেজে রিডাইরেক্ট করবে
//       });
//     } catch (err) {
//       console.error("Google Sign-in Exception:", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Sign Up Page</h1>
      
//       <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
//         <TextField
//           isRequired
//           name="name"
//           validate={(value) => (value.length < 3 ? "Name must be at least 3 characters" : null)}
//         >
//           <Label>Name</Label>
//           <Input placeholder="Your Name" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           validate={(value) =>
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
//               ? "Please enter a valid email address"
//               : null
//           }
//         >
//           <Label>Email</Label>
//           <Input placeholder="Enter your email" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           validate={(value) => {
//             if (value.length < 8) return "Password must be at least 8 characters";
//             if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
//             if (!/[0-9]/.test(value)) return "Password must contain at least one number";
//             return null;
//           }}
//         >
//           <Label>Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
//           <FieldError />
//         </TextField>

//         <div className="flex gap-2">
//           <Button type="submit" color="primary">Submit</Button>
//           <Button type="reset" variant="secondary">Reset</Button>
//         </div>
//       </Form>

//       <div className="mt-4">
//         <Button onClick={handleGoogleSignUp} color="secondary">
//           Sign up with Google
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;