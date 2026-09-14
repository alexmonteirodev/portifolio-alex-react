import { useId } from "react";
import GooFilter from "./GooFilter";
import "./goo-shared.css";
import "./GooMerge.css";

// Inverse of GooPill: label and icon ball are both visible at rest, sitting
// 8px apart. On hover the ball slides into the label and the goo layer fuses
// them into a single pill; leaving pulls them apart again.
const GooMerge = ({
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
      className="goo-merge scale-110"
      target={external ? "blank" : undefined}
    >
      <GooFilter id={filterId} />

      <span
        className="goo-layer"
        aria-hidden="true"
        style={{ filter: `url(#${filterId})` }}
      >
        <span className="goo-layer__cap" />
        <span className="goo-layer__ball" />
      </span>

      <span className="goo-label">{label}</span>
      <span className="goo-ball" aria-hidden="true">
        <img src={icon} alt="" />
      </span>
    </a>
  );
};

export default GooMerge;
