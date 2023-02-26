import {initializeApp} from 'firebase/app'
import {getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from 'firebase/auth'

import {getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD23Szg8X16VLA9RdYb3WTgMtiOY37dbQs",
    authDomain: "crown-clothing-db-4e6f4.firebaseapp.com",
    projectId: "crown-clothing-db-4e6f4",
    storageBucket: "crown-clothing-db-4e6f4.appspot.com",
    messagingSenderId: "713847544323",
    appId: "1:713847544323:web:0acf6eefab70e3392d0c36"
  };

 const firebaseApp = initializeApp(firebaseConfig);

 const googleProvider = new GoogleAuthProvider()
 googleProvider.setCustomParameters({
  prompt:"select_account"
 });

 export const auth = getAuth()

//  Signing In with Google Pop Up - Below function is called Anonymous Function
 export const signInWithGooglePopUp = ()=> signInWithPopup(auth, googleProvider)

//  Sigining In with Redirect

export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider)


//  Making Database
export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{

  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })
  await batch.commit()
  console.log('done')
}


// Making Categories Map Function


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)
  
  const querySnapShot = await getDocs(q)
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items
    return acc
  },{})

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {})=>{

  if(!userAuth) return;
  // Provide Reference of the document.
  // If Document not created, Google will create it automatically for you
  // Doc require three params: 1. Database 2. Document Reference 3. Unique Identifier
  const userDocRef = doc(db, "users", userAuth.uid)

  // console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef)
  // console.log(userSnapShot)

  // Exist Method will check whether your document exist in database or not.
  // Therefor, it will return true or false.
  
  // console.log(userSnapShot.exists())

  
  // If User does not exist in database.
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
      
    } catch (error) {
      console.log("Error Creating User", error.message)
    }

    // If User Exist in Database then simply return it
    return userDocRef
  }
}
export const createUserAuthFromEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInFromEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async ()=> await signOut(auth)

export const onAuthStateChangedListener = (callback)=> {
  onAuthStateChanged(auth, callback)
}