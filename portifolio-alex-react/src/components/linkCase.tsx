import arrowIcon from "../assets/svg/arrow-right-up-long-line.svg";

const LinkCase = ({ link }: { link?: string }) => {
  return (
    <div>
      <p className="text-gray-400 text-sm">Find out more</p>
      <a
        href={link}
        className="text-lg md:text-xl inline-flex items-center gap-3 cursor-pointer group border border-transparent hover:border-b-gray-200 self-start "
      >
        View Case Study
        <img
          className="h-8 w-8 transition-transform duration-300 group-hover:rotate-45"
          src={arrowIcon}
          alt={""}
        />
      </a>
    </div>
  );
};

export default LinkCase;
