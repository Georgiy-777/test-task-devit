## Description

The Back folder contains the server directory which can be run with 
                        npm run start
to start the local server.

The Front folder contains client directory which can be run with 
                        Live Server

---------------------------------------------------------------------------------------------------

Server-Side (Node.js + Express)
Setup Express server: Initialize a new Node.js project and set up an Express server.
Endpoint /api: Create an endpoint that accepts GET requests.
Random Delay: Implement a function that waits for a random delay between 1ms to 1000ms before sending a response.
Response: Send back the request index received in the query parameters as part of the response.

Client-Side (HTML + JavaScript)
HTML Setup: Create an input field for the concurrency limit and a "Start" button.
JavaScript Fetch Logic: Write JavaScript to handle the "Start" button click event.
Concurrency Control: Implement logic to maintain a specific number of concurrent requests based on the input value.
Rate Limiting: Ensure not to exceed the specified number of requests per second.
Handle Responses: Render the indexes of successful responses in a list on the webpage.

...and another project of mine, which implements similar principles of Full-Stack application.

https://github.com/Georgiy-777/FullStack---EasyLib/edit/main/README.md

https://www.loom.com/share/aeeab5fbc0654e348eea4b8c799ebf01?sid=5e6048fc-75f4-4e0e-a463-36047327069a
