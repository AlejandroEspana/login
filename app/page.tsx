export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7eefc] via-[#f3e6fb] to-[#f8f4fb] p-6">
      <div className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white grid grid-cols-1 md:grid-cols-2">

        {/* Left: image panel */}
        <div className="relative bg-gradient-to-b from-[#1f1636] via-[#4b2b7f] to-[#d291f9] text-white flex items-start md:items-center p-6 md:p-10">
          <img src="/Astronauta.svg" alt="Astronaut" className="absolute inset-0 w-auto h-auto object-cover object-top opacity-100" />
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">Astro</div>
            </div>
            <div className="mt-2 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-sm md:pl-2">Exploring new frontiers, one step at a Time.</h2>
              <p className="mt-4 text-sm opacity-90 md:pl-2">Beyond Earth's grasp</p>
            </div>
            <div className="text-xs opacity-90">&nbsp;</div>
          </div>
        </div>

        {/* Right: form panel */}
        <div className="relative p-6 md:p-12 bg-white flex items-center">
          <a className="absolute top-4 right-4 text-sm text-gray-500 md:top-6 md:right-8" href="#">Already a member? Sign in</a>
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex gap-3">
                <button className="flex-1 flex items-center gap-2 h-11 rounded-full bg-purple-700 text-white px-4 shadow-md">
                  <span className="inline-block w-4 h-4 bg-white rounded-full" />
                  Sign up with Google
                </button>
                <button className="flex items-center gap-2 h-11 rounded-full bg-purple-100 text-gray-700 px-4 border border-purple-200">
                  <span className="inline-block w-4 h-4 bg-purple-700 rounded-full" />
                  with Facebook
                </button>
              </div>

              <div className="text-center text-sm text-gray-400">or sign up using your email address</div>

              <input aria-label="Name" placeholder="Name" className="w-full h-11 rounded-full bg-[#f4eef8] px-4 placeholder-gray-500" />
              <input aria-label="Email or Phone" placeholder="Email or Phone no." className="w-full h-11 rounded-full bg-[#f4eef8] px-4 placeholder-gray-500" />
              <input aria-label="Username" placeholder="Username" className="w-full h-11 rounded-full bg-[#f4eef8] px-4 placeholder-gray-500" />
              <input aria-label="Password" type="password" placeholder="Password" className="w-full h-11 rounded-full bg-[#f4eef8] px-4 placeholder-gray-500" />

              <label className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 text-purple-600" />
                I agree to all terms and Privacy Policy
              </label>

              <button className="mt-2 h-12 w-full rounded-full bg-gradient-to-r from-[#2b0750] to-[#200033] text-white font-semibold shadow-lg">Sign up</button>

              <div className="text-center text-sm text-gray-400 mt-3">Already have an account? <a href="#" className="text-purple-600">Log in</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
