# Hugo React Components

Save my components build with React & tailwind.css

## Install

```bash
# npm
$ npm install hugo-rc

# yarn
$ yarn add hugo-rc
```

## Example

```jsx
import 'hugo-rc/tailwind.generated.css'
import React from 'react'
import { Button } from 'hugo-rc'

export const ClickMe = () => {
  return (
    <Button onClick={() => console.log('click me')}>
      CLICK ME
    </Button>
  )
}
```
