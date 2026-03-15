# To-Do-List-Refractoring

COMPANY : CODTECH IT SOLUTIONS

NAME : ANSH GUPTA

INERN ID : CTIS3792

DOMAIN : SOFTWARE DEVELOPMENT

DURATION : 8 WEEKS

MENTOR : NEELA SANTOSH

PROJECT DESCRIPTION: This project is a refactored and enhanced To-Do List web application developed to improve the structure, performance, and usability of an existing open-source project from GitHub. The original application allowed users to add, complete, and delete tasks within a single list. During the refactoring process, the codebase was reorganized to improve readability, maintainability, and overall efficiency without altering the core functionality.

Several new features were implemented to enhance the user experience. The application now supports multiple to-do lists, allowing users to organize tasks into different categories. The user interface was redesigned with a modern card-based layout, improved buttons, and better visual structure. A Dark Mode / Light Mode toggle was also introduced to provide a customizable and comfortable viewing experience.

Additionally, the JavaScript logic was optimized using cleaner event handling and reusable functions, which improves performance and scalability. The refactored version demonstrates how existing code can be improved through structured development practices, resulting in a more efficient, scalable, and user-friendly task management application.

#OUTPUT:

Before Refractoring :
<img width="1908" height="874" alt="Image" src="https://github.com/user-attachments/assets/a03232f3-4b2a-4827-beef-6d756a449ef6" />

<img width="1906" height="871" alt="Image" src="https://github.com/user-attachments/assets/ca9b5d37-b332-4f6a-bcb0-3a81084bf2e8" />

After Refractoring :
<img width="1910" height="872" alt="Image" src="https://github.com/user-attachments/assets/fc0a5735-882b-4c2e-86e8-5557ee2a96ea" />

<img width="1912" height="871" alt="Image" src="https://github.com/user-attachments/assets/9d08c6b3-aefa-45c3-829a-7e9abc180a70" />

<img width="1913" height="865" alt="Image" src="https://github.com/user-attachments/assets/2b41a160-7278-4194-ad43-9ca2c01b3fd3" />

# Code Refactoring and Performance Optimization Report

**Project:** To-Do List Web Application
**Platform:** GitHub
**Technologies Used:** HTML, CSS, JavaScript, jQuery

# 1. Introduction

This project focuses on refactoring and optimizing an open-source To-Do List web application. The original project provided basic functionality that allowed users to add tasks, mark them as completed, and delete them.

However, the initial implementation had limited scalability, minimal UI features, and lacked support for multiple task lists. The goal of this refactoring process was to improve the application's readability, usability, maintainability, and performance while preserving its core functionality.

The project was refactored by restructuring the code, improving UI design, introducing modern development practices, and implementing additional features such as multiple to-do lists and dark/light mode.

# 2. Problems in the Original Code

The original implementation contained several issues:

**1. Limited Functionality**

* The application supported only a single to-do list.
* Users could only add tasks but could not organize them into separate lists.

**2. Poor Code Organization**

* JavaScript logic was not modular.
* Reusable functions were not implemented.

**3. Lack of Modern UI**

* The interface had minimal styling.
* There were no interactive buttons or advanced controls.

**4. No Theme Support**

* The application lacked dark mode support.

**5. Minimal Scalability**

* The structure made it difficult to extend the project with additional features.

# 3. Refactoring Changes Implemented

The following improvements were made during the refactoring process.

## 3.1 Code Structure Improvements

* Reorganized JavaScript logic into clearer event-based functions.
* Improved variable naming for readability.
* Reduced duplicated code by introducing reusable functions.

# Impact

* Improved code readability and maintainability.
* Reduced complexity for future development.

# 3.2 Multiple To-Do Lists Feature

The application was modified to allow users to create multiple independent task lists.

Users can now:

* Create new lists dynamically
* Manage tasks inside each list separately
* Rename list titles

### Impact

* Improved scalability of the application.
* Enhanced productivity features for users.
* Better organization of tasks.

## 3.3 UI and Layout Improvements

The user interface was redesigned using a modern card-based layout.

Enhancements include:

* Dedicated control panel with buttons
* Better spacing and alignment
* Responsive design for smaller screens

### Impact

* Improved user experience.
* Increased usability and accessibility.

## 3.4 Dark Mode and Light Mode

A theme toggle button was implemented to allow users to switch between light and dark themes.

### Impact

* Improved user comfort during long usage sessions.
* Modern UI feature commonly used in productivity applications.

## 3.5 Improved Event Handling

The application now uses delegated event listeners to handle dynamically created elements such as tasks and lists.

### Impact

* Prevents unnecessary event bindings.
* Improves performance when handling dynamically added elements.

# 4. Performance Improvements

| Metric          | Before Refactoring | After Refactoring        |
| --------------- | ------------------ | ------------------------ |
| Code Structure  | Unstructured       | Modular and readable     |
| Scalability     | Single list only   | Multiple lists supported |
| UI Interaction  | Limited            | Interactive buttons      |
| Event Handling  | Basic              | Delegated event handling |
| User Experience | Basic              | Modern and responsive    |

Overall performance improvements include:

* Reduced DOM manipulation overhead.
* More efficient event handling.
* Improved code maintainability.

# 5. New Features Added

The refactored application now includes:

* Multiple To-Do Lists
* Dynamic Task Creation
* Task Deletion
* Task Completion Marking
* Editable List Titles
* Dark Mode / Light Mode
* Responsive UI Design

These features significantly enhance the application's usability and flexibility.

# 6. Conclusion

The refactoring process successfully improved both the structure and functionality of the original To-Do List application. The codebase is now more readable, modular, and easier to maintain. In addition, the application has been enhanced with modern UI features, improved event handling, and support for multiple task lists.

Overall, the refactored version provides better performance, improved scalability, and a more user-friendly experience compared to the original implementation.
