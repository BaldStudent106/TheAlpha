import { Metadata } from "next";
import Image from "next/image";
import gym_image from "public/gym_image_3.jpg";

export const metadata: Metadata = {
  title: "The Alpha",
  description: "The Login Page of This Website",
};

export default function registerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Image
        src={gym_image}
        alt="This is a photo showing two ppl in a gym"
        priority
        placeholder="blur"
        layout="fill"
        className="h-full w-full -z-10 shrink-0 grow"
      ></Image>
      <div className="absolute w-screen h-screen flex justify-center items-center top-0 left-0">
        {children}
      </div>
    </>
  );
}
