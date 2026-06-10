import mimoIcon from "../assets/svg/mimo-icon.svg";
import lumioIcon from "../assets/svg/lumio-icon.svg";
import movaIcon from "../assets/svg/mova-icon.svg";
import spinupIcon from "../assets/svg/spinup-logo.png";
import alex from "../assets/imgs/landers/alex.png";
import avatar from "../assets/imgs/perfilImgCv.jpg";
import htmlIcon from "../assets/svg/stacks/html5.svg";
import cssIcon from "../assets/svg/stacks/css3.svg";
import jsIcon from "../assets/svg/stacks/javascript.svg";
import tsIcon from "../assets/svg/stacks/typescript.svg";
import playwright from "../assets/svg/stacks/playwright.svg";
import reactIcon from "../assets/svg/stacks/react.svg";
import nextIcon from "../assets/svg/stacks/nextjs.svg";
import tailwindIcon from "../assets/svg/stacks/tailwindcss.svg";
import supabaseIcon from "../assets/svg/stacks/supabase.svg";
import gitIcon from "../assets/svg/stacks/git.svg";
import expoIcon from "../assets/svg/stacks/expo.svg";
import viteIcon from "../assets/svg/stacks/vitejs.svg";
import zustand from "../assets/svg/stacks/zustand.svg";
import tanstack from "../assets/svg/stacks/tanstack.svg";
import claude from "../assets/svg/stacks/claude.svg";
import figma from "../assets/svg/stacks/figma.svg";
import wppIcon from "../assets/svg/send-plane-fill.svg";
import mimo1 from "../assets/imgs/mimo/mimo1.png";
import mimo2 from "../assets/imgs/mimo/mimo2.png";
import mimo3 from "../assets/imgs/mimo/mimo3.png";
import mimo4 from "../assets/imgs/mimo/mimo4.png";
import mimo5 from "../assets/imgs/mimo/mimo5.png";
import mimo6 from "../assets/imgs/mimo/mimo6.png";
import lumio1 from "../assets/imgs/lumio/lumio1.png";
import lumio2 from "../assets/imgs/lumio/lumio2.png";
import lumio3 from "../assets/imgs/lumio/lumio3.png";
import lumio4 from "../assets/imgs/lumio/lumio4.png";
import lumio5 from "../assets/imgs/lumio/lumio5.png";
import lumio6 from "../assets/imgs/lumio/lumio6.png";
import movamob1 from "../assets/imgs/mova/mova-mob-1.png";
import movamob2 from "../assets/imgs/mova/mova-mob-2.png";
import movamob3 from "../assets/imgs/mova/mova-mob-3.png";
import movaweb2 from "../assets/imgs/mova/macbook-mova-2.png";
import spinup1 from "../assets/imgs/spinup/spinup1.png";
import spinup2 from "../assets/imgs/spinup/spinup2.png";
import spinup3 from "../assets/imgs/spinup/spinup3.png";
import ImgCircle from "../components/imgCircle";
import Stack from "../components/stack";
import LinkCase from "../components/linkCase";
import Landers from "../components/Landers";
import AppTitle from "../components/appTitle";
import MockupGroup from "../components/MockupGroup";

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
    img: viteIcon,
    title: "Vite",
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
    img: reactIcon,
    title: "React Native",
  },
  {
    img: expoIcon,
    title: "Expo",
  },
  {
    img: tailwindIcon,
    title: "Nativewind",
  },
  {
    img: zustand,
    title: "Zustand",
  },
  {
    img: tanstack,
    title: "Tanstack",
  },
  {
    img: playwright,
    title: "  Playwright",
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
    img: claude,
    title: "Claude",
  },
  {
    img: figma,
    title: "Figma",
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
    img: viteIcon,
    title: "Vite",
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
    img: reactIcon,
    title: "React Native",
  },
  {
    img: expoIcon,
    title: "Expo",
  },
  {
    img: tailwindIcon,
    title: "Nativewind",
  },
  {
    img: zustand,
    title: "Zustand",
  },
  {
    img: tanstack,
    title: "Tanstack",
  },
  {
    img: playwright,
    title: "  Playwright",
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
    img: claude,
    title: "Claude",
  },
  {
    img: figma,
    title: "Figma",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-20 px-6 md:px-16 lg:px-32 xl:px-64 max-w-6xl mx-auto bg-white ">
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
              <p className="text-gray-400 text-sm pt-1 pl-0.5 font-light">
                Madrid, Spain
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 font-sans text-lg md:text-2xl leading-8 md:leading-10 text-gray-800 font-light  not-italic">
            <p>
              I’m a Mobile Developer with a strong focus on software
              architecture and system design, building applications from concept
              to production.
            </p>
            <p>
              I contribute across the full product lifecycle from early-stage
              ideation and product validation to defining technical
              architecture, designing data models, and implementing
              well-structured features.
            </p>
          </div>
          <a
            href="mailto:alexmonteiro.dev@gmail.com"
            className="mt-4 text-xl text-white bg-black px-6 py-3 rounded-xl flex items-center justify-center self-start cursor-pointer hover:scale-105 hover:opacity-80 transition gap-3"
          >
            <img className="h-6 w-6 " src={wppIcon} alt={""} />
            Say Hello!
          </a>
        </section>

        <section className="flex flex-col gap-4 w-full">
          <p className="text-gray-400 text-sm font-light">Tools & Stacks</p>
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
            alt="movaIcon"
            name={"Mova"}
            link={
              "https://www.instagram.com/movaclub.br?igsh=MWkzNTN3YnRra2xvdA=="
            }
            showLink={false}
            buttonText={"Get"}
          />

          <div className="flex flex-row gap-2">
            <p className="text-gray-400 text-xs font-mono">2026 -</p>
            <p className="text-green-500 text-xs font-mono">now</p>
          </div>

          <Landers />

          <div className="flex flex-col gap-4 font-sans text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
            <p>
              A B2B/B2C SaaS platform developed to transform personal trainer
              management through a complete and integrated fitness ecosystem.
            </p>
            <p>
              The software offers a professional web panel with an intelligent
              dashboard, student management, workout creation, exercise library,
              and a notification system for the personal trainer.
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
              <img className="w-1/1 h-auto" src={movaweb2} alt={"teste"} />
              {/* <img className="w-1/1 h-auto" src={movaweb1} alt={"teste"} /> */}
            </div>
            <p>
              For students, the platform features a connected mobile app that
              provides workout tracking, progress monitoring, and a personalized
              experience.
            </p>
            <MockupGroup img1={movamob1} img2={movamob2} img3={movamob3} />
            <p>
              The goal is to centralize all operations and communications into a
              single modern, scalable, performance oriented solution.
            </p>

            <LinkCase
              title={"Follow us on instagram"}
              link={
                "https://www.instagram.com/movaclub.br?igsh=MWkzNTN3YnRra2xvdA=="
              }
            />
          </div>
        </section>

        {/* section 2 - mimo */}
        <section className="flex flex-col gap-4">
          <AppTitle
            img={mimoIcon}
            alt="mimoIcon"
            name={"Mimo"}
            link={
              "https://apps.apple.com/es/app/mimo-birthdays-wishlists/id6755482120?l=en-GB"
            }
            buttonText={"Get"}
          />

          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <Landers />

          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
            <p>
              Mimo is a social app focused on birthdays and gift planning. Users
              create personal profiles including preferences such as clothing
              size, shoe size, favorite colors, and music style making gift
              selection easier and more thoughtful.
            </p>
            <MockupGroup img1={mimo1} img2={mimo2} img3={mimo3} />
            {/* <img
              className="rounded-xs w-full max-w-2xl"
              src={mimoFirstPageApple}
              alt={"mimoImgs"}
            /> */}
            <p>
              The app includes birthday reminders to prevent missed dates and a
              post system where users can share gift ideas they would like to
              receive, similar to a social feed.
            </p>
            <p>
              Mimo blends social interaction with practical utility, improving
              the gift-giving experience through personalization and
              organization.
            </p>
            <MockupGroup img1={mimo4} img2={mimo5} img3={mimo6} />
            {/* <img
              className="rounded-xs w-full max-w-2xl"
              src={mimoSecondPageApple}
              alt={"mimoImgs"}
            /> */}
          </div>
          {/* <LinkCase /> */}
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
            buttonText={"Get"}
          />
          <p className="text-gray-400 text-xs font-mono">2024 - 2025</p>

          <Landers />

          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
            <p>
              Lumio is a daily devotional app designed to help users connect
              with God through their emotions. By selecting their current mood,
              users receive personalized Bible verses and chapters that resonate
              with how they feel, creating a bridge between emotions and faith.
            </p>
            <MockupGroup img1={lumio1} img2={lumio2} img3={lumio3} />
            {/* <img
              className="rounded-xs"
              src={lumioFirstPageApple}
              alt={"mimoImgs"}
            /> */}
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
            <MockupGroup img1={lumio4} img2={lumio5} img3={lumio6} />

            {/* <img
              className="rounded-xs w-full max-w-2xl"
              src={lumioSecondPageApple}
              alt={"mimoImgs"}
            /> */}
          </div>

          {/* <LinkCase link="https://apps.apple.com/us/app/lumio-bible-devotionals/id6755790168" /> */}
        </section>

        {/* section 4 - spinUp */}
        <section className="flex flex-col gap-4">
          <AppTitle
            img={spinupIcon}
            alt="lumioIcon"
            name={"SpinUp"}
            link={"https://gp-schedule.vercel.app"}
            buttonText={"Web App"}
            IsWeb={true}
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

            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />
            {/* <img
              className="rounded-xs w-full max-w-2xl"
              src={spinUpImg}
              alt={"mimoImgs"}
            /> */}

            <p>
              That’s how SpinUp was born a web mobile friendly scheduling tool
              focused on clarity, speed, and usability. It allows users to
              quickly add and visualize shifts in a clean calendar interface,
              making coordination simpler and more efficient.
            </p>
          </div>
          <LinkCase link="/spinup" route={true} />
        </section>
        <p className="text-gray-300 text-sm pb-5 font-light">
          Last updated: May 29, 2026
        </p>
      </div>
    </>
  );
}
