function App() {

  return (
    <main className="font-karla py-8 sm:py-0 min-h-screen bg-gray-50 grid place-content-center">
      <section className="lient-hieght-full w-80 sm:w-full md:w-[40rem] mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="p-8">
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl text-cyan-500 font-bold">Join our community</h1>
          <h2 className="mb-2 text-md sm:text-2xl text-lime-500 font-bold">30-day, hassle-free money back guarantee</h2>
          <p className="text-gray-300">
            Gain access to our full library of tutorials along with expert code reviews. 
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>
        <div className="sm:flex text-white">
          <div className="sm:w-1/2 p-8 bg-cyan-400">
            <h3 className="text-xl font-bold">Monthly Subscription</h3>
            <div className="my-3 flex gap-3 items-center">
              <b className="text-4xl">$29 </b> <span className="text-cyan-100">per month</span>
            </div>
            <p>Full access for less than $1 a day</p>
            <button className="mt-4 shadow-xl w-full py-2 rounded-lg bg-lime-500 font-bold cursor-pointer">Sign Up</button>
          </div>
          <div className="sm:w-1/2 p-8 bg-cyan-400/80">
            <h3 className="text-xl font-bold mb-3">Why Us</h3>
            <p className="pr-6 text-gray-100">
              Tutorials by industry experts
              Peer & expert code review
              Coding exercises
              Access to our GitHub repos
              Community forum
              Flashcard decks
              New videos every week
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
