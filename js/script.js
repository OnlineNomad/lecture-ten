function mySetTimout(delayMS) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delayMS);
    })
};

mySetTimout(5000).then(() => {
    console.log('then works');
})

// second task

// getFacebookProfile(1, (profile) => {
//     getFacebookProfile(profile.friends[0].id, (friendProfile) => {
//         getFacebookProfile(friendProfile.friends[0].id, (friendsFriend)=> {
//             getFacebookProfile(friendsFriend.friends[0].id, (finalProfile) => {
//                 console.log("finally,I have all the profiles");
//             });
//         });
//     });+ 
// });

// getFacebookProfile(1, profile)
//         .then(getFacebookProfile(profile.friends[0].id, friendProfile))
//         .then(getFacebookProfile(friendProfile.friends[0].id, friendsFriend))
//         .then(getFacebookProfile(friendsFriend.friends[0].id, finalProfile))
//         .then(()=> console.log("finally, i have all the profiles"));