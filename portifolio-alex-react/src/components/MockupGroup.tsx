const MockupGroup = ({
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
    <div className="flex flex-row items-center justify-center gap-3">
      <img className="w-full max-w-2xl h-auto" src={img1} alt={alt} />
      <img className="w-full max-w-2xl h-auto" src={img2} alt={alt} />
      <img className="w-full max-w-2xl h-auto" src={img3} alt={alt} />
    </div>
  );
};

export default MockupGroup;
