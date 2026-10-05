export const LEGEND_ITEMS = [
{
label: "Counseling Sessions",
color: "bg-chart-purple",
},
{
label: "Mood Check-ins",
color: "bg-chart-green",
},
{
label: "Journal Entries",
color: "bg-mood-low",
},
{
label: "Wellness Activities",
color: "bg-chart-guide",
},
{
label: "Milestones",
color: "bg-chart-green-dark",
},
];

const JourneyLegend = () => {
return (
<div className=" bg-mood-low-bg border border-border-subtle rounded-2xl p-5 w-[250px] " >
<h3 className=" font-semibold text-text-primary mb-5 " >
Journey
</h3>

  <div className="space-y-4">
    {LEGEND_ITEMS.map((item) => (
      <div
        key={item.label}
        className="
          flex
          items-center
          gap-3
          text-sm
          text-text-secondary
        "
      >
        <span
          className={`
            w-3
            h-3
            rounded-full
            ${item.color}
          `}
        />

        <span>{item.label}</span>
      </div>
    ))}
  </div>
</div>


);
};

export default JourneyLegend;