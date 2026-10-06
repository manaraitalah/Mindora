import { Breathing } from "./components/breathing";

const activityComponents = {
  breathing: Breathing,
};

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const Activity = activityComponents[id as keyof typeof activityComponents];

  if (!Activity) {
    return <div>Activity not found</div>;
  }

  return <Activity />;
};

export default Page;
