export const typeDefs = ["type File {\n  name: String!\n  children: [File]\n  content: String!\n}\n\ntype Query {\n  GetFile: File\n}\n"];
/* tslint:disable */

export interface Query {
  GetFile: File | null;
}

export interface File {
  name: string;
  children: Array<File> | null;
  content: string;
}
