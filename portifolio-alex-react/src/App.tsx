function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 px-96">
        {/* section 1 - apresentation */}
        <section className="flex flex-col gap-3 mt-20">
          <div>
            <span>
              <img className="h-5 w-5" src="../assets/imgs/avatar.png" alt="" />
            </span>
            <h1 className="font-bold text-3xl">Hey, I'm Alex.</h1>
          </div>
          <p className="font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            I’m a 27 year old Mobile Developer with experience in frontend
            development for iOS applications and backend integration using
            Supabase and SQL. <br />
            I work across both interface and data layers, building structured,
            scalable solutions rather than just screens. With a strong interest
            in software architecture and system design, I continuously study and
            refine my skills to grow as a Software Engineer. <br />
            Currently based in Spain, I’m open to collaborating with teams where
            I can contribute, learn, and help build meaningful digital products.
          </p>
          <span className="bg-black px-8 py-4 rounded-xl flex items-center justify-center self-start">
            <a href="#" className="text-2xl text-white">
              Say Hello!
            </a>
          </span>
        </section>
        <p>stacks</p>
      </div>
    </>
  );
}

export default App;
