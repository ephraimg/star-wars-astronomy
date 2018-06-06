# Star Wars Astronomy

## What is this?

A tool for exploring the planets of the Star Wars universe. The application allows the user to search for planets by name, retrieving information from the SWAPI API. Data is paginated and displayed in a table for easy browsing.

## Usage

Simply enter text in the search field and click the search icon or press Enter. (A spinner will indicate that the application is waiting for a response from SWAPI). The matching planets from the Star Wars canon, if any, will appear in the main view. The data can be sorted by clicked on the header of the relevant column. (It is possible to sort by any field except terrain and films.) To reverse the direction of sorting, click the same header again. Searches that match many planets will have their results paginated in groups of 10. To navigate through these pages, use the menu below the table of data. The number of the current page is marked with a grey circle.

## Development

### Team

All software engineering by Ephraim Glick (github.com/ephraimg)

### Core dependencies

Axios, React, Redux, React-Redux, Redux-Thunk

### Dev dependencies

Webpack, Babel, Chai, Jest, Enzyme (see package.json for more)

### Design notes

This application could easily have been developed without Redux. But for more complex applications, React-Redux provides a much smoother way to manage state than React alone. So in the interest of easing any future expansion of the project, it includes Redux from the beginning.

The application is designed to provide a good user experience on devices of any standard size. The components will resize automatically on smaller screens (thanks to the use of rems and percentages). Tables are notoriously challenging for responsive design, but the approach here takes two tactics: On mid-sized screens (tablets), the data columns will narrow allowing a full view of the table. On small screens (phones), the table layout is adjusted (through an @media query) so that the user may scroll horizontally to view columns initially hidden off the right side of the screen.

### Testing

The repo includes an assortment of tests across several suites. These include DOM tests, tests of Redux reducers, and tests of Redux actions. Complete coverage is still 

## Contributing

To contribute to this project, fork the repo and clone your copy locally. Get started by running npm install (or yarn). Transpile and start a dev server with npm run dev. Run the tests with npm run test.
