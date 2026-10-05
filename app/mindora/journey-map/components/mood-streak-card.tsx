export const moodPoints = [
{
day: "M",
value: 20,
},
{
day: "T",
value: 35,
},
{
day: "W",
value: 50,
},
{
day: "T",
value: 60,
},
{
day: "F",
value: 45,
},
{
day: "S",
value: 70,
},
{
day: "S",
value: 85,
},
];

const MoodStreakCard = () => {
return (
<div className=" rounded-2xl border border-border-subtle bg-background p-5 w-[250px] " >
<div className="flex items-start gap-3">
<div className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mood-neutral-bg " >
<span className="text-lg">🔥</span>
</div>

    <div>
      <h3 className="font-semibold text-text-primary">
        You're on a roll!
      </h3>

      <p className="mt-1 text-xs leading-5 text-text-secondary">
        20 days of consistent check-ins
      </p>
    </div>
  </div>

  <div className="mt-6 flex h-24 items-end justify-between gap-2">
    {moodPoints.map((point, index) => (
      <div
        key={`${point.day}-${index}`}
        className="
          flex
          h-full
          flex-1
          flex-col
          items-center
          justify-end
        "
      >
        <div className="flex h-[70px] w-full items-end justify-center">
          <div
            className="
              w-2
              rounded-full
              bg-chart-green
              transition-all
              duration-300
              hover:bg-brand-dark
            "
            style={{
              height: `${point.value}%`,
            }}
          />
        </div>

        <span
          className="
            mt-2
            text-[10px]
            font-medium
            text-text-secondary
          "
        >
          {point.day}
        </span>
      </div>
    ))}
  </div>
</div>


);
};

export default MoodStreakCard;