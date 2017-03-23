# AudioNimbus
[Live link][heroku]
[heroku]: https://audionimb.us/

AudioNimbus is a music uploading web application inspired by SoundCloud. The
application uses a PostgreSQL database, Ruby on Rails backend, AWS cloud hosting,
and a React.js frontend with a Redux architectural framework.

## Features & Implementation
### User Authentication
Do I need to talk about this?
### Tracks
All tracks are stored in a single table in the database. The table includes
columns for the artist's id (a belongs_to association), song title, music file,
image file, and dominant colors (more details [below](#Colors)). The files are
sent to AWS using the Paperclip gem.
#### Upload
Users upload tracks through the UploadForm component. This form allows users to
enter a title, select an mp3 file, and optionally select album art. The upload
button is not clickable until the user inputs a title and mp3 file.

The mp3 and art selection components both rely on ```html<input type="file">```
elements. In order to improve usability and styling, these input elements are
hidden and instead accessed via ```html<label>``` tags.



#### Index
#### Details
#### Playback
### Comments
### User profiles
### Colors

## Future Work

<!-- [Heroku link][heroku]

[Trello link][trello]


[trello]: https://trello.com/b/auMfS3OH/soundhound

## Minimum Viable Product

AudioNimbus is a web application inspired by SoundCloud built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Playing songs with progress bar with continuous play
- [ ] Comments
- [ ] User pages
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 days)

**Objective:** Functioning rails project with front-end authentication, including a demo login.

### Phase 2: Tracks model, API, and components (2 days)

**Objective:** Allow song CRUD, displaying information about the song as well.

### Phase 3: Cloud setup (1 day)
**Objective:** Set up cloud to host images and audio.

### Phase 4: Track playback (1.5 days)

**Objective:** Tracks play continuously across pages.

### Phase 5: User profile information (1.5 days)

**Objective:** User pages that contain username, email, profile picture, and tracks.

### Phase 6: Comments model, API, and components (1.5 days)

**Objective:** Allow users to comment on tracks.

### Bonus Features (TBD)
- [ ] Wave Forms
- [ ] Playlists
- [ ] Likes -->
