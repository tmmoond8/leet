import { path as root } from 'app-root-path';
import fs, { readdirSync } from 'fs';
import path from 'path';
import { File } from '../../types/graph';

const projectRoot = path.basename(root);

const getChildren = (parent: string) => {
  const files = readdirSync(parent);
  return files.map(name => {
    const isDirectory = fs.statSync(path.join(parent, name)).isDirectory();
    return {
      name: `${projectRoot}/${name}`,
      children: isDirectory
        ? getChildren(path.resolve(parent, name))
        : null,
      content: isDirectory ? "" : fs.readFileSync(path.join(parent, name), 'utf8')
    }
  });
}

const fileTree = (function () {
  try {
    const children = getChildren(path.resolve(root, 'src'));
    return {
      name: projectRoot,
      children,
      content: ""
    };
  } catch (err) {
    console.error(err);
    return {
      name: "failed",
      children: null,
      content: ""
    }
  }
})();

const resolvers = {
  Query: {
    GetFile: (): File => {
      return fileTree;
    }
  }
}

export default resolvers;