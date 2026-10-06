type BreathingOrbProps = {
  isPlaying: boolean;
};

const petals = [
  {
    className: "-translate-x-[40px]",
    opacity: "bg-chart-muted/25",
  },
  {
    className: "translate-x-[40px]",
    opacity: "bg-chart-muted/25",
  },
  {
    className: "-translate-y-[40px]",
    opacity: "bg-text-secondary/25",
  },
  {
    className: "translate-y-[40px]",
    opacity: "bg-text-secondary/25",
  },
  {
    className: "-translate-x-[29px] -translate-y-[29px]",
    opacity: "bg-icon-secondary/25",
  },
  {
    className: "translate-x-[29px] -translate-y-[29px]",
    opacity: "bg-icon-secondary/25",
  },
  {
    className: "-translate-x-[29px] translate-y-[29px]",
    opacity: "bg-icon-secondary/25",
  },
  {
    className: "translate-x-[29px] translate-y-[29px]",
    opacity: "bg-icon-secondary/25",
  },
];

export function BreathingVisualizer({ isPlaying }: BreathingOrbProps) {
  return (
    <div className="flex h-[270px] w-[270px] items-center justify-center">
      <div
        className={`relative flex h-[200px] w-[200px] items-center justify-center ${
          isPlaying ? "animate-breathe" : ""
        }`}
      >
        {/* Outer ghost petals */}
        <div className="absolute h-[190px] w-[190px] rounded-full bg-text-secondary/10" />

        <div className="absolute h-[155px] w-[155px] rounded-full bg-text-secondary/12" />

        {/* Main petals */}
        {petals.map((petal, index) => (
          <div
            key={index}
            className={`absolute h-[105px] w-[105px] rounded-full backdrop-blur-[0.5px] ${petal.opacity} ${petal.className}`}
          />
        ))}

        {/* Inner layers */}
        <div className="absolute h-[105px] w-[105px] rounded-full bg-icon-secondary/25" />

        <div className="absolute h-[72px] w-[72px] rounded-full bg-brand-primary/35" />

        <div className="absolute h-[44px] w-[44px] rounded-full bg-chart-green-dark/90" />
      </div>
    </div>
  );
}
