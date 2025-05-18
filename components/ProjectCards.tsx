/* eslint-disable @next/next/no-img-element */
"use client";

import { CardContainer, CardItem } from "@/components/ui/3d-card";
import Magicbutton from "@/components/ui/magicbutton";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 place-items-center gap-2">
      {projects.map((project, idx) => (
        <CardContainer key={idx} containerClassName="w-full max-w-md">
          <div className="relative w-80 max-w-md rounded-xl border-2 border-gray-700">
            <GlowingEffect
              glow={true}
              disabled={false}
              spread={400}
              proximity={64}
              inactiveZone={0.01}
              variant="default"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-xl p-6 bg-gray-100 dark:bg-neutral-900 text-center shadow-lg z-10">
              <CardItem translateZ={100}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </CardItem>
              <CardItem
                translateZ={50}
                className="mt-5 text-2xl font-bold text-gray-800 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                translateZ={50}
                className="mt-2 text-sm text-gray-600 dark:text-gray-300"
              >
                {project.tech}
              </CardItem>
              <CardItem translateZ={50} className="mt-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Magicbutton
                    title="Repo Link"
                    icon={<FaGithub />}
                    position="right"
                  />
                </a>
              </CardItem>
            </div>
          </div>
        </CardContainer>
      ))}
    </div>
  );
};

export default ProjectCards;
