import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(response => setMessage(response.data))
      .catch(error => console.error("Error al conectar con la API:", error));
  }, []);

  return (
    <div>
      <h1>Bienvenido al Cine</h1>
      <p>{message}</p>
    </div>
  );
}