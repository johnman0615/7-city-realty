import React from 'react';

// Define the structure of an agent's data
interface AgentData {
    id: number;
    name: string;
    email: string;
    phone: string;
    profilePicture?: string; // Optional field for profile picture
    specialties?: string[]; // Optional field for specialties
}

// Define the props for the component
interface AgentListProps {
    agents: AgentData[] | null; // agents can be an array of AgentData objects or null
}

const AgentsList: React.FC<AgentListProps> = ({ agents }) => {
    return (
        <>
            <h2 className="pb-5">Meet Our Agents</h2>
            {agents && agents.map((agent) => (
                <div className="row align-center mb-5" key={agent.id}>
                    <div className="col-md-3">
                        {agent.profilePicture ? (
                            <img
                                src={agent.profilePicture}
                                alt={`${agent.name}'s profile`}
                                className="agent-profile-picture"
                                style={{ width: '100%', borderRadius: '50%' }}
                            />
                        ) : (
                            <div className="placeholder-profile-picture">
                                No Image
                            </div>
                        )}
                    </div>
                    <div className="col-md-9">
                        <h3>{agent.name}</h3>
                        <p>Email: <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
                        <p>Phone: <a href={`tel:${agent.phone}`}>{agent.phone}</a></p>
                        {agent.specialties && (
                            <p>Specialties: {agent.specialties.join(', ')}</p>
                        )}
                    </div>
                </div>
            ))}
            {!agents && <p>No agents available at the moment.</p>}
        </>
    );
};

export default AgentsList;
