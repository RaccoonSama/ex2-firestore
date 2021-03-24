import fbAppli from 'firebase/app';
import firestore from 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmtX_Q-C-aU64ZGfDxu90myW6qppWbHLI",
  authDomain: "cours-react-firebase.firebaseapp.com",
  projectId: "cours-react-firebase",
  storageBucket: "cours-react-firebase.appspot.com",
  messagingSenderId: "752948488573",
  appId: "1:752948488573:web:6720b2db593f3e96c24414"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();

/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) ci-dessous la référence à "bd" obtenue ci-dessus (pour pouvoir l'utiliser dans le composant ListeProduits)
export default bd;