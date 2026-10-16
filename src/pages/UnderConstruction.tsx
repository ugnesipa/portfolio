
import { useEffect, useState } from "react";
import "./UnderConstruction.css";

const codeLines = [
  "const portfolio = {",
  '  creator: "Ugne",',
  '  passion: "creative coding",',
  '  occupation: "software developer",',
  '  status: "building something fun"',
  "};",
  "",
  "portfolio.launch();",
];

function UnderConstruction() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((current) =>
        current >= codeLines.length ? 0 : current + 1
      );
    }, 650);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="uc-page">
      <div className="uc-noise" aria-hidden="true" />
      <div className="uc-glow uc-glow-one" aria-hidden="true" />
      <div className="uc-glow uc-glow-two" aria-hidden="true" />

      <nav className="uc-nav">
        <a className="uc-logo" href="#" aria-label="Ugne home">
          <span className="uc-logo-bracket">{"<"}</span>
          ugne<span className="uc-logo-bracket">.dev</span>
          <span className="uc-logo-bracket">{"/>"}</span>
        </a>

        <span className="uc-status">
          <span className="uc-status-dot" />
          CURRENTLY CREATING
        </span>
      </nav>

      <section className="uc-content">
        <div className="uc-copy">
          <div className="uc-pill">
            <span className="uc-sparkle">✳</span>
            A LITTLE MAGIC IS LOADING
          </div>

          <h1 className="uc-title">
            Building
            <br />
            something
            <br />
            <span className="uc-title-accent">
              extraordinary<span className="uc-period">.</span>
            </span>
          </h1>

          <p className="uc-description">
            Writing code, breaking things, fixing bugs, and
            creating something worth the wait.
          </p>

          <div className="uc-progress">
            <div className="uc-progress-top">
              <span>PORTFOLIO.EXE</span>
              <span className="uc-progress-percent">IN PROGRESS</span>
            </div>

            <div
              className="uc-progress-track"
              role="progressbar"
              aria-label="Portfolio development progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={72}
            >
              <div className="uc-progress-fill">
                <span className="uc-progress-glint" />
              </div>
            </div>

            <div className="uc-progress-bottom">
              <span>Compiling magic...</span>
              <span>∞ possibilities</span>
            </div>
          </div>

          <div className="uc-footer-note">
            Made with love, caffeine & a suspicious amount of CSS.
          </div>
        </div>

        <div className="uc-visual">
          <div className="uc-orbit uc-orbit-outer" />
          <div className="uc-orbit uc-orbit-inner" />

          <div className="uc-float-tag uc-tag-top">
            <span>✦</span> creativity.exe
          </div>

          <div className="uc-float-tag uc-tag-bottom">
            <span className="uc-tag-check">✓</span> compiling magic
          </div>

          <div className="uc-laptop">
            <div className="uc-screen">
              <div className="uc-screen-topbar">
                <div className="uc-window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="uc-file-name">
                  <span>✿</span> portfolio.jsx
                </span>
                <span className="uc-file-menu">•••</span>
              </div>

              <div className="uc-editor">
                <div className="uc-line-numbers" aria-hidden="true">
                  {codeLines.map((_, index) => (
                    <span key={index}>{index + 1}</span>
                  ))}
                </div>

                <div className="uc-code" aria-label="Animated code preview">
                  {codeLines.slice(0, visibleLines).map((line, index) => (
                    <div
                      className={`uc-code-line ${
                        index === visibleLines - 1
                          ? "uc-code-line-active"
                          : ""
                      }`}
                      key={`${visibleLines}-${index}`}
                    >
                      {line === "" ? (
                        <span>&nbsp;</span>
                      ) : (
                        <CodeLine line={line} />
                      )}
                    </div>
                  ))}

                  <span className="uc-cursor" aria-hidden="true" />
                </div>
              </div>

              <div className="uc-terminal">
                <div className="uc-terminal-heading">
                  <span>✧ TERMINAL</span>
                  <span>zsh — 80 × 24</span>
                </div>
                <p>
                  <span className="uc-terminal-prompt">❯</span>{" "}
                  npm run build
                </p>
                <p className="uc-terminal-success">
                  ✦ Everything is coming together...
                </p>
              </div>
            </div>

            <div className="uc-laptop-base">
              <div className="uc-laptop-notch" />
            </div>
          </div>

          <div className="uc-floating-heart uc-heart-two">✧</div>
          <div className="uc-floating-heart uc-heart-three">✦</div>

          <div className="uc-orbit-label"> ♡</div>
        </div>
      </section>

      <footer className="uc-bottom">
        <span>© {new Date().getFullYear()} UGNE</span>
        <span className="uc-bottom-center">
          <span className="uc-status-dot" />
          GOOD THINGS TAKE TIME
        </span>
        <span>DESIGNED IN A DAYDREAM <span className="uc-pink">✳</span></span>
      </footer>
    </main>
  );
}

function CodeLine({ line }: { line: string }) {
  const match = line.match(/^(\s*)(const|creator:|passion:|occupation:|status:)(.*)$/);

  if (!match) {
    return <span className="uc-code-default">{line}</span>;
  }

  const [, indent, keyword, rest] = match;
  const isConst = keyword === "const";

  return (
    <>
      {indent}
      <span className={isConst ? "uc-code-keyword" : "uc-code-property"}>
        {keyword}
      </span>
      <span className="uc-code-default">{rest}</span>
    </>
  );
}

export default UnderConstruction;
