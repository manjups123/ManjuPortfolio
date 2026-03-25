import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/\[var\(--background\)\]/g, 'background');
      content = content.replace(/\[var\(--surface\)\]/g, 'surface');
      content = content.replace(/\[var\(--border\)\]/g, 'border');
      content = content.replace(/\[var\(--primary\)\]/g, 'primary');
      content = content.replace(/\[var\(--secondary\)\]/g, 'secondary');
      content = content.replace(/\[var\(--text-primary\)\]/g, 'textPrimary');
      content = content.replace(/\[var\(--text-muted\)\]/g, 'textMuted');
      
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

replaceInDir('src');
console.log('Replaced all variable interpolations');
