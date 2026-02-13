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
      className={`${
        size === "large" ? "h-12 w-12 md:h-16 md:w-16" : "h-7 w-7 md:h-8 md:w-8"
      } rounded-full border border-gray-200 object-cover`}
      src={img}
      alt={alt}
    />
  );
};

export default ImgCircle;
