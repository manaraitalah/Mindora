"use client"
import Button from '@/components/ui/buttons/primary-button';
import Input from '@/components/ui/inputs/input-fields';
import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
  <div className="max-w-sm  space-y-4">
      {/* 1. Email Input */}
      <Input
        label="Email address"
        type="email"
        defaultValue="jessica.miller@email.com"
        placeholder="name@example.com"
      />

      {/* 2. Password Input with Toggle */}
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        defaultValue="supersecretpassword"
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
          >
            {showPassword ? (
              <>
              <IoEyeOutline />
                <span>Hide</span>
              </>
            ) : (
              <>
              <IoEyeOffOutline />

                <span>Show</span>
              </>
            )}
          </button>
        }
      />
      <Button type="submit" className="mt-2">
        Sign in
      </Button>
    </div>
  )
}

export default LoginForm
