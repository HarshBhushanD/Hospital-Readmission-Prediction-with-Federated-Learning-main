import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, 'frontend', '.next');
const targetDir = path.join(rootDir, '.next');

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Expected build output at ${sourceDir}`);
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });