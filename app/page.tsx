export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7eefc] via-[#f3e6fb] to-[#f8f4fb] p-6">
      <div className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white grid grid-cols-1 md:grid-cols-2">

        {/* Left: image panel (rounded left) */}
        <div className="relative bg-gradient-to-b from-[#1f1636] via-[#4b2b7f] to-[#d291f9] text-white flex items-start md:items-center p-0 md:p-0 h-full md:rounded-l-3xl rounded-t-3xl overflow-hidden">
          {/* full-size astronaut image, centered and contained */}
          <img src="/Astronauta.svg" alt="Astronaut" className="z-0 w-full h-full object-contain object-bottom md:object-center bg-transparent" />

          {/* subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-10">
            <div className="flex items-start justify-between">
              <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">Astro</div>
            </div>

            <div className="mt-4 md:mt-0 max-w-[300px]">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]">Exploring new frontiers, one step at a Time.</h2>
              <p className="mt-4 text-sm opacity-95">Beyond Earth's grasp</p>
            </div>

            <div className="text-xs opacity-80">&nbsp;</div>
          </div>
        </div>

        {/* Right: form panel (rounded right) */}
        <div className="relative p-6 md:p-12 bg-white flex items-center md:rounded-r-3xl rounded-b-3xl">
          <a className="absolute top-4 right-4 text-sm text-gray-500 md:top-6 md:right-8" href="#">Already a member? Sign in</a>
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex gap-3">
                <button className="flex-1 flex items-center gap-3 h-11 rounded-full bg-[#5b2aa8] text-white px-4 shadow-sm">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-sm">G</span>
                  <span className="font-medium">Sign up with Google</span>
                </button>
                <button className="flex items-center gap-3 h-11 rounded-full bg-[#f3eafc] text-gray-700 px-4 border border-[#eee0ff]">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1f1636] text-white text-sm">f</span>
                  <span className="font-medium">with Facebook</span>
                </button>
              </div>

              <div className="text-center text-sm text-gray-400">or sign up using your email address</div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2">Name</label>
                <input aria-label="Name" name="name" className="w-full h-11 rounded-full bg-[#f4eef8] text-gray-800 px-4 placeholder-gray-500 ring-1 ring-transparent focus:ring-2 focus:ring-[#d6b3ff] transition" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2">Email or Phone no.</label>
                <input aria-label="Email or Phone" name="email" className="w-full h-11 rounded-full text-gray-800 bg-[#f4eef8] px-4 placeholder-gray-500 ring-1 ring-transparent focus:ring-2 focus:ring-[#d6b3ff] transition" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2">Username</label>
                <input aria-label="Username" name="username" className="w-full h-11 rounded-full bg-[#f4eef8] text-gray-800 px-4 placeholder-gray-500 ring-1 ring-transparent focus:ring-2 focus:ring-[#d6b3ff] transition" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2">Password</label>
                <input aria-label="Password" type="password" name="password" className="w-full h-11 rounded-full text-gray-800 bg-[#f4eef8] px-4 placeholder-gray-500 ring-1 ring-transparent focus:ring-2 focus:ring-[#d6b3ff] transition" />
              </div>

              <label className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 text-purple-600" />
                <span>I agree to all terms and <a className="text-purple-600 underline" href="#">Privacy Policy</a></span>
              </label>

              <button className="mt-2 h-12 w-full rounded-full bg-gradient-to-r from-[#23103b] to-[#2b0750] text-white font-semibold shadow-lg">Sign up</button>

              <div className="text-center text-sm text-gray-400 mt-3">Already have an account? <a href="#" className="text-purple-600">Log in</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
