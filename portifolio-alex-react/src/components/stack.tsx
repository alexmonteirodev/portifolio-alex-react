const Stack = ({ img, title }: { img: string; title: string }) => {
  return (
    <span className="mx-8 flex flex-row items-center gap-2">
      <img
        className=" h-5 w-5 transition-transform duration-300 group-hover:rotate-45 text-gray-400"
        src={img}
        alt={""}
      />
      <p className="text-lg md:text-xl ">{title}</p>
    </span>
  );
};

export default Stack;
