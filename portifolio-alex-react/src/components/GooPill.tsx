import { useId } from "react";
import GooFilter from "./GooFilter";
import "./goo-shared.css";
import "./GooPill.css";

// "Goo" pill button: a round icon button that, on hover, liquid-morphs a label
// pill out of it. The blurred `.goo-layer` runs through an SVG filter that
// fuses the two shapes; the sharp `.goo-ball` / `.goo-label` sit on top.
const GooPill = ({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}) => {
  const filterId = useId();

  return (
    <a
      href={href}
      className="goo-pill"
      aria-label={label}
      target={external ? "blank" : undefined}
    >
      <GooFilter id={filterId} />

      <span
        className="goo-layer"
        aria-hidden="true"
        style={{ filter: `url(#${filterId})` }}
      >
        <span className="goo-layer__ball" />
        <span className="goo-layer__cap" />
      </span>

      <span className="goo-ball" aria-hidden="true">
        <img src={icon} alt="" />
      </span>
      <span className="goo-label">{label}</span>
    </a>
  );
};

export default GooPill;
