import React, { useState } from 'react';
import styled from '../../typed-components';

const File = styled.li`
  cursor: pointer;
`;
const Directory = styled.ul`
  padding-left: 20px;
`;

const FileContent = styled.pre`
  padding-top: 50px;
`;

interface IFileModel {
  name: string;
  children: IFileModel[];
  content: string;
}

interface IProps {
  data: any;
}

const renderFile = (data: IFileModel, setContent: Function) => {
  const { name, children, content } = data;
  return (
    <File>
      {children ? (
        <details>
          <summary>{name.split('/').pop()}</summary>
          <Directory>
            {children && children.map(file => renderFile(file, setContent))}
          </Directory>
        </details>
      ) : (
        <p onClick={() => setContent(content)}>{name.split('/').pop()}</p>
      )}
    </File>
  )
}

const FileTreePresenter = (props: IProps) => {
  const { data } = props;
  const [ content, setContent ] = useState('');
  return (
    <>
      <ul>
        {data && renderFile(data, setContent)}
      </ul>
      <FileContent>
        {content}
      </FileContent>
    </>
  );
}

export default FileTreePresenter;