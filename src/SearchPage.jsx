import React, { useState } from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    const res = await fetch("http://localhost:8000/search-and-summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="search-wrapper">
      <h2 className="section-title">Semantic Search</h2>
      <div className="search-bar">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask your question..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {results && (
        <div className="card">
          <h3 className="sub-title">AI Summary</h3>
          <p>{results.summary}</p>
          {results.matched_notes.map((note) => (
            <div key={note._id} className="sub-card">
              <div className="date-badge">{note.date}</div>
              <strong>{note.title}</strong>
              <p>{note.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
