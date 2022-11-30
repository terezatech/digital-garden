import { Zettelkasten } from '@tereza-tech/zettel';
import * as path from 'path';

const postsDir = path.join(process.cwd(), 'notes');

export const zettel = new Zettelkasten({
  postsDir,
  requiredMetadata: ['title'],
});
