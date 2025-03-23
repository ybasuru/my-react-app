import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Welcome to My Unique Next.js App!</h1>
      <p style={styles.time}>Current Time: {time}</p>
      <button style={styles.button} onClick={() => alert("You clicked me!")}>
        Click Me!
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    color: "#4A90E2",
  },
  time: {
    fontSize: "1.5rem",
    margin: "20px 0",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#4A90E2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

