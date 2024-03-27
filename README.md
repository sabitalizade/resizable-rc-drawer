**Library Name: `resizable-rc-drawer`**

## Description

The `resizable-rc-drawer` library is an extension of the popular `rc-drawer` library with added functionality for resizable drawers. `rc-drawer` is a widely used library for creating customizable and responsive drawers in web applications. With resizable-rc-drawer, users can resize the drawers dynamically, providing enhanced flexibility and usability.

## Installation

You can install `resizable-rc-drawer` via npm:

```bash
npm install resizable-rc-drawer
```

## Usage

Using resizable-rc-drawer is similar to using `rc-drawer`. Simply import the component and use it in your React application. The resizable functionality is enabled by default.

```jsx
import React from 'react';
import  Drawer  from 'resizable-rc-drawer';

const MyComponent = () => {
  return (
    <Drawer
      width={300} // initial width of the drawer
      minWidth={500} // min width of the drawer
      maxWidth={500} // max width of the drawer
      onClose={() => {}} // function to be called when the drawer is closed
    >
      {/* Content of the drawer */}
    </Drawer>
  );
}

export default MyComponent;
```

## Props

resizable-rc-drawer supports all the props available in `rc-drawer` along with additional props for controlling the resizable functionality.

### Additional Props

- **width** *(number)*: The minimum width the drawer can be resized to.

| Props         | Description                                                               | Type            | Default                | Version |
| ------------- | ------------------------------------------------------------------------- | --------------- | ---------------------- | ------- |
| title         | The title for Drawer                                                      | ReactNode       | -                      | 0.0.9   |
| titleClosable | Whether the Drawer title close icon is visible or not                     | boolean         | true                   | 1.0.1   |
| width         | Width of the Drawer dialog                                                | string\| number | 378                    | 0.0.9   |
| minWidth      | Minumum Width of the Drawer dialog on resize                              | number          | width\| 378            | 1.0.0   |
| maxWidth      | Maximum Width of the Drawer dialog on resize                              | number          | window.innerWidth - 10 | 1.0.0   |
| onResize      | Specify a callback that will be called when a user resizing Drawer dialog | function(width) | -                      |         |

### Inherited Props

All props from `rc-drawer` can also be used.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or improvements, feel free to open an issue or create a pull request on the GitHub repository.

## License

This library is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

This library is built upon `rc-drawer`, and we are grateful for the contributions of its maintainers and contributors.

## Author

Sabit Alizade
