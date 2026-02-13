import arrowIcon from "../assets/svg/arrow-right-up-long-line.svg";

const AppTitle = ({
  img,
  alt,
  name,
  link,
}: {
  img: string;
  alt: string;
  name: string;
  link: string;
}) => {
  return (
    <div className="sticky top-0 z-20 py-3 md:py-4 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="flex flex-row gap-2 items-center ">
        <img
          className="rounded-xl h-10 w-10 border border-gray-200"
          src={img}
          alt={alt}
        />
        <p className="text-2xl font-bold ">{name}</p>
        <div className="flex flex-row items-center gap-2 text-gray-400 border border-gray-200 bg-gray-100 px-3 py-2 rounded-full scale-75 cursor-pointer hover:opacity-80 hover:text-gray-600 group">
          <a href={link}>Check out</a>
          <img
            className="rounded-xl h-5 w-5 border border-gray-200 opacity-30 transition-transform duration-300 group-hover:rotate-45 text-gray-400"
            src={arrowIcon}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default AppTitle;
