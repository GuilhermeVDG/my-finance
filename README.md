# First steps: 

## Backend

- If you doesen't have yarn installed on your marchine follow those steps to install [Yarn Docs](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable). </br>

- After install yarn, run the the follow command on your command line into backend folder to install the project dependencies: </br>

```
yarn
```

- After this, you can start the api on your machine in port 3080  with the following command; </br>
```
yarn start:dev
```

## Frontend

- Into my-finance folder, create into services folder an archive called api.js, and put the following code. </br>

```
import axios from "axios";

const api = axios.create({
  baseUrl: 'http://xxx.xxx.xxx.xxx:3080'  // LOCAL IP ADRESS
});

export { api };
 
 ```
 
