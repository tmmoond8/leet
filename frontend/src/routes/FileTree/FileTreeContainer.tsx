import React, { Component } from 'react';
import FileTreePresenter from './FileTreePresenter';

interface IProps {}


class FileTreeContainer extends Component<IProps> {
  render() {
    return (
      <FileTreePresenter />
    )
  }
}

export default FileTreeContainer;