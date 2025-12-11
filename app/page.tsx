export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purpleBrand to-primary text-white">
      <h1 className="text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        FlowlyNova
      </h1>

      <p className="text-xl max-w-2xl text-center mb-10 opacity-90">
        Intelligent AI Agents that automate your entire business.  
        Flows, workflows, decisions — all done automatically.
      </p>

      <div className="flex gap-4">
        <a
          href="#"
          className="px-8 py-3 bg-white text-purpleBrand font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Get Started
        </a>

        <a
          href="#"
          className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-purpleBrand transition"
        >
          Learn More
        </a>
      </div>
    </main>
  )
}
