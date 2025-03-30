
export async function fetchData(url, options) {
    const response = await fetch(url, options);
  
    if (!response.ok) {
      throw new Error('Fetch data error. Fetch data not ok! :(');
    }
  
    const json = await response.json();
    return json;
}