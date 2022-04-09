# Advice Tracker 

This project is created with React.js as a place for finding advices on major events (incomplete)

You have the options to create / post an advice and option to like as much as you like.

## Info before cloning the React.js project

if you want to use firebase-firestore for the database, follow the instructions below

Before cloning, Register on firebase and get your project configuartion keys.
once you have your firebase project configuration keys, create a firebaseConfig.js file in the src folder and paste the keys there.

Your firebaseConfig.js file should look like below.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "......",
  authDomain: "......",
  projectId: "........",
  storageBucket: ".......",
  messagingSenderId: ",,...",
  appId: ",...........",
  measurementId: "........."
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// This is for if you want analytics on the project. P.S optional
const analytics = getAnalytics(app); 

export const database = getFirestore(app)


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

if you want to use firebase hosting, follow the instructions below

run npm run build
and then firebase deploy 

