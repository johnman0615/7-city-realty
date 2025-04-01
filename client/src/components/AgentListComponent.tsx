import React, { useEffect, useState } from "react";
import "@styles/agent.css"; 
import { retrieveAgents } from "@utils/api";

interface AgentData {
  id: number;
  name: string;
  email: string;
  phone: string;
  profilePicture?: string;
  specialties?: string[];
}

const AgentListComponent: React.FC = () => {
  const [agents, setAgents] = useState<AgentData[] | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await retrieveAgents();
        setAgents(data);
      } catch (error) {
        console.error("Failed to fetch agents:", error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <div>
      <h2>Meet Our Agents</h2>
      {agents && agents.map((agent) => (
        <div key={agent.id} className="agent-card">
          <img
            src={agent.profilePicture || "/assets/default-profile.png"}
            alt={`${agent.name}'s profile`}
            className="agent-profile-picture"
          />
          <h3>{agent.name}</h3>
          <p>Email: <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
          <p>Phone: <a href={`tel:${agent.phone}`}>{agent.phone}</a></p>
          {agent.specialties && <p>Specialties: {agent.specialties.join(", ")}</p>}
        </div>
      ))}
      {!agents && <p>No agents available at the moment.</p>
    </div>
  );
};

export default AgentListComponent;