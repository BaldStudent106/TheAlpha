import Image from "next/image";
import gym_image from "../public/gym_image_1.jpg";
import SectionBrief from "./Components/SectionBrief";
import ContentExplanation from "./Components/ContentExplanation";

export default function Home() {
  return (
    <div className="overflow-y-auto flex flex-col ">
      <div className="h-screen">
        <div className="h-3/5 relative">
          <div className="z-20 flex justify-evenly flex-col items-center h-full"> 
            <div className="w-3/5">
              <h2 className="z-10 text-white font-extrabold text-5xl text-wrap text-center leading-loose">Do you Want To Become A Better Version Of Yourself?</h2>
            </div>
            <div>
              <h3 className="z-10 text-white font-bold text-4xl">Use Alpha To Become 1% Better Each Day</h3>
            </div>
            <p className="font-bold z-20 bg-green-800 rounded-3xl text-white p-4">Log In / Register</p>
          </div>
          <Image
            src={gym_image}
            alt="This is a photo showing two ppl in a gym"
            priority
            placeholder="blur"
            layout="fill"
            className="h-full w-full -z-10 shrink-0 grow"
          ></Image>
        </div>
        <div className="h-2/5 bg-white justify-center w-screen flex">
          <div className="justify-between w-4/5 flex">
            <SectionBrief order={1}></SectionBrief>
            <SectionBrief order={2}></SectionBrief>
            <SectionBrief order={3}></SectionBrief>
            <SectionBrief order={4}></SectionBrief>
          </div>
        </div>
      </div>
      <div className="h-screen ">
        <ContentExplanation order={1}></ContentExplanation>
        <ContentExplanation order={2}></ContentExplanation>
      </div>
      <div className="h-screen ">
        <ContentExplanation order={3}></ContentExplanation>
        <ContentExplanation order={4}></ContentExplanation>
      </div>
      <div className="h-[30vh] border-t-8 border-black"></div>
    </div>
  );
}
