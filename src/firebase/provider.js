import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { FirebaseAuth } from "./firebase.config";


const GoogleProvider = new GoogleAuthProvider();


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





export const logoutUser = async () => {
    return await FirebaseAuth.signOut();
}