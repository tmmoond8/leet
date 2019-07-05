import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getFile } from '../../types/api';
import { GET_FILE } from './FileTree.queries';
import FileTreePresenter from './FileTreePresenter';

interface IProps {}

class GetFile extends Query<getFile> {};

class FileTreeContainer extends Component<IProps> {
  render() {
    return (
      <GetFile query={GET_FILE}>
        {({ data, loading }) => (
          <FileTreePresenter data={data!.GetFile}/>
        )}
      </GetFile>
    )
  }
}

export default FileTreeContainer;