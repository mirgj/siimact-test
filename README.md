# siimact test project
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and it's a test project for [siimact](https://github.com/mirgj/siimact)

## How has been created
I suggest you to you _create-react-app_ tool to create your react app easily.

```
npx create-react-app my-app
cd my-app
npm start
```

after that you have to include **siimact** in your project.

```
cd my-app
npm install --save-dev siimact
```

then you include in your app the **siimact** components

```
import { Alert, Content } from 'siimact';
```

and start to use it

```
<Content>
  <Alert color='orange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Alert>
</Content>
```

remember to include the Siimple CSS in public/index.html

```
<head>
  ...

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/siimple@3.0.0/dist/siimple.min.css">
<head>
```

then start your application and enjoy the result

```
npm start
```