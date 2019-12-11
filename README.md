## Turing Cafe - Reservation Portal | 3 Hour Challenge

This application was built with `create-react-app`.

### Set Up

Clone down this repo.

On GitHub, create a new, empty repository and name it something like 'turing-cafe-fe'.

Update the current remote origin and point it at the new URL of the repository you just created on GitHub. You can read how to do this [here](https://help.github.com/en/articles/changing-a-remotes-url).

Once you've updated the remote, you should run `npm install`, commit, and then push your initial commit to your updated remote origin. You might need to use the `-u` flag when you push (like this: `git push -u origin master`).

Run `npm start` to start up your React server.

### Expectations / Rules

Build a React App that displays the current reservations for the Turing Cafe!

You will have 3 hours to build this application.

![turing-cafe-screenshot](https://user-images.githubusercontent.com/20754511/57332366-dbd59d00-70d7-11e9-9de6-967d7aca98a4.png)

We do want to see good commit habits - atomic commits that log small, focused changesets. Don't worry about creating GitHub issues, though.

### Iteration 0

- [x] Pull down the [API repo](https://github.com/turingschool-examples/turing-cafe-api). Set up instructions are in that repository's README.

Do *not* nest this inside your front-end repository.

### Iteration 1

- [x] Get all existing reservations on page load and display them on the DOM.

### Iteration 2

- [x] Create a controlled form component to create a reservation (look into the API documentation to see what pieces of information are expected, and what datatypes it wants each piece to be).
- [x] As a user types into the input fields, the component's state should change.  
- [x] When the user clicks the `Make Reservation` button, the application should update the App's state.  
- [x] The new reservation should display with all of the existing reservations. 

### Iteration 3

Now that the functionality is there, write some tests.  It is not necessary to test everything.  
- [x] Write atleast 2 tests covering UI (ie snapshots) 
- [x] 2 tests for changes in state
- [x] 2 tests that simulate events (6 total)

### Iteration 4

- [x] When the user makes a reservation, the application should make a post request to the API.  
- [x] The new reservation should still exist upon reloading the page.

**You may not have any fetch calls in any component other than App!**

- [x] (If you have time to refactor your fetch calls into a separate helper file, that is fine, but it is *NOT* a requirement for this application.)

### Iteration 5 (extension)

- [x] Delete a reservation when the user clicks the `Cancel` button.  
- [x] The deletion should persist upon reloading the page.

### Extensions

- [ ]  *IN PROGRESS* Now try testing your API calls.  Try writing out a few tests including happy path and sad path testing.

- [x] Add a button or drop down so that the user has the option to sort their reservates by date from earliest to latest or latest to earliest.
