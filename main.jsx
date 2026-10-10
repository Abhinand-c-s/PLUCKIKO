import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <main className="page">
      <h1>{revealed && "Thorak kunne."}</h1>

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
            <span className="back-small">— hahahhahhaha</span>
          </span>
        </span>
      </button>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
