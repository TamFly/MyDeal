import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from "firebase";

var config = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

Vue.prototype.$firebase = firebase;
Vue.prototype.$auth = firebase.auth();
Vue.prototype.$db = firebase.database();
Vue.prototype.$storage = firebase.storage();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
