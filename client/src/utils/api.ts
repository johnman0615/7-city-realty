// filepath: s:\website reality\client\utils\api.ts
export const retrieveUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const retrieveAgents = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/agents`);
  if (!response.ok) {
    throw new Error("Failed to fetch agents");
  }
  return response.json();
};

export const retrievePropertyById = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/properties/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch property");
  }
  return response.json();
};