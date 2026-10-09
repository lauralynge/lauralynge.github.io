import { useEffect, useRef } from "react";

// Video der først hentes, når den nærmer sig skærmen, og pauser uden for skærmen
export default function LazyVideo({ src }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Sæt kilden første gang, videoen kommer tæt på
          if (!video.getAttribute("src")) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "300px" }, // start hentningen lidt før den er synlig
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return <video ref={ref} loop muted playsInline preload="none" />;
}
