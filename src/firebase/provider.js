import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc, doc, orderBy } from "firebase/firestore";
import { FirebaseAuth, FirebaseApp } from "./firebase.config";


const GoogleProvider = new GoogleAuthProvider();
const db = getFirestore(FirebaseApp);



// AUTH METHODS
export const signUp = async (email, password, displayName) => {

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL } = resp.user

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            userInfo:{
                uid, photoURL, email, displayName
            }
           
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}

export const signIn = async (email, password) => {

    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL, displayName } = result.user

        return {
            ok: true,
            userInfo:{
                uid, photoURL, email, displayName
            }
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}


export const signInWithGoogle = async () => {
    GoogleProvider.setCustomParameters({ prompt: "select_account" });
  
    try {
      const result = await signInWithPopup(FirebaseAuth, GoogleProvider);
  
      const { displayName, email, photoURL, uid } = result.user;
  
      return {
        ok: true,
        userInfo:{
            uid, photoURL, email, displayName
        }
      };
  
    } catch (error) {
      return {
        ok: false,
        errorMessage: error.message,
      };
    }
};



// OPERATIONAL METHODS
export const getPosts = async () => {

    let auxList = []
    const q = query(collection(db, "posts"), orderBy('postDate', 'desc'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc, index) => {
        auxList.push({
            id: doc.id,
            user: doc.data().user,
            userName: doc.data().user,
            userProfilePic: doc.data().userProfilePic,
            urlImage: "https://loremflickr.com/150/50",
            postDescription: doc.data().postDescription,
            postDate: doc.data().postDate,
            reactions: {
                comments:  doc.data().reactions.comments,
                retweets:  doc.data().reactions.retweets,
                likes: doc.data().reactions.likes,
                scope: doc.data().reactions.scope
            }
        });
    });

    return auxList
}


export const addPost = async (postInfo) => {

    try {
        const docRef = await addDoc(collection(db, "posts"), postInfo);

        console.log(docRef)

        return {
            ok: true
        }

    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}





export const logoutUser = async () => {
    return await FirebaseAuth.signOut();
}