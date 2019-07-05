/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFile
// ====================================================

export interface getFile_GetFile_children_children_children {
  __typename: "File";
  name: string;
  content: string;
}

export interface getFile_GetFile_children_children {
  __typename: "File";
  name: string;
  content: string;
  children: (getFile_GetFile_children_children_children | null)[] | null;
}

export interface getFile_GetFile_children {
  __typename: "File";
  name: string;
  content: string;
  children: (getFile_GetFile_children_children | null)[] | null;
}

export interface getFile_GetFile {
  __typename: "File";
  name: string;
  content: string;
  children: (getFile_GetFile_children | null)[] | null;
}

export interface getFile {
  GetFile: getFile_GetFile | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
