import { FC } from "react";
import Button from "../button";

const Title: FC = () => {
  return (
    <section className=" w-full text-center flex flex-col gap-6 items-center ">
      <h2 className="text-2xl font-bold font-Headers">
        Build The Community Your Fans Will Love
      </h2>
      <p className="text-sm">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button size="large">Get Started For Free</Button>
    </section>
  );
};

export default Title;
