"use client";

import { signIn } from "next-auth/react";
import { Github } from "lucide-react";
import { useState, type MouseEvent, type FormEvent } from "react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGitHubSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signIn("credentials", {
        username,
        password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white/5 p-8 backdrop-blur-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Sign in to access LUTs
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Authentication required to download LUT files
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={handleGitHubSignIn}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#24292F] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#24292F]/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Github className="h-5 w-5" />
            {isLoading ? "Signing in..." : "Sign in with GitHub"}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-900 px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleTestSignIn} className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 ring-white/10 transition-all focus:ring-2"
                placeholder="Username (test)"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 ring-white/10 transition-all focus:ring-2"
                placeholder="Password (test123)"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in with Test Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
