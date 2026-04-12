export function PosterArt({ movie, size = "card" }) {
  const emojiSize = size === "detail" ? "5rem" : size === "mini" ? "1.6rem" : "3.25rem";

  return (
    <div className={`poster-art poster-${size}`} style={{ background: movie.poster.background }}>
      <span style={{ fontSize: emojiSize }}>{movie.poster.emoji}</span>
      <span
        className="poster-glow"
        style={{
          background: `radial-gradient(circle at 50% 110%, ${movie.poster.glow} 0%, transparent 68%)`
        }}
      />
    </div>
  );
}

