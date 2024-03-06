**Library Name: rc-drawer-resizable**

## Description

The `rc-drawer-resizable` library is an extension of the popular `rc-drawer` library with added functionality for resizable drawers. `rc-drawer` is a widely used library for creating customizable and responsive drawers in web applications. With `rc-drawer-resizable`, users can resize the drawers dynamically, providing enhanced flexibility and usability.

## Installation

You can install `rc-drawer-resizable` via npm:

```bash
npm install rc-drawer-resizable
```

## Usage

Using `rc-drawer-resizable` is similar to using `rc-drawer`. Simply import the component and use it in your React application. The resizable functionality is enabled by default.

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

`rc-drawer-resizable` supports all the props available in `rc-drawer` along with additional props for controlling the resizable functionality.

### Additional Props

- **minWidth** *(number)*: The minimum width the drawer can be resized to.
- **minHeight** *(number)*: The minimum height the drawer can be resized to.
- **maxWidth** *(number)*: The maximum width the drawer can be resized to.
- **maxHeight** *(number)*: The maximum height the drawer can be resized to.
- **onResizeStart** *(function)*: Callback function invoked when resizing starts.
- **onResize** *(function)*: Callback function invoked during resizing.
- **onResizeStop** *(function)*: Callback function invoked when resizing stops.

### Inherited Props

All props from `rc-drawer` can also be used.

## Example

```jsx
import React from 'react';
import { Drawer } from 'resizable-rc-drawer';

const MyComponent = () => {
  return (
    <Drawer
      width={300}
      height={500}
      onClose={() => {}}
      minWidth={200}
      minHeight={300}
      maxWidth={600}
      maxHeight={800}
      onResizeStart={() => console.log('Resize started')}
      onResize={(width, height) => console.log(`Resized to ${width} x ${height}`)}
      onResizeStop={() => console.log('Resize stopped')}
    >
      {/* Content of the drawer */}
    </Drawer>
  );
}

export default MyComponent;
```

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or improvements, feel free to open an issue or create a pull request on the GitHub repository.

## License

This library is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

This library is built upon `rc-drawer`, and we are grateful for the contributions of its maintainers and contributors.

## Author

[Your Name]

## Contact

For any inquiries or support, please contact [your email or preferred contact method].
