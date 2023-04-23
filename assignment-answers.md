#  STEELEYE LIMITED FRONTEND ENGINEER ASSIGNMENT

### Deployment Link 
[https://incredible-sawine-7db109.netlify.app](https://incredible-sawine-7db109.netlify.app)

Here Are the answers of asked questions:

# Q1. Explain what the simple List component does?

The List component does the following :- 
* The List component is a user interface element that displays a list of items in a specific order, typically vertically.

* It allows users to navigate through a set of items, selecting or deselecting them based on their preferences.

* Each item in the list can contain text, images, or other multimedia content that is relevant to the user's needs.

* The List component is commonly used in various applications such as to-do lists, menus, and settings screens.

* It is a highly customizable component that can be styled according to the application's branding or design guidelines.

* Developers can add additional functionality to the List component, such as drag and drop or swipe-to-delete features, to enhance the user experience.

## Q2. What problems/warnings are there with code? ##

* The declaration of the items prop in the WrappedListComponent component is incorrect and will result in a TypeError. PropTypes.shapeOf is not a valid function and should be replaced with PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired})).

*  The onClickHandler property in the WrappedSingleListItem component is not being called correctly. It should be passed as a callback function to be triggered when the list item is clicked.

* The isSelected property in the WrappedSingleListItem component is not being set correctly. As it stands, all list items will be green when selectedIndex is truthy. To fix this, isSelected should be set to isSelected = (selectedIndex === index).


* There is a TypeError that occurs when attempting to set the selectedIndex state in the WrappedListComponent component. The array returned by useState is not destructured correctly, and the setSelectedIndex function is not defined properly. To fix this, the array should be destructured, and setSelectedIndex should appear first: const [setSelectedIndex, selectedIndex] = useState(null);

* The key prop is not being set correctly in the map function of the WrappedListComponent component. Each child component created by the map function should have a unique key prop to help React keep track of which elements have changed. This can be fixed by adding key={index} to the SingleListItem component.


## Q3. Please fix, optimize, and/or modify the component as much as you think is necessary ? ##

### CODE ###

```
import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      // added a key prop
      key={index}
      // changed isSelected to a function
      style={{ backgroundColor: isSelected(index) ? "green" : "red" }}
      // Declaration as an arrow function 
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  // changed isSelected type to function
  isSelected: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  // Interchanging selectedIndex and setSelectedIndex 
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(-1);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };



  return (
    <ul style={{ textAlign: "left" }}>

      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          // Modified
          isSelected={(ind) => ind === selectedIndex}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  // Modified array -> arrayOf and shapeOf -> shape
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  // passing an empty array
  items: [],
};

const List = memo(WrappedListComponent);

export default List;

```

**Name** : Rishita Chugh <br/>
**Reg No**. : 12004630 <br/>
**Course** : Btech (CSE) <br/>
**Email id** : lalitachugh9@gmail.com <br/>
**Mobile No.** : 9896466488 <br/>

