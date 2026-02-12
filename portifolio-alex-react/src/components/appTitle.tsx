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
    <div className="flex flex-row gap-3 items-center ">
      <img
        className="rounded-xl h-10 w-10 border border-gray-200"
        src={img}
        alt={alt}
      />
      <p className="text-2xl font-bold ">{name}</p>
      <a
        className=" text-gray-400 border border-gray-200 bg-gray-100 px-4 py-2 rounded-full scale-75 cursor-pointer hover:opacity-80 hover:text-gray-600"
        href={link}
      >
        Go to app
      </a>
    </div>
  );
};

export default AppTitle;
