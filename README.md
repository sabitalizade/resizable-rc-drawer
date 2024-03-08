**Library Name: rc-drawer-resizable**

## Description

The resizable-rc-drawer library is an extension of the popular `rc-drawer` library with added functionality for resizable drawers. `rc-drawer` is a widely used library for creating customizable and responsive drawers in web applications. With resizable-rc-drawer, users can resize the drawers dynamically, providing enhanced flexibility and usability.

## Installation

You can install `rc-drawer-resizable` via npm:

```bash
npm install rc-drawer-resizable
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
      height={500} // initial height of the drawer
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
