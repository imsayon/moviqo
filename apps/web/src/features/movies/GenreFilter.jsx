export function GenreFilter({ genres, activeGenre, onSelect }) {
  return (
    <div className="filter-row" role="tablist" aria-label="Movie genres">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`chip ${genre === activeGenre ? "active" : ""}`}
          type="button"
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

