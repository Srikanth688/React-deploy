
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("Java");

  return (
    <div style={styles.container}>
      <h1>Conditional Styling</h1>

      <p>Select your favorite programming language:</p>

      <div style={styles.buttons}>
        <button
          className={language === "Java" ? "active" : ""}
          style={{
            ...styles.button,
            backgroundColor:
              language === "Java" ? "green" : "#333",
          }}
          onClick={() => setLanguage("Java")}
        >
          Java
        </button>

        <button
          className={language === "Python" ? "active" : ""}
          style={{
            ...styles.button,
            backgroundColor:
              language === "Python" ? "green" : "#333",
          }}
          onClick={() => setLanguage("Python")}
        >
          Python
        </button>

        <button
          className={language === "JavaScript" ? "active" : ""}
          style={{
            ...styles.button,
            backgroundColor:
              language === "JavaScript" ? "green" : "#333",
          }}
          onClick={() => setLanguage("JavaScript")}
        >
          JavaScript
        </button>
      </div>

      <h2>You selected: {language}</h2>

      <p>
        {language === "Java"
          ? "Java is an object-oriented programming language."
          : language === "Python"
          ? "Python is known for its simple syntax."
          : "JavaScript is widely used for interactive websites."}
      </p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#181818",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: {
    color: "white",
    padding: "12px 22px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;
