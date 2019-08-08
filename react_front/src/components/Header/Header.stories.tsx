import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Header from './HeaderPresenter';

storiesOf('Header', module)
  .add('default', () => <Header title="제목" onBack={action('back')}/>)
  .add('right', () => <Header title="제목" onBack={action('back')} Right={<span>test</span>}/>)
