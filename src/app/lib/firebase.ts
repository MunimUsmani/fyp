import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhQ58rv1GvlhV9ctGKmXra0p_LNsOWRsY",
  authDomain: "psycareai-f6672.firebaseapp.com",
  projectId: "psycareai-f6672",
  storageBucket: "psycareai-f6672.appspot.com",
  messagingSenderId: "507524291999",
  appId: "1:507524291999:web:YOUR_APP_ID_HERE", 
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)