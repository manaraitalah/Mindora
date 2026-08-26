import Image from "next/image";
import LoginForm from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FDFBF7]">
      
      {/* Left Side - Image & Copy (Hidden on very small screens if needed) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen p-4 md:p-8">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {/* Replace with your actual image path */}
          <Image 
            src="/assets/login-bg.jpg" 
            alt="Woman relaxing with a mug" 
            fill 
            className="object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h1 className="text-3xl font-serif mb-2">Support for mind,<br/>made for real life</h1>
            <p className="text-sm opacity-90">Compassionate care, personalized for you.<br/>You're not alone. We're here for you.</p>
          </div>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-12">
        <div className="max-w-md w-full mx-auto">
          
          <h2 className="text-3xl font-serif text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-8">Sign in to continue your journey</p>
          
          {/* Email & Password Form */}
          <LoginForm />

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">or continue with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            New to Mindora? <a href="/signup" className="text-[#1B4332] font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </div>

    </div>
  );
}