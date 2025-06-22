import axios from 'axios';

export function generics1() {
  async function fetchData<T>(url: string): Promise<T> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching from ${url}: ${error}`);
    }
  }

  return fetchData;
}
