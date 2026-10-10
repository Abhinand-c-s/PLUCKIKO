import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />
      <nav className="topbar">
        <span className="brand-mark">✳</span>
        <span>A LITTLE SOMETHING</span>
      </nav>

      <section className="content">
        <p className="eyebrow">{revealed ? "open ts now!"}</p>
        <h1>{revealed ? "OMBILE vitto"}</h1>
        <p className="subtitle">
          {revealed
            ? "-_-."}
        </p>

        <button
          className={`flip-card ${revealed ? "is-flipped" : ""}`}
          onClick={() => setRevealed((value) => !value)}
          aria-expanded={revealed}
          aria-label={revealed ? "Hide the message" : "Reveal the message"}
        >
          <span className="card-inner">
            <span className="card-face card-front">
              <span className="sparkle sparkle-one">✦</span>
              <span className="card-icon">?</span>
              <span className="card-prompt">TAP TO REVEAL</span>
              <span className="sparkle sparkle-two">✧</span>
            </span>
            <span className="card-face card-back">
              <span className="back-label">A NOTE FOR YOU</span>
              <span className="message">OMBIKKO<br />-With hate abhi. ✨</span>
              <span className="back-small">— a little reminder</span>
            </span>
          </span>
        </button>

        <button className="text-button" onClick={() => setRevealed((value) => !value)}>
          {revealed ? "Close the note ↺" : "Open the note ↗"}
        </button>
        <p className="hint">{revealed ? "Psst… you can flip it back."}</p>
      </section>

    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
