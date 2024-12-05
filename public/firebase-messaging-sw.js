importScripts("https://www.gstatic.com/firebasejs/9.6.7/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.7/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBQeJAxlVe5MFuI4Oh1-5KuIKC0L7tK5pQ",
  authDomain: "idescapp-d229f.firebaseapp.com",
  projectId: "idescapp-d229f",
  storageBucket: "idescapp-d229f.appspot.com",
  messagingSenderId: "468369567352",
  appId: "1:468369567352:web:332e1846e4960915df478d",
  measurementId: "G-CMR5SKBWLY",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});