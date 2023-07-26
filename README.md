# 404 Error Page (Space Theme)
This code represents a simple 404 error page with a space-themed design. The page displays a message to inform users that they have reached a non-existent or inaccessible page on the website. It provides two buttons that allow users to either return to the homepage or attempt to go back to the previous page (though both buttons have humorous and misleading alerts attached).

## Files
* ``index.html``: This is the main HTML file containing the structure and content of the 404 error page.
* ``style.css``: This file contains the CSS code responsible for the page layout, styles, and animations.
* ``assets/img/bg.png``: The background image used on the page.
* ``assets/img/astronaut.png``: An image of an astronaut, used for animation on the page.
* ``index.js``: The JavaScript code that adds interactivity to the page and handles button click events.

## Usage
Ensure that all the files are present in the correct directories on your web server or hosting environment.

Access the index.html file through your browser. When a non-existent page is requested, this error page will be displayed.

## Dependencies
The page uses the VT323 font from Google Fonts. This font is imported through the Google Fonts API using the @import rule in the CSS.
The page also references style.css for styling and index.js for interactivity.

## Styling
The style.css file contains the CSS rules for styling the 404 error page. It includes styles for the background, typography, buttons, and image animations. The page's background is set to an image, and the content is aligned in the center for small screens and left-aligned for larger screens.

## JavaScript Interactivity
The index.js file contains JavaScript code that adds interactivity to the page. Currently, it has event listeners for the "Go Home" and "Go Back" buttons that display humorous and misleading alerts when clicked.

Note: The provided JavaScript code contains jokes and misleading information, which is meant for entertainment purposes. In a real application, this behavior should be replaced with appropriate logic to handle the buttons' actions, such as redirecting users to the homepage or the previous page.
