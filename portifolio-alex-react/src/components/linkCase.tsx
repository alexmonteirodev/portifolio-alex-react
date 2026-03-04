// import arrowIcon from "../assets/svg/arrow-right-up-long-line.svg";

// const LinkCase = ({
//   link,
//   title,
//   text,
//   img,
//   bg,
// }: {
//   link?: string;
//   img?: string;
//   title?: string;
//   text?: string;
//   bg?: boolean;
// }) => {
//   return (
//     <div className={`${img ? "flex flex-row gap-2 items-center" : ""}`}>
//       {img ? (
//         <img
//           className={`h-8 w-8 border border-gray-200 rounded-full ${bg ? "bg-blue-600" : ""}`}
//           src={img}
//           alt={""}
//         />
//       ) : (
//         ""
//       )}
//       <div>
//         <p className="text-gray-400 text-sm">{text ? text : "Find out more"}</p>
//         {
//           <a
//             href={link}
//             className="text-lg md:text-xl inline-flex items-center gap-3 cursor-pointer group border border-transparent hover:border-b-gray-200 self-star"
//           >
//             {title ? title : "View Case Study"}
//             <img
//               className="h-8 w-8 transition-transform duration-300 group-hover:rotate-45 text-black"
//               src={arrowIcon}
//               alt={""}
//             />
//           </a>
//         }
//       </div>
//     </div>
//   );
// };

// export default LinkCase;

import { Link } from "react-router-dom";
import arrowIcon from "../assets/svg/arrow-right-up-long-line.svg";

const linkClass =
  "text-lg md:text-xl inline-flex items-center gap-3 cursor-pointer group border border-transparent hover:border-b-gray-200 self-start";

const LinkContent = ({ title }: { title?: string }) => (
  <>
    {title ?? "View Case Study"}
    <img
      className="h-8 w-8 transition-transform duration-300 group-hover:rotate-45 text-black"
      src={arrowIcon}
      alt=""
    />
  </>
);

const LinkCase = ({
  link = "#",
  title,
  text,
  img,
  bg,
  route = false,
}: {
  link?: string;
  img?: string;
  title?: string;
  text?: string;
  bg?: boolean;
  route?: boolean;
}) => {
  return (
    <div className={img ? "flex flex-row gap-2 items-center" : ""}>
      {img && (
        <img
          className={`h-8 w-8 border border-gray-200 rounded-full ${bg ? "bg-blue-600" : ""}`}
          src={img}
          alt=""
        />
      )}
      <div>
        <p className="text-gray-400 text-sm">{text ?? "Find out more"}</p>
        {route ? (
          <Link to={link} className={linkClass}>
            <LinkContent title={title} />
          </Link>
        ) : (
          <a href={link} className={linkClass} target="blank">
            <LinkContent title={title} />
          </a>
        )}
      </div>
    </div>
  );
};

export default LinkCase;
