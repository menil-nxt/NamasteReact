import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const [msg, setMsg] = useState({ text: "", type: "" });

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));
  const showMsg = (text, type) => {
    setMsg({ text, type });
    setTimeout(() => setMsg({ text: "", type: "" }), 3000);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      showMsg("All fields are required", "error");
      return;
    }
    if (password !== confirmPassword) {
      showMsg("Passwords do not match", "error");
      return;
    }
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      showMsg("Email already registered", "error");
      return;
    }
    users.push({ name, email, password });
    saveUsers(users);
    showMsg("Registration successful! Please sign in.", "success");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showMsg("Email and password are required", "error");
      return;
    }
    const users = getUsers();
    const user = users.find((u) => u.email === email);
    if (!user) {
      showMsg("No account found with this email", "error");
      return;
    }
    if (user.password !== password) {
      showMsg("Incorrect password", "error");
      return;
    }
    showMsg(`Welcome back, ${user.name}!`, "success");
    setEmail("");
    setPassword("");
    setTimeout(() => navigate("/"), 1000);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showMsg("Email and new password are required", "error");
      return;
    }
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === email);
    if (idx === -1) {
      showMsg("No account found with this email", "error");
      return;
    }
    users[idx].password = password;
    saveUsers(users);
    showMsg("Password updated successfully! Please sign in.", "success");
    setEmail("");
    setPassword("");
    setShowForgot(false);
    setIsLogin(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMsg({ text: "", type: "" });
  };

  const switchToLogin = () => {
    resetForm();
    setIsLogin(true);
    setShowForgot(false);
  };

  const switchToRegister = () => {
    resetForm();
    setIsLogin(false);
    setShowForgot(false);
  };

  const switchToForgot = () => {
    resetForm();
    setShowForgot(true);
  };

  if (showForgot) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Forgot Password
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Enter your email and a new password
          </p>

          {msg.text && (
            <p
              className={`text-center mb-4 ${msg.type === "error" ? "text-red-500" : "text-green-600"}`}
            >
              {msg.text}
            </p>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleForgotPassword}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
            >
              Update Password
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Remember your password?{" "}
            <button
              onClick={switchToLogin}
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-gray-500 text-center mb-8">
          {isLogin ? "Sign in to your account" : "Register to get started"}
        </p>

        {msg.text && (
          <p
            className={`text-center mb-4 ${msg.type === "error" ? "text-red-500" : "text-green-600"}`}
          >
            {msg.text}
          </p>
        )}

        <form
          className="flex flex-col gap-5"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
          )}

          {isLogin && (
            <button
              type="button"
              onClick={switchToForgot}
              className="text-sm text-orange-500 hover:text-orange-600 self-end -mt-2"
            >
              Forgot Password?
            </button>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
          >
            {isLogin ? "Sign In" : "Register"}
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button
            type="button"
            onClick={() =>
              window.open("https://accounts.google.com/o/oauth2/auth", "_blank")
            }
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 rounded-xl py-3 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Sign in with Google
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              window.open("https://appleid.apple.com/auth/authorize", "_blank")
            }
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 rounded-xl py-3 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Sign in with Apple
            </span>
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={isLogin ? switchToRegister : switchToLogin}
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
