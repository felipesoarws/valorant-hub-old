import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailedAgent() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const [agent, setAgent] = useState([]);

  useEffect(() => {
    const URL = window.location.href.split("/");

    const fetchStats = async () => {
      const response = await fetch(
        `https://valorant-api.com/v1/agents/${URL[URL.length - 1]}`
      );
      const responseJSON = await response.json();
      const data = responseJSON.data;
      setAgent(data);
    };

    agent.displayName === undefined
      ? (document.title = `Valorant Hub`)
      : (document.title = `Valorant Hub | ${agent.displayName}`);

    fetchStats();
  }, [agent]);

  return (
    <div>
      <button onClick={goBack}>back</button>
      <div className="card">
        <h1>{agent.displayName}</h1>
      </div>
    </div>
  );
}
