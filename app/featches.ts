const fetchData = async <T>(
  resource: string,
  id?: string,
  params?: string,
): Promise<T> => {
  try {
    const response = await fetch(
      `https://api.beatsaver.com/${resource}${id ? `/${id}` : ""}${params ? `?${params}` : ""}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${resource}: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { fetchData };
