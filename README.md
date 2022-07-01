# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| METHOD |           PATH           |                                         PURPOSE |
| :----- | :----------------------: | ----------------------------------------------: |
| GET    |            /             |                                       Home Page |
| GET    |         /places          |                               Places index page |
| POST   |         /places          |                                Create New Place |
| GET    |       /places/new        |              Form page for creating a new place |
| GET    |       /places/:id        |                Details about a particular place |
| PUT    |       /places/:id        |                       Update a particular place |
| GET    |     /placs/:id/edit      |         Form page for editing an existing place |
| DELETE |       /places/:id        |                       Delete a particular place |
| POST   |     /places/:id/rant     | Create a rant(comment) about a particular place |
| DELETE | /places/:id/rant/:rantid |          Delete a rant about a particular place |
| GET    |            \*            |  404 page (matches any route not defined above) |
