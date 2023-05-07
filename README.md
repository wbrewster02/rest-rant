# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method      | Path        | Purpose   |
| ----------- | ----------- | --------- |
| GET         |      /      | Home page |
| GET         |      /places       | Places index page |
| POST        |      /places       | Create new place |
| GET         |      /places/new       | Form page for creating a new place |
| GET         |      /places/:id       | Details about a particular place |
| PUT         |      /places/:id       | Update a particular place |
| GET         |      /places/:id/edit       | Form page for editing an existing place |
| DELETE      |      /places/:id       | Delete a particular place |
| POST        |      /places/:id/rant       | Create a rant (comment) about a particular place |
| DELETE      |      /places/:id/rant/:rantId       | Delete a rant (comment) about a particular place |
| GET         |      *       | 404 page (matches any route not defined above) |

Places will Have:
1. name(string)
2. city(string)
3. state(string)
4. cuisines(string)
5. pic(string)

coffe shop photo https://unsplash.com/@romanbozhko
cafe photo https://unsplash.com/@mparzuchowski

$ npm i react express-react-views
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: rest-rant@1.0.0
npm WARN Found: react@16.14.0
npm WARN node_modules/react
npm WARN   react@"*" from the root project
npm WARN   2 more (express-react-views, react-dom)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peer react@"^0.14.0 || ^15.0.0 || ^16.0.0" from express-react-views@0.11.0
npm WARN node_modules/express-react-views
npm WARN   express-react-views@"*" from the root project
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: rest-rant@1.0.0
npm WARN Found: react@16.14.0
npm WARN node_modules/react
npm WARN   react@"*" from the root project
npm WARN   2 more (express-react-views, react-dom)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peer react@"^16.14.0" from react-dom@16.14.0
npm WARN node_modules/react-dom
npm WARN   peer react-dom@"^0.14.0 || ^15.0.0 || ^16.0.0" from express-react-views@0.11.0
npm WARN   node_modules/express-react-views


