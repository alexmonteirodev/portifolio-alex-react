const MockupWebGroup = ({
  img1,
  img2,
  img3,
}: {
  img1: string;
  img2: string;
  img3: string;
}) => {
  const alt = "mockup img";
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <img
        className="w-1/3 h-auto rounded-4xl border-2 border-[#B8AFE6]"
        src={img1}
        alt={alt}
      />
      <img className="w-1/3 h-auto" src={img2} alt={alt} />
      <img className="w-1/3 h-auto" src={img3} alt={alt} />
    </div>
  );
};
export default MockupWebGroup;
