const fetchData = async <T>(
  resource: string,
  id?: string,
  params?: string,
): Promise<T | string> => {
  const response = await fetch(
    `https://api.beatsaver.com/${resource}${id ? `/${id}` : ""}${params ? `?${params}` : ""}`,
  );

  if (!response.ok) {
    return `Something went wrong. Try again later: ${response.status}`;
  }

  return await response.json();
};

const fetchDataSS = async <T>(
  resource: string,
  id?: string,
  params?: string,
): Promise<T | string> => {
  const response = await fetch(
    `https://scoresaber.com/api/v2/${resource}${id ? `/${id}` : ""}${params ? `?${params}` : ""}`,
  );

  if (!response.ok) {
    return `Something went wrong. Try again later: ${response.status}`;
  }

  return await response.json();
};

export { fetchData, fetchDataSS };
