export const searchSkills = async (query: string) => {
  const response = await fetch(`https://api.apilayer.com/skills?q=${query}`, {
    method: 'GET',
    headers: {
      apikey: process.env.NEXT_PUBLIC_API_LAYER_API_KEY as string,
    },
  });
  const data = await response.json();
  return data;
};

export const addSkills = (data: { skills: string[] }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.skills);
    }, 500);
  });
};
