import CounselorCard, { Counselor } from "./counselor-card";

interface Props {
  items: Counselor[];
}

const CounselorList = ({ items }: Props) => {
  return (
    <div
      className="
mt-6
space-y-5
"
    >
      {items.map((item) => (
        <CounselorCard key={item.id} counselor={item} />
      ))}
    </div>
  );
};

export default CounselorList;
