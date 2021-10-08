<div id="top"></div>
# Halloween Costume Contest API

#### 🎃 Postman API-First Hacktoberfest for Students - 2021

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#technologies-used">Technologies Used</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#contact-information">Contact Information</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
The challenge is to build an API that allows a user to create, read, update, delete and upvote costume party contestants.
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TECHNOLOGIES USED -->
## Technologies Used
- Node
- Express
- MongoDB
- Mongoose
- Nodemon

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Have the latest NPM version installed
    ```sh
    npm install npm@latest -g
    ```
2. Download [Node.js](https://nodejs.org/en/) if not already installed

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alexfranco12/hacktoberfest-backend-2021.git
   ```
2. Install NPM packages
    ```sh
    npm install express mongoose
    npm install body-parser cookie-parser cors morgan multer
    ```
    optional:
    ```sh
    npm install nodemon
    ```
3. Change into directory and start the server
     ```sh
   node server.js
   ```
   or if you have nodemon installed:
   ```sh
   nodemon server.js
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap
Endpoints:
- [x] GET /
- [x] GET /contestants
- [x] GET /contestants/:id
- [x] PATCH /contestants/:id
- [x] DELETE /contestants/:id
- [x] POST /contestants
- [x] PATCH /contestants/:id/upvote

The server must match the provided [schema](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/api/b8ee9c39-4eb5-46c0-94e0-d643d9064ba9/version/77aea2ac-8b58-4314-82a6-847b40547c1f?tab=define) with the 7 endpoints listed above, and pass a series of tests in this [test collection](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/collection/15567703-96f91b20-f497-43aa-a7f9-f1443bdd3a71?ctx=documentation) provided in Postman.

To see what types of responses the API should return, check out postman's [documentation](https://www.postman.com/postman/workspace/postman-hacktoberfest-21/documentation/15567703-097eb31d-3c5a-4b40-90de-870efc823a94). 


#### Submit Project
- [ ] Upon completion, submit repository [here](https://docs.google.com/forms/d/e/1FAIpQLSeg8BVdg3fzuhwgBiM6AXR_NOEKI-w_Q8uG5eBVpfyVZmggXw/viewform) to be considered in the Hacktoberfest.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact Information

### Alexander Franco
<a href="mailto:alexfranco12@gmail.com?"> <img src="https://img.shields.io/badge/gmail-%23DD0031.svg?&style=for-the-badge&logo=gmail&logoColor=white"/> </a>

[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn][linkedin] [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub][github]

<!-- ACKNOWLEDGMENTS -->

<p align="right">(<a href="#top">back to top</a>)</p>

[linkedin]:https://linkedin.com/in/alexander-franco
[github]:https://github.com/alexfranco12