const API_URL = `https://api.github.com/users/reyduar`;

export async function getDevProfile() {
  const headers = new Headers({ "Content-Type": "application/json" });
  const response = await fetch(API_URL, { headers });
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
