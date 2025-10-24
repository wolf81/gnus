export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 min-h-full">
      {/* Top Left */}
      <img
        src="/background/top-left.svg"
        alt=""
        className="absolute top-0 left-0"
      />

      {/* Top Right */}
      <img
        src="/background/top-right.svg"
        alt=""
        className="absolute top-0 right-0"
      />

      {/* Bottom Left */}
      <img
        src="/background/bottom-left.svg"
        alt=""
        className="absolute bottom-0 left-0"
      />

      {/* Bottom Right */}
      <img
        src="/background/bottom-right.svg"
        alt=""
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}