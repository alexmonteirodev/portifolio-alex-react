// import appleIcon from "../assets/svg/apple-fill.svg";
// import webIcon from "../assets/svg/window-fill.svg";

// const AppTitle = ({
//   img,
//   alt,
//   name,
//   link,
//   showLink = true,
//   buttonText,
//   IsWeb,
// }: {
//   img: string;
//   alt: string;
//   name: string;
//   link: string;
//   showLink?: boolean;
//   buttonText: string;
//   IsWeb?: boolean;
// }) => {
//   return (
//     <div className="sticky top-0 z-20 py-3 md:py-4 bg-white/70 backdrop-blur-sm border-b border-gray-100 -mx-6 px-6 md:mx-0 md:px-0">
//       <div className="flex flex-row gap-2 items-center justify-between md:justify-start">
//         <div className="flex flex-row gap-2 items-center ">
//           <img
//             className="rounded-xl h-10 w-10 border border-gray-200"
//             src={img}
//             alt={alt}
//           />
//           <p className="text-2xl font-bold ">{name}</p>
//         </div>
//         {showLink ? (
//           <a
//             className="flex flex-row items-center gap-2 text-[18px] text-white bg-[#0091FE] px-7 py-2 rounded-full scale-90 md:scale-75 cursor-pointer hover:opacity-90 hover:scale-76 hover:shadow-2xl group transition"
//             target="blank"
//             href={link}
//           >
//             {!IsWeb ? (
//               <img
//                 className="rounded-xl h-5 w-5 transition-transform duration-300"
//                 src={appleIcon}
//                 alt={alt}
//               />
//             ) : (
//               <img
//                 className="rounded-xl h-5 w-5 transition-transform duration-300"
//                 src={webIcon}
//                 alt={alt}
//               />
//             )}
//             <p>{buttonText}</p>
//           </a>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default AppTitle;
import appleIcon from "../assets/svg/apple-fill.svg";
import webIcon from "../assets/svg/window-fill.svg";

const AppTitle = ({
  img,
  alt,
  name,
  link,
  showLink = true,
  buttonText,
  IsWeb,
}: {
  img: string;
  alt: string;
  name: string;
  link: string;
  showLink?: boolean;
  buttonText: string;
  IsWeb?: boolean;
}) => {
  return (
    <div className="sticky top-0 z-20 bg-white/70 backdrop-blur-sm border-b border-gray-100 -mx-6 px-6 md:mx-0 md:px-0 -mt-[env(safe-area-inset-top)] pt-[env(safe-area-inset-top)]">
      <div className="py-3 md:py-4 flex flex-row gap-2 items-center justify-between ">
        <div className="flex flex-row gap-2 items-center ">
          <img
            className="rounded-xl h-10 w-10 border border-gray-200"
            src={img}
            alt={alt}
          />
          <p className="text-2xl font-bold ">{name}</p>
        </div>
        {showLink ? (
          <a
            className="flex flex-row items-center gap-2 text-[18px] text-white bg-[#0091FE] px-7 py-2 rounded-full scale-85 md:scale-75 cursor-pointer hover:opacity-90 hover:scale-76 hover:shadow-2xl group transition"
            target="blank"
            href={link}
          >
            {!IsWeb ? (
              <img
                className="rounded-xl h-5 w-5 transition-transform duration-300"
                src={appleIcon}
                alt={alt}
              />
            ) : (
              <img
                className="rounded-xl h-5 w-5 transition-transform duration-300"
                src={webIcon}
                alt={alt}
              />
            )}
            <p>{buttonText}</p>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AppTitle;
