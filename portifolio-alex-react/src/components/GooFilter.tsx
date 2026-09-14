// SVG "goo" filter shared by the goo buttons: blur the shapes, then crank the
// alpha contrast so nearby blobs fuse into one liquid outline.
const GooFilter = ({ id }: { id: string }) => (
  <svg width="0" height="0" aria-hidden="true" focusable="false">
    <defs>
      <filter id={id} x="-30%" y="-60%" width="160%" height="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -13"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
);

export default GooFilter;
