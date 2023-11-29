import { FC } from "react";

interface Props {
  data: {
    icon: string;
    data: string;
    description: string;
  };
}

const DataOverView: FC<Props> = ({ data }) => {
  return (
    <div className="w-41 flex flex-col gap-2 items-center md:max-w-xs">
      <img
        src={data.icon}
        alt="icon"
        className="h-9 w-9 md:w-14 md:h-14 self-start"
      />
      <p className="text-6xl md:text-8xl font-bold">{data.data}</p>
      <p className="text-base md:text-2xl text-gray">{data.description}</p>
    </div>
  );
};

export default DataOverView;
