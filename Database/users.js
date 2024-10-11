export const usersCollection = [
    {
        userName:"Juan Esteban Calle",
        email: "juan@tdea.com",
        birthMonth:"Enero",
        birthYear:"2010",
        birthDay:"02",
        password: "321654",
        code: "1234",
        user:"@juanes123", 
        social:{
            followers: 0,
            following:0
        },
        profilePic:"https://avatar.iran.liara.run/public/10",
        bannerPic:"https://loremflickr.com/800/200"
    }
]


if (localStorage.getItem("usersCollection") == undefined) {
    localStorage.setItem('usersCollection', JSON.stringify(usersCollection))
}