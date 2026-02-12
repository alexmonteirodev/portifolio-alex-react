import avatar from "./assets/imgs/avatar.png";
import mimoIcon from "./assets/svg/mimo-icon.svg";
import lumioIcon from "./assets/svg/lumio-icon.svg";
import AppTitle from "./components/appTitle";
import ImgCircle from "./components/imgCircle";
import natalia from "./assets/imgs/natalia.png";
import alex from "./assets/imgs/alex.png";
import laura from "./assets/imgs/laura.png";
import dhiego from "./assets/imgs/dhiego.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 px-96">
        {/* section 1 - apresentation */}
        <section className="flex flex-col gap-4 h-screen justify-center">
          <div className="flex flex-row gap-3 items-center ">
            <ImgCircle img={avatar} alt="Avatar" size="large" />

            <h1 className="font-bold text-3xl">Hey, I'm Alex.</h1>
          </div>
          <div className="flex flex-col gap-4 font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            <p>
              I’m Mobile & Web Developer with experience in frontend development
              for iOS applications and backend integration using Supabase and
              SQL.
            </p>
            <p>
              I build structured, scalable solutions across interface and data
              layers, with a strong interest in software architecture and system
              design.
            </p>
            <p>
              Always open to collaborating with teams where I can contribute,
              learn, and help build meaningful digital products. 🌱
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=34680436647&text&type=phone_number&app_absent=0"
            className="mt-4 text-xl text-white bg-black px-6 py-3 rounded-xl flex items-center justify-center self-start cursor-pointer hover:scale-105 hover:opacity-80 transition"
          >
            Say Hello!
          </a>
        </section>
        {/* section 2 - projects */}
        <section className="flex flex-col gap-4">
          <AppTitle img={mimoIcon} alt="mimoIcon" name={"Mimo"} link={"#"} />

          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={laura} alt="Avatar" size="small" />
            <ImgCircle img={alex} alt="Avatar" size="small" />
            <ImgCircle img={natalia} alt="Avatar" size="small" />
            <ImgCircle img={dhiego} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            <p>
              I’m Mobile & Web Developer with experience in frontend development
              for iOS applications and backend integration using Supabase and
              SQL.
            </p>
            <p>
              I build structured, scalable solutions across interface and data
              layers, with a strong interest in software architecture and system
              design.
            </p>
            <p>
              Always open to collaborating with teams where I can contribute,
              learn, and help build meaningful digital products. 🌱
            </p>
          </div>

          {/* <AppTitle img={lumioIcon} alt="lumioIcon" name={"Lumio"} link={"#"} /> */}
        </section>
      </div>
    </>
  );
}

export default App;
