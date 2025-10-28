export const getData = async () => {
  try {
    const raw = await fetch("/api/cards")
    const data = await raw.json();
    if (!data) return [];
    return data.data;
  } catch {
    return [];
  }

};
