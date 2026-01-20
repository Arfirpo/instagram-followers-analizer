import { readFile } from "fs/promises";
import path from "path";


const readJsonFile = async (filePath) => {
  const absolutePath = path.resolve(filePath);
  const rawData = await readFile(absolutePath, 'utf-8');
  return JSON.parse(rawData);
}


const extractUsernames = (data) => {
  const items = Array.isArray(data)
    ? data
    : data?.[Object.keys(data)[0]] ?? [];

  if (!Array.isArray(items)) {
    throw new Error('Estructura de JSON no reconocida');
  }

  return items
    .map((item) => {
      // Formato nuevo
      if (typeof item.title === 'string' && item.title.trim() !== '') {
        return item.title;
      }

      // Formato viejo
      return item.data?.[0]?.value ?? null;
    })
    .filter(Boolean);
};



export const readInstagramFile = async (filePath) => {
  const data = await readJsonFile(filePath);
  return extractUsernames(data);
}