import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";

const SSR = typeof window === undefined;

const useParticles = () => {
  useEffect(() => {
    if (!SSR) {
      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
          opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 2, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
          line_linked: { enable: true, distance: 70, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);
};

export default function Home() {
  useParticles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="text/javascript" src="/particles.js"></script>
      </Head>

      <div style={{margin: '44px auto', maxWidth: '932px', padding: '0 8px'}}>
        <div style={{backgroundColor: '#00467F', position: 'relative', padding: '8px 0'}}>
          <div style={{backgroundColor: '#EF3D42', position: 'absolute', top: '0px', bottom: '0px', width: '4px'}}></div>
          <div style={{backgroundColor: '#FFD24E', position: 'absolute', top: '0px', bottom: '0px', left: '4px', width: '4px'}}></div>
          <div style={{marginLeft: '24px'}} className="hero">
            Build. Learn. Experiment.
          </div>
        </div>
        <h3>Bull City Blockchain is a group of curious technologists adding value to our world with bleeding edge technology.</h3>
      </div>
      <div style={{position: 'fixed', top: 0, right: 0, left: 0, bottom: 0}} id="particles-js"></div>
    </>
  );
}
