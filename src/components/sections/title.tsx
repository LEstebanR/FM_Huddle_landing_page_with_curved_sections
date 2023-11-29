import { FC } from "react";
import Button from "../button";
import DataOverView from "../data-overview";

const Data = [
  {
    icon: "/public/images/icon-communities.svg",
    data: "1.4k+",
    description: "Communities Formed",
  },
  {
    icon: "/public/images/icon-messages.svg",
    data: "2.7m+",
    description: "Messages Sent",
  },
];

const Title: FC = () => {
  return (
    <section className=" w-full text-center flex flex-col gap-6 items-center ">
      <h2 className="text-2xl md:text-5xl font-bold font-Headers">
        Build The Community Your Fans Will Love
      </h2>
      <p className="text-sm md:text-xl md:w-5/12">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button size="large">Get Started For Free</Button>
      <div className="w-full flex flex-col items-center gap-4">
        <img src="/images/screen-mockups.svg" alt="screen mockups" />
        <div className="grid md:grid-cols-2 px-16 gap-8 w-full">
          {Data.map((data) => {
            return (
              <div className="col-span-1 justify-items-center">
                <DataOverView data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Title;
