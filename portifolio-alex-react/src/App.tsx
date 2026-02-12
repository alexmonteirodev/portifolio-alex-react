import avatar from "./assets/imgs/landers/avatar.png";
import mimoIcon from "./assets/svg/mimo-icon.svg";
import lumioIcon from "./assets/svg/lumio-icon.svg";
import AppTitle from "./components/appTitle";
import ImgCircle from "./components/imgCircle";
import natalia from "./assets/imgs/landers/natalia.png";
import alex from "./assets/imgs/landers/alex.png";
import laura from "./assets/imgs/landers/laura.png";
import dhiego from "./assets/imgs/landers/dhiego.png";
import mimoFirstPageApple from "./assets/imgs/mimo/firstScreen.png";
import mimoSecondPageApple from "./assets/imgs/mimo/secondScreen.png";
import lumioFirstPageApple from "./assets/imgs/lumio/firstScreen.png";
import lumioSecondPageApple from "./assets/imgs/lumio/secondScreen.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-20 px-96">
        {/* section 1 - apresentation */}
        <section className="flex flex-col gap-4 h-screen justify-center">
          <div className="flex flex-row gap-3 items-center ">
            <ImgCircle img={avatar} alt="Avatar" size="large" />

            <h1 className="font-bold text-3xl">Hey, I'm Alex. 🌱</h1>
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
              learn, and help build meaningful digital products.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=34680436647&text&type=phone_number&app_absent=0"
            className="mt-4 text-xl text-white bg-black px-6 py-3 rounded-xl flex items-center justify-center self-start cursor-pointer hover:scale-105 hover:opacity-80 transition"
          >
            Say Hello!
          </a>
        </section>

        {/* section 1 - Mova */}
        <section className="flex flex-col gap-4">
          <div className="sticky top-0 z-20 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
            <AppTitle img={mimoIcon} alt="mimoIcon" name={"Mova"} link={"#"} />
          </div>

          <div className="flex flex-row gap-2">
            <p className="text-gray-400 text-xs font-mono">2026 -</p>
            <p className="text-green-500 text-xs font-mono">now</p>
          </div>

          <div className="flex flex-row gap-2">
            <ImgCircle img={laura} alt="Avatar" size="small" />
            <ImgCircle img={alex} alt="Avatar" size="small" />
            <ImgCircle img={natalia} alt="Avatar" size="small" />
            <ImgCircle img={dhiego} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            <p>
              Mimo is a social app focused on birthdays and gift planning. Users
              create personal profiles including preferences such as clothing
              size, shoe size, favorite colors, and music style making gift
              selection easier and more thoughtful.
            </p>
            {/* <p>
              The app includes birthday reminders to prevent missed dates and a
              post system where users can share gift ideas they would like to
              receive, similar to a social feed.
            </p>
            <img
              className="rounded-xl"
              src={mimoFirstPageApple}
              alt={"mimoImgs"}
            />
            <p>
              Mimo blends social interaction with practical utility, improving
              the gift-giving experience through personalization and
              organization.
            </p>
            <img
              className="rounded-xl"
              src={mimoSecondPageApple}
              alt={"mimoImgs"}
            /> */}
          </div>
        </section>

        {/* section 2 - mimo */}
        <section className="flex flex-col gap-4">
          <div className="sticky top-0 z-20 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
            <AppTitle img={mimoIcon} alt="mimoIcon" name={"Mimo"} link={"#"} />
          </div>

          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={laura} alt="Avatar" size="small" />
            <ImgCircle img={alex} alt="Avatar" size="small" />
            <ImgCircle img={natalia} alt="Avatar" size="small" />
            <ImgCircle img={dhiego} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            <p>
              Mimo is a social app focused on birthdays and gift planning. Users
              create personal profiles including preferences such as clothing
              size, shoe size, favorite colors, and music style making gift
              selection easier and more thoughtful.
            </p>
            <p>
              The app includes birthday reminders to prevent missed dates and a
              post system where users can share gift ideas they would like to
              receive, similar to a social feed.
            </p>
            <img
              className="rounded-xl"
              src={mimoFirstPageApple}
              alt={"mimoImgs"}
            />
            <p>
              Mimo blends social interaction with practical utility, improving
              the gift-giving experience through personalization and
              organization.
            </p>
            <img
              className="rounded-xl"
              src={mimoSecondPageApple}
              alt={"mimoImgs"}
            />
          </div>
        </section>

        {/* section 3 - lumio */}
        <section className="flex flex-col gap-4">
          <div className="sticky top-0 z-20 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
            <AppTitle
              img={lumioIcon}
              alt="lumioIcon"
              name={"Lumio"}
              link={"#"}
            />
          </div>
          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={laura} alt="Avatar" size="small" />
            <ImgCircle img={alex} alt="Avatar" size="small" />
            <ImgCircle img={natalia} alt="Avatar" size="small" />
            <ImgCircle img={dhiego} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            <p>
              Lumio is a daily devotional app designed to help users connect
              with God through their emotions. By selecting their current mood,
              users receive personalized Bible verses and chapters that resonate
              with how they feel, creating a bridge between emotions and faith.
            </p>
            <img
              className="rounded-xl"
              src={lumioFirstPageApple}
              alt={"mimoImgs"}
            />
            <p>
              The app also allows users to write personal reflections, track
              their devotional history, and maintain consistency through a
              weekly streak system.
            </p>
            <p>
              Lumio combines emotional UX, personalization, and engagement
              mechanics to create a meaningful and consistent spiritual
              experience.
            </p>
            <img
              className="rounded-xl"
              src={lumioSecondPageApple}
              alt={"mimoImgs"}
            />
          </div>
        </section>

        {/* section 4 - spinUp */}
        <section className="flex flex-col gap-4">
          <div className="sticky top-0 z-20 py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
            <AppTitle
              img={lumioIcon}
              alt="lumioIcon"
              name={"SpinUp"}
              link={"https://lnkd.in/eY6Htd9K"}
            />
          </div>
          <p className="text-gray-400 text-xs font-mono">2023 - 2024</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={alex} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans text-2xl text-gray-800 font-light leading-10 not-italic">
            <p>
              I've worked on a company who operates with rotating shifts, and I
              noticed that the internal system didn’t provide a clear overview
              of employee schedules. This lack of visibility created friction in
              team organization and generated frequent complaints.
            </p>

            <p>
              Instead of treating it as just an inconvenience, I saw it as an
              operational gap with real business impact. I decided to take
              ownership of the problem and independently design and build a
              solution that could improve daily workflows.
            </p>

            <p>
              That’s how SpinUp was born a web mobile friendly scheduling tool
              focused on clarity, speed, and usability. It allows users to
              quickly add and visualize shifts in a clean calendar interface,
              making coordination simpler and more efficient.
            </p>

            <img
              className="rounded-xl"
              src={lumioFirstPageApple}
              alt={"mimoImgs"}
            />

            <p>
              Going a step further, I implemented a monthly overview of total
              hours and days worked, helping both employees and managers better
              understand workload distribution and plan ahead.
            </p>

            <p>
              SpinUp was a personal initiative project, and I genuinely have a
              special appreciation for it. It represents more than just code..
              it reflects my mindset of identifying inefficiencies,
              understanding their impact, and proactively building practical
              solutions that create real value and help people.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
