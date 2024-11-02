import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
            userInfo: {
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

        const searchIssetUser = await getUserInfo(displayName.replace('@', ''))

        if (searchIssetUser.userInfo?.email) {
            return {
                ok: true,
                userInfo: {
                    uid, photoURL, email, displayName, id: searchIssetUser.userInfo?.id
                }
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

        let { displayName, email, photoURL, uid } = result.user;

        const [firstName, lastName] = displayName.split(" ");

        // we generate a random name using her display name
        displayName = `@${firstName.slice(0, 2).toLowerCase()}${lastName ? lastName.slice(0, 2).toLowerCase() : ''}`;


        // CHECK IF THE USER IS NEW
        const searchIssetUser = await getUserInfo(displayName.replace('@', ''))

        if (!searchIssetUser.userInfo?.email) {//NO EXISTE LO CREA
            const userObj = {
                userName: displayName,
                email: email,
                birthMonth: "Enero",
                birthYear: "2020",
                birthDay: "30",
                password: "",
                code: "",
                user: displayName,
                social: {
                    followers: [],
                    following: []
                },
                profilePic: photoURL,
                bannerPic: "https://loremflickr.com/800/200"
            }

            await saveUser(userObj)
        }

        return {
            ok: true,
            userInfo: {
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
                comments: doc.data().reactions.comments,
                retweets: doc.data().reactions.retweets,
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


export const saveUser = async (user) => {
    try {
        const docRef = await addDoc(collection(db, "users"), user);


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


export const getUserInfo = async (user) => {


    try {
        const q = query(collection(db, "users"), where("user", "==", "@" + user));
        const querySnapshot = await getDocs(q);

        let userInfo = {}

        querySnapshot.forEach((doc, index) => {
            userInfo = doc.data()
            userInfo = {...userInfo, id: doc.id}
        })


        return {
            ok: true,
            userInfo
        }


    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}


export const getPostByUser = async (user) => {


    try {
        const q = query(collection(db, "posts"), where("user", "==", "@" + user));
        const querySnapshot = await getDocs(q);

        let posts = []

        querySnapshot.forEach((doc, index) => {
            posts.push(doc.data())
        })

        return {
            ok: true,
            listPost: posts
        }


    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}


export const updateUser = async (schema) => {

    try {
        const process = await updateDoc(doc(db, "users", schema.id),schema);

        return {
            ok: true,
        }
    } catch (error) {
        return{
            ok: false,
            errorMessage: error.message
        }
    }

    
}






export const logoutUser = async () => {
    return await FirebaseAuth.signOut();
}