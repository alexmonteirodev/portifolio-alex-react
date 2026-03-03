import arrowIcon from "../assets/svg/arrow-right-up-long-line.svg";

const LinkBackHome = ({
  link,
  title,
  text,
  img,
  bg,
}: {
  link?: string;
  img?: string;
  title?: string;
  text?: string;
  bg?: boolean;
}) => {
  return (
    <div className={`${img ? "flex flex-row gap-2 items-center" : ""}`}>
      {img ? (
        <img
          className={`h-8 w-8 border border-gray-200 rounded-full ${bg ? "bg-blue-600" : ""}`}
          src={img}
          alt={""}
        />
      ) : (
        ""
      )}
      <div>
        <p className="text-gray-400 text-sm ">
          {text ? text : "Find out more"}
        </p>
        <a
          href={link}
          className="text-lg md:text-xl inline-flex items-center gap-3 cursor-pointer group border border-transparent hover:border-b-gray-200 self-star"
        >
          <img
            className="h-8 w-8 transition-transform duration-300 rotate-225 group-hover:rotate-270 text-black"
            src={arrowIcon}
            alt={""}
          />
          {title ? title : "Back to home"}
        </a>
      </div>
    </div>
  );
};

export default LinkBackHome;
