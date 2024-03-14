import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3xyjCNPtnlJTdZ7aBcn7hmBA9kxf-82M",
  authDomain: "restaurante5b-b231f.firebaseapp.com",
  projectId: "restaurante5b-b231f",
  storageBucket: "restaurante5b-b231f.appspot.com",
  messagingSenderId: "556682163250",
  appId: "1:556682163250:web:0493f9ad582680bb67f82b"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
