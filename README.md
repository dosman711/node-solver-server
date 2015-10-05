# Simple NodeJS client/server solver

This is a (very) simple implementation of a client-server architecture that is able to make requests and receive responses. The goal of this project was to do a bit of proof-of-concept work to write a simple solver in clean javascript. 

A simple UML activity diagram has been included to help show how the inputs are being parsed.

## How to execute
(Tested using NodeJS v4.1)

After cloning the repo, run `node server.js` in a terminal. In another terminal, run `node client.js`. As the client and server work they will output status information into their respective terminals. If you'd like to test the server directly, after running `node server.js` you can switch to a new terminal and run `telnet localhost 5555` to connect to the running server.

## Tests
Tests were written using the mocha framework. Install mocha with `npm install -g mocha`, then in the root directory of the project you can execute the tests by running `mocha`.

## Limitations
The solver is currently limited to very simple arithmetic expressions, such as `1 + 1` or `5 * 3`. Addition, subtraction, multiplication, and division are all supported. Also, only integers are currently supported.
