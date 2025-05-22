import Image from "next/image";
import { aboutMeData } from "@/data/aboutme";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function AboutMeBento() {
  const { description, techStack, contact } = aboutMeData;

  const sections = [description, techStack, contact];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Foto gede kiri */}
      <div className="relative dark:bg-black bg-white rounded-xl p-5 flex items-center justify-center shadow-lg backdrop-blur-sm h-full">
        <GlowingEffect
          glow={true}
          disabled={false}
          spread={400}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant="default"
        />
        <Image
          src="/Profile.jpg"
          alt="Foto Wahyu"
          width={400}
          height={400}
          className="rounded-xl object-cover shadow-lg z-10"
        />
      </div>

      {/* Kolom kanan */}
      <div className="flex flex-col gap-4 h-full justify-center">
        {sections.map((section, i) => (
          <div
            key={i}
            className="relative dark:bg-black bg-white rounded-xl p-4 shadow-lg backdrop-blur-sm flex-1"
          >
            <GlowingEffect
              glow={true}
              disabled={false}
              spread={300}
              proximity={64}
              inactiveZone={0.01}
              variant="default"
            />
            <div className="relative z-10 ">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-1">
                {section.title}
              </h3>
              {"text" in section && (
                <p className="text-l text-justify text-gray-700 dark:text-gray-300">
                  {section.text}
                </p>
              )}
              {"items" in section && (
                <ul className="text-l list-disc list-inside text-gray-700 dark:text-gray-300">
                  {section.items.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {"lines" in section && (
                <p className="text-l text-gray-700 dark:text-gray-300">
                  {section.lines.map((line: string, idx: number) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
