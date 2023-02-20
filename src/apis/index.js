const GITHUB_API_URL = `https://api.github.com/users/reyduar`;
const RAM_API_URL = `https://rickandmortyapi.com/api/character`;
const headers = new Headers({ "Content-Type": "application/json" });

export async function getDevProfile() {
  const response = await fetch(GITHUB_API_URL, { headers });
  const { data, status } = {
    data: await response.json(),
    status: response.status,
  };
  if (status !== 200) {
    return [
      [],
      {
        ...data,
        message: `Error (status: ${status}, message: ${data && data.message})`,
      },
    ];
  }

  return [data, null];
}

export async function getRickAndMortyCharacterById(id) {
  const response = await fetch(`${RAM_API_URL}/${id}`, { headers });
  const { data, status } = {
    data: await response.json(),
    status: response.status,
  };
  if (status !== 200) {
    return [
      [],
      {
        ...data,
        message: `Error (status: ${status}, message: ${data && data.message})`,
      },
    ];
  }

  return [data, null];
}
