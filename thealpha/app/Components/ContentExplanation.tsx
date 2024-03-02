import React from "react";
import Image from "next/image";
import gym_image from "../../public/gym_image_2.jpg";

export default function ContentExplanation({
  order,
}: {
  order: number;
}): JSX.Element {
  switch (order) {
    case 1:
    case 2:
    case 3:
    case 4:
    default:
      return (
        <>
          <div className="h-2/4 flex flex-row-reverse border-black border-t-8">
          <>
            <div className="w-1/4 h-full flex justify-center items-center">
              <Image
                src={gym_image}
                alt="Sample Image"
                className="h-full"
              ></Image>
            </div>
            <div className="w-3/4 h-full">
              <div className="mt-6 ml-10 mr-4">
                <h3 className="font-bold text-7xl text-left">{Content(order)[0]}</h3>
                <p className="text-left text-5xl">{Content(order)[1]}</p>
              </div>
            </div>
          </>
          </div>
        </>
      );
  }
}

function Content(order: number): [string,string] {
  switch (order) {
    case 1:
      return ["Routines","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi ipsum minima quo, iste commodi quia eveniet veniam."]
    case 2:
      return ["Workout","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi ipsum minima quo, iste commodi quia eveniet veniam."]
    case 3:
      return ["Calories","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi ipsum minima quo, iste commodi quia eveniet veniam."]
    case 4:
      return ["Progress","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi ipsum minima quo, iste commodi quia eveniet veniam."]
    default:
      return ["Progress","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi ipsum minima quo, iste commodi quia eveniet veniam."]
  }
}
