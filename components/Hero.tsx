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
        <BackgroundBeamsWithCollision className="bg-transparent absolute top-0 left-0 w-full min-h-screen flex flex-col items-center justify-center px-4 text-center z-20">
          <div className="max-w-3xl w-full px-4 space-y-4">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white font-sans tracking-tight">
              Hello! My Name is Wahyu Isnantia
            </h2>

            <TextGenerateEffect
              className="text-center"
              words="And I'm a Mobile & Web Developer"
            />

            <div className="flex justify-center">
              <a href="#projects">
                <Magicbutton
                  title="Show My Work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-black dark:text-white max-w-80">
              A Web Portfolio with NextJS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
