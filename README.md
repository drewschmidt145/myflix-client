# myFlix-client

## myFlix

MyFlix is a client side app used to view a list of movies. Users will be able to login and view information about movies, such as actors, directors, genre and more. The user will also be able to add and remove movies from their favorites list, update their profile information and unregister (if they desite).

The front end is built using React and accesses the MyFlix API.

##### Design

  - This application uses a single view to access all pages and views. It has many different functionalities and components. These include the following.

#### Main View

- Returns ALL movies to the user (each movie item with an image, title, and description)
- Filtering the list of movies with a “search” feature
- Ability to select a movie for more details
- Ability to log out
- Ability to navigate to Profile view

#### Single Movie View

- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorites

#### Login View

- Allows users to log in with a username and password

#### Signup View

- Allows new users to register (username, password, email, date of birth)

#### Profile View

Displays user registration details

- Allows users to update their info (username, password, email, date of birth)
- Displays favorite movies
- Allows users to remove a movie from their list of favorites
- Allows existing users to deregister

## File Structure

package.json
package-lock.json
README.md
src

- index.html
- index.jsx
- index.scss
dist