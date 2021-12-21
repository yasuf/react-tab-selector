## React Tab Selector

## Steps to publish a new version to the NPM registry

1. Run `npm run build`.
2. Verify files have changed with `git status`.
3. Run `npm publish`.

## Getting started

1. Inside your project, run `npm install --save react-tab-selector`.

2. Use the component with

```jsx
import { TabSelector } from 'react-tab-selector';


const MyComponent = () => {
  return <div>
    <TabSelector
      tabs={[
        {
          title: 'All'
        },
        {
          title: 'Gaming'
        },
        {
          title: 'Photography'
        }
      ]}
    />
  </div>
}
```

