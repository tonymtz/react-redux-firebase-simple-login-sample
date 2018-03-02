export const initializeFirebase = () => {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCaP8PkVsvcSnZ9hm7wjJuMd0nREGFqUT4",
        authDomain: "mylist-io.firebaseapp.com",
        databaseURL: "https://mylist-io.firebaseio.com",
        projectId: "mylist-io",
        storageBucket: "",
        messagingSenderId: "239126448123"
    };
    global.firebase.initializeApp(config);
};

export const login = (email, password) => {
    return global.firebase.auth().signInWithEmailAndPassword(email, password);
};
