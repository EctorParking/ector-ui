# Ector-Ui

[![Greenkeeper badge](https://badges.greenkeeper.io/EctorParking/ector-ui.svg)](https://greenkeeper.io/)

Ector parking storybook components

## Installation
- `yarn`

## Development
- `yarn start:storybook` and then go to `localhost:6006` to have storybook live preview
- `yarn start` and `yarn link` to build locally ector-ui. Use the components in another React project with `yarn link ector-ui`.



## Deployment
- `yarn build:storybook` then upload the content of the static directory `.out` on your website

## Integration as a component library
- `yarn add https://github.com/EctorParking/ector-ui`
- Add the line `@import 'ector-ui'` at the top of your main css module
