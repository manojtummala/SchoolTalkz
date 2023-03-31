import { useState, useEffect } from "react";
import { labelData } from "@/data";
import Input from "@/ui/Input";

type LabelProp = { id: string; name: string; _count?: any };
const RenderLabel = ({ id, name, _count }: LabelProp) => {
  return (
    <div
      key={id}
      className="w-full px-10 py-4 flex justify-between items-center "
    >
      <div>{name}</div>
      <div>{_count.related_posts || ""}</div>
    </div>
  );
};

const Labels = () => {
  const [labels, setLabels] = useState<typeof labelData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(`fetching start`);
    fetchData();
    console.log(`fetching done`);
    setLoading(false);
    console.log(`loading false`);
  }, []);

  const fetchData = (type = "recent") => {
    setInterval(() => setLabels(labelData), 4000);
  };
  return (
    <>
      {loading === false ? (
        <div>
          <Input actionText=""/>
          <div className="bg-light-bg-blue divide-y-2 m-10">
            {labels?.map((label: LabelProp) => {
              return <RenderLabel {...label} key={label.id} />;
            })}
          </div>
        </div>
      ) : (
        <div className="bg-light-bg-blue ">Loading...</div>
      )}
    </>
  );
};

export default Labels;
