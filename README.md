# light-control
React app that controls lights in the house

## Installation

Clone the repository locally. The only two requirements are Docker Engine and Docker Compose.

## Running the app

Run the app using `docker-compose up -d`. This will start the entire service in the background. The compose file is automatically configured to restart the services.

## Development

For development purposes, `docker-compose up --force-recreate --build` might be better. This will display the service logs live in the terminal. It will also force the containers to be recreated and built. 

## Resources

* [Async await in Express](https://strongloop.com/strongblog/async-error-handling-expressjs-es7-promises-generators/)
* [Node, Express, Mongo and Docker](https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e#.pq9m52kkj)
* [Docker Compose file reference](https://docs.docker.com/compose/compose-file/)
* [MongoDb's Node.js Driver](http://mongodb.github.io/node-mongodb-native/2.2/)
* [Typechecking with PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
