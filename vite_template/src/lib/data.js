export const getData = async () => {
  try {
    const raw = await fetch("/api/cards/list");
    const data = await raw.json();
    if (!data) return [];
    return data.data;
  } catch {
    return [];
  }
};
