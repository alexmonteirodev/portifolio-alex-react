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
        size === "large" ? "h-14 w-14 md:h-18 md:w-18" : "h-7 w-7 md:h-8 md:w-8"
      } rounded-full border border-gray-200 object-cover`}
      src={img}
      alt={alt}
    />
  );
};

export default ImgCircle;
