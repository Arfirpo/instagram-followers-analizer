import { write } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';

const resolvePath = (filePath) => path.resolve(filePath);


export const exportToTxt = async (filePath, data = []) => {
  const absolutePath = resolvePath(filePath);
  const content = data.join('\n');
  await writeFile(absolutePath, content, 'utf8')
}