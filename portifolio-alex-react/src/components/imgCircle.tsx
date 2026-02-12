const ImgCircle = ({
  img,
  alt,
  size,
}: {
  img: string;
  alt: string;
  size: "large" | "small";
}) => {
  return (
    <img
      className={`${size === "large" ? "h-15 w-15" : "h-8 w-8"} rounded-full border border-gray-200`}
      src={img}
      alt={alt}
    />
  );
};

export default ImgCircle;
