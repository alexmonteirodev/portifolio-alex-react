// import avatar from "./assets/imgs/landers/avatar.png";
import mimoIcon from "./assets/svg/mimo-icon.svg";
import lumioIcon from "./assets/svg/lumio-icon.svg";
import movaIcon from "./assets/svg/mova-icon.svg";
import spinupIcon from "./assets/svg/app-dev-icon.svg";
import AppTitle from "./components/appTitle";
import ImgCircle from "./components/imgCircle";
import natalia from "./assets/imgs/landers/natalia.png";
import alex from "./assets/imgs/landers/alex.png";
import laura from "./assets/imgs/landers/laura.png";
import dhiego from "./assets/imgs/landers/dhiego.png";
import avatar from "./assets/imgs/perfilImgCv.jpg";
import mimoFirstPageApple from "./assets/imgs/mimo/firstScreen.png";
import mimoSecondPageApple from "./assets/imgs/mimo/secondScreen.png";
import lumioFirstPageApple from "./assets/imgs/lumio/firstScreen.png";
import lumioSecondPageApple from "./assets/imgs/lumio/secondScreen.png";
import spinUpImg from "./assets/imgs/spinup/spinup-schedule-gps.jpg";
import LinkCase from "./components/linkCase";
import Stack from "./components/stack";
import htmlIcon from "./assets/svg/stacks/html5.svg";
import cssIcon from "./assets/svg/stacks/css3.svg";
import jsIcon from "./assets/svg/stacks/javascript.svg";
import tsIcon from "./assets/svg/stacks/typescript.svg";
import reactIcon from "./assets/svg/stacks/react.svg";
import nextIcon from "./assets/svg/stacks/nextjs.svg";
import tailwindIcon from "./assets/svg/stacks/tailwindcss.svg";
import supabaseIcon from "./assets/svg/stacks/supabase.svg";
import gitIcon from "./assets/svg/stacks/git.svg";
import expoIcon from "./assets/svg/stacks/expo.svg";
import viteIcon from "./assets/svg/stacks/vitejs.svg";
import wppIcon from "./assets/svg/wpp-icon.svg";
// import githubIcon from "./assets/svg/github.svg";
// import linkedinIcon from "./assets/svg/linkedin.svg";
// import instagramIcon from "./assets/svg/instagram.svg";

const stacks = [
  {
    img: htmlIcon,
    title: "Html",
  },
  {
    img: cssIcon,
    title: "Css",
  },
  {
    img: jsIcon,
    title: "JavaScript",
  },
  {
    img: tsIcon,
    title: "TypeScript",
  },
  {
    img: reactIcon,
    title: "React",
  },
  {
    img: reactIcon,
    title: "React Native",
  },
  {
    img: nextIcon,
    title: "Next.js",
  },
  {
    img: tailwindIcon,
    title: "Tailwind",
  },
  {
    img: tailwindIcon,
    title: "Nativewind",
  },
  {
    img: supabaseIcon,
    title: "Supabase",
  },

  {
    img: gitIcon,
    title: "Git",
  },
  {
    img: expoIcon,
    title: "Expo",
  },
  {
    img: viteIcon,
    title: "Vite",
  },
  // duplicado

  {
    img: htmlIcon,
    title: "Html",
  },
  {
    img: cssIcon,
    title: "Css",
  },
  {
    img: jsIcon,
    title: "JavaScript",
  },
  {
    img: tsIcon,
    title: "TypeScript",
  },
  {
    img: reactIcon,
    title: "React",
  },
  {
    img: reactIcon,
    title: "React Native",
  },
  {
    img: nextIcon,
    title: "Next.js",
  },
  {
    img: tailwindIcon,
    title: "Tailwind",
  },
  {
    img: tailwindIcon,
    title: "Nativewind",
  },
  {
    img: supabaseIcon,
    title: "Supabase",
  },

  {
    img: gitIcon,
    title: "Git",
  },
  {
    img: expoIcon,
    title: "Expo",
  },
  {
    img: viteIcon,
    title: "Vite",
  },
];

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-20 px-6 md:px-16 lg:px-32 xl:px-64 max-w-6xl mx-auto bg-white pt-[env(safe-area-inset-top)]">
        {/* section 1 - apresentation */}
        <section className="flex flex-col gap-4 h-[88vh] pt-10 justify-center">
          <div className="flex flex-row gap-3 items-center ">
            <div className="relative">
              <ImgCircle img={avatar} alt="Avatar" size="large" />
              <div className="h-3 w-3 bg-green-500 absolute bottom-0.5 right-2 rounded-full border-2 border-white"></div>
            </div>

            <div>
              <h1 className="font-bold text-2xl md:text-3xl">
                Hey, I'm Alex. 🌱
              </h1>
              <p className="text-gray-400 text-sm pt-1 pl-0.5">Madrid, Spain</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 font-sans text-lg md:text-2xl leading-8 md:leading-10 text-gray-800 font-light  not-italic">
            <p>
              I’m a Mobile Developer with a strong focus on software
              architecture and system design, building applications from concept
              to production.
            </p>
            <p>
              I contribute across the full product lifecycle — from early-stage
              ideation and product validation to defining technical
              architecture, designing data models, and implementing
              well-structured features.
            </p>
            {/* <p>
              With a strong interest in software architecture and system design,
              I focus on creating scalable, maintainable systems that balance
              product vision with technical excellence.
            </p> */}
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=34680436647&text&type=phone_number&app_absent=0"
            className="mt-4 text-xl text-white bg-black px-6 py-3 rounded-xl flex items-center justify-center self-start cursor-pointer hover:scale-105 hover:opacity-80 transition gap-2"
          >
            <img className="h-8 w-8 " src={wppIcon} alt={""} />
            Say Hello!
          </a>
        </section>

        <section className="flex flex-col gap-4 w-full">
          <p className="text-gray-400 text-sm">Tools & Stacks</p>
          <div className="relative overflow-hidden w-full py-2 bg-gray-100/60">
            {/* Fade esquerdo */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>

            {/* Fade direito */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden w-full py-2 relative">
              <div className="flex w-max animate-marquee">
                {[...stacks, ...stacks].map((stack, i) => (
                  <Stack key={i} img={stack.img} title={stack.title} />
                ))}
              </div>
            </div>
          </div>
          <LinkCase
            title={"Linkedin"}
            link={"https://www.linkedin.com/in/alexmonteiro-dev/"}
            text={"Check my last updates on"}
            // img={linkedinIcon}
            // bg={true}
          />
          <LinkCase
            title={"GitHub"}
            link={"https://github.com/alexmonteirodev"}
            text={"The greener the better"}
            // img={githubIcon}
          />
          <LinkCase
            title={"@odevgringo"}
            link={
              "https://www.instagram.com/odevgringo?igsh=MXNwZTh6ajBldXcxNQ%3D%3D&utm_source=qr"
            }
            text={"You can see more about me on my instagram"}
            // img={instagramIcon}
          />
        </section>

        {/* section 1 - Mova */}
        <section className="flex flex-col gap-4">
          <AppTitle
            img={movaIcon}
            alt="mimoIcon"
            name={"Mova"}
            link={
              "https://www.instagram.com/movaclub.br?igsh=MWkzNTN3YnRra2xvdA=="
            }
          />

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

          <div className="flex flex-col gap-4 font-sans text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
            <p>
              We’re building something designed to reshape how people manage
              performance, structure routines, and connect within the fitness
              ecosystem. <br /> Mova is coming...
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
          <AppTitle img={mimoIcon} alt="mimoIcon" name={"Mimo"} link={"#"} />

          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={laura} alt="Avatar" size="small" />
            <ImgCircle img={alex} alt="Avatar" size="small" />
            <ImgCircle img={natalia} alt="Avatar" size="small" />
            <ImgCircle img={dhiego} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
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
              className="rounded-xl w-full max-w-2xl"
              src={mimoFirstPageApple}
              alt={"mimoImgs"}
            />
            <p>
              Mimo blends social interaction with practical utility, improving
              the gift-giving experience through personalization and
              organization.
            </p>
            <img
              className="rounded-xl w-full max-w-2xl"
              src={mimoSecondPageApple}
              alt={"mimoImgs"}
            />
          </div>
          <LinkCase />
        </section>

        {/* section 3 - lumio */}
        <section className="flex flex-col gap-4">
          <AppTitle
            img={lumioIcon}
            alt="lumioIcon"
            name={"Lumio"}
            link={
              "https://apps.apple.com/us/app/lumio-bible-devotionals/id6755790168"
            }
          />
          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={laura} alt="Avatar" size="small" />
            <ImgCircle img={alex} alt="Avatar" size="small" />
            <ImgCircle img={natalia} alt="Avatar" size="small" />
            <ImgCircle img={dhiego} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
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
              className="rounded-xl w-full max-w-2xl"
              src={lumioSecondPageApple}
              alt={"mimoImgs"}
            />
          </div>

          <LinkCase link="#" />
        </section>

        {/* section 4 - spinUp */}
        <section className="flex flex-col gap-4">
          <AppTitle
            img={spinupIcon}
            alt="lumioIcon"
            name={"SpinUp"}
            link={"https://gp-schedule.vercel.app"}
          />
          <p className="text-gray-400 text-xs font-mono">2023 - 2024</p>

          <div className="flex flex-row gap-2">
            <ImgCircle img={alex} alt="Avatar" size="small" />
          </div>

          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
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
              className="rounded-xl w-full max-w-2xl"
              src={spinUpImg}
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
          <LinkCase />
        </section>
        <p className="text-gray-400 text-sm pb-5">Last updated: Feb 13, 2026</p>
      </div>
    </>
  );
}

export default App;
