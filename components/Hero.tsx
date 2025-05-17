import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Magicbutton from "./ui/magicbutton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 min-h-screen max-h-screen h-screen">
      <div className="h-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left80 h-[80vh] w-[50vw]" fill="cyan" />
        <BackgroundBeamsWithCollision className="bg-transparent absolute top-0 left-0 w-full h-full flex-col">
          <h2 className="text-2xl relative z-20 md:text-5xl lg:text-6xl font-bold text-center text-black dark:text-white font-sans tracking-tight pt-10">
            Hello! My Name is Wahyu Isnantia{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"></div>
          </h2>
          <TextGenerateEffect
            className="text-center"
            words="And I'm a Mobile & Web Developer"
          />
          <a href="" className="pt-5">
            <Magicbutton 
              title="Show My Work"
              icon={<FaLocationArrow/>}
              position="right"
            />
          </a>
        </BackgroundBeamsWithCollision>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              A Web Portfolio with NextJS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
