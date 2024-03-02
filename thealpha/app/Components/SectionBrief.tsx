import react from "react";
import gym_icon from "../../public/Icon_1.png";
import Image from "next/image";

export default function SectionBrief({
  order,
}: {
  order: number;
}): JSX.Element {
  return (
    <div className="w-1/5 h-full">
      <div className="flex flex-col h-full w-full">
        <div className="h-1/2 w-full flex justify-center items-center">
          {TopicbyOrder(order)}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-bold lg">{ContentbyOrder(order)[0]}</h4>
          <p className="font-medium lg">{ContentbyOrder(order)[1]}</p>
        </div>
      </div>
    </div>
  );
}

function TopicbyOrder(order: number): JSX.Element {
  switch (order) {
    case 1:
    case 2:
    case 3:
    case 4:
    default:
      return (
        <>
          <Image
            src={gym_icon}
            alt="Sample Icon"
            className="h-3/5 w-auto"
          ></Image>
        </>
      );
  }
}

function ContentbyOrder(order: number): [string, string] {
  switch (order) {
    case 1:
      return ["Routines", "Create Workout Routines"];
    case 2:
      return ["Workout", "Checkout Different Workouts"];
    case 3:
      return ["Calories", "Manage Your Daily Calories"];
    case 4:
      return ["Progress", "Track Your Progress"];
    default:
      return ["Routines", "Create Workout Routines"];
  }
}
