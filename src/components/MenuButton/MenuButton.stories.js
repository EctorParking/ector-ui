import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import MenuButton from '.';

storiesOf('Button.MenuButton', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)

  .add('with knobs', () => {
    const props = {
      LabelComponent: () => <span>Aide</span>,
      SuggestionsComponent: () => (
        <div>
          <button>Questions fréquentes</button>
          <button>Service client</button>
        </div>
      ),
      onClick: action('clicked'),
    };

    return <MenuButton {...props} />;
  })

  .add('with offset', () => {
    const props = {
      LabelComponent: () => <span>Aide</span>,
      SuggestionsComponent: () => (
        <div>
          <button>Questions fréquentes</button>
          <button>Service client</button>
        </div>
      ),
      onClick: action('clicked'),
      suggestionContainerOffset: 50,
    };

    return <MenuButton {...props} />;
  });
