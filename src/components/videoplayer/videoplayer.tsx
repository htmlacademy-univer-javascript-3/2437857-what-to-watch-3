type VideoPlayerProps = {
  src: string;
  poster: string;
  muted?: boolean;
};

function VideoPlayer({ src, poster, muted }: VideoPlayerProps) {
  return (
    <video src={src} poster={poster} height="175" muted={muted} autoPlay />
  );
}

export default VideoPlayer;
