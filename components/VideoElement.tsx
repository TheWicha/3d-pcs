export default function VideoElement() {
  return (
    <video
      id="hero-video"
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      poster="/video/poster.jpg"
      className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.85] transition-opacity duration-700 ease-in-out opacity-100"
    >
      <source src="/video/animacja.webm" type="video/webm" />
      <source src="/video/freecompress-animacja.mp4" type="video/mp4" />
    </video>
  );
}
