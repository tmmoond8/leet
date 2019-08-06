import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import InitialPresenter from './InitialPresenter';

storiesOf('Inital', module)
  .add('Initial', () => (
  <InitialPresenter 
    quiz="ㅇㅈㄱ" 
    answer="인정" 
    syllables={'자축인묘진사오미신유술해'.split('')}
    onTouch={action('onTouch')}
    onClear={action('clear')}
  />
))
