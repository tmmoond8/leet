export const typeDefs = ["type File {\n  name: String!\n  children: [File]\n}\n\ntype Query {\n  getFile: File\n}\n"];
/* tslint:disable */

export interface Query {
  getFile: File | null;
}

export interface File {
  name: string;
  children: Array<File> | null;
}
