import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  authDomain: "scoreboard-6b700.firebaseapp.com",
  databaseURL: "https://scoreboard-6b700-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

function bootstrap_db() {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);

    return database;    
}

function load_kd_data(setKDData) {
    
    const dbRef = ref(bootstrap_db());
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        setKDData(snapshot.val());
      } else {
        console.log("No data available");
        setKDData({});
      }
    }).catch((error) => {
      console.error(error);
    });
}

export default load_kd_data;