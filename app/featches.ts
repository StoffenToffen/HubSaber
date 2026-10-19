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

    const data = await response.json();
    return data.docs;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { fetchData };
