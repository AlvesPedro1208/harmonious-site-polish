import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInitialized(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,

      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.35 } },
        },
      },

    particles: {
    number: { value: 210, density: { enable: true, area: 2500 } },

    color: { value: "#60a5fa" }, // azul mais claro

    links: {
        enable: true,
        color: "#60a5fa",
        distance: 160,
        opacity: 0.35,   // ↑ antes 0.15
        width: 1.2,
    },

    move: {
        enable: true,
        speed: 0.8,      // ↑ antes 0.6
        direction: "none",
        outModes: { default: "out" },
    },

    opacity: { value: 0.7 },   // ↑ antes 0.35
    size: { value: { min: 1, max: 3 } }, // ↑ antes 2
    },
    }),
    []
  );

  if (!initialized) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}