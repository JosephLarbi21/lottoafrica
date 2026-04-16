"use client";

import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(tab, form);
    alert(`${tab.toUpperCase()} submitted`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 z-10 animate-fadeIn">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
        >
          <X />
        </button>

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          {tab === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        <p className="text-center text-gray-500 text-sm mb-6">
          {tab === "login"
            ? "Log in to continue playing"
            : "Join LottoAfrica and start winning"}
        </p>

        {/* TABS */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              tab === "login" ? "bg-white shadow text-black" : "text-gray-500"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setTab("signup")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              tab === "signup" ? "bg-white shadow text-black" : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          {/* NAME (SIGNUP ONLY) */}
          {tab === "signup" && (
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          )}

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-yellow-400 cursor-pointer to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-yellow-400/40"
          >
            {tab === "login" ? "Log in" : "Create Account"}
          </button>

          {/* FORGOT PASSWORD */}
          {tab === "login" && (
            <div className="text-center">
              <button className="text-sm text-blue-600 hover:underline cursor-pointer">
                Forgot your password?
              </button>
            </div>
          )}

          {/* DIVIDER */}
          <div className="text-center text-gray-800 text-sm">
            or continue with
          </div>

          {/* SOCIAL */}
          <div className="space-y-3">
            <button className="w-full flex items-center cursor-pointer text-gray-800 justify-center gap-2 border border-gray-200 py-2 rounded-full hover:bg-gray-50 transition">
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button className="w-full flex items-center cursor-pointer text-gray-800 justify-center gap-2 border border-gray-200 py-2 rounded-full hover:bg-gray-50 transition">
              <FaFacebookF className="text-blue-600" />
              Continue with Facebook
            </button>
          </div>

          {/* SWITCH */}
          <p className="text-center text-sm text-gray-500 mt-4">
            {tab === "login" ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setTab("signup")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setTab("login")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Log in
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
