export const postCollection = [
    {
        id:1,
        user:"@juanes123",
        userName: "Juan Esteban Calle",
        userProfilePic: "https://avatar.iran.liara.run/public/10",
        urlImage: "https://picsum.photos/seed/picsum/150/50",
        postDescription: "Like si lo ves",
        postDate : "2024-10-09 10:15:24",
        reactions:{
            comments:[],
            retweets: [],
            likes: [],
            scope: []
        }
    },
]


if (localStorage.getItem("postsCollection") == undefined) {
    localStorage.setItem('postsCollection', JSON.stringify(postCollection))
}