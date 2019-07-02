import { path as root } from 'app-root-path';
import fs, { readdirSync } from 'fs';
import path from 'path';
import { File } from '../../types/graph';

const projectRoot = path.basename(root);

const getChildren = (parent: string) => {
  const files = readdirSync(parent);
  return files.map(name => {
    const filename = `${projectRoot}/${name}`;

    if (fs.statSync(path.join(parent, name)).isDirectory()) {
      return {
        name: filename,
        children: getChildren(path.resolve(parent, name))
      }
    } else {
      return {
        name: filename,
        children: null
      };
    }
  });
}

const fileTreeSet = () => {
  try {
    const children = getChildren(path.resolve(root, 'src'));
    return {
      name: projectRoot,
      children
    };
  } catch (err) {
    console.error(err);
    return {
      name: "failed",
      children: null
    }
  }
};

const fileTree = fileTreeSet();

const resolvers = {
  Query: {
    getFile: (): File => {
      return fileTree;
    }
  }
}

export default resolvers;