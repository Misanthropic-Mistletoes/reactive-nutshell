// This module handles all calls to our api
// authors:  Caroline Brownlee, Bito Mann, Julian Garcia, Sam Pita //

const remoteURL = "http://localhost:5002"
// TableName = array (events, tasks, messages, articles, friends, users).

export default {
    // This fetch call gets one object from tableName.
    get(tableName, id) {
        return fetch(`${remoteURL}/${tableName}/${id}`).then(result => result.json())
    },
    // This fetch call gets all objects from tableName.
    getAll(tableName) {
        return fetch(`${remoteURL}/${tableName}`).then(result => result.json())
    },
    // This fetch call uses _expand to get all objects including the name associated with the userId.
    getAllWithUserNames(tableName) {
        return fetch(`${remoteURL}/${tableName}?_expand=user`).then(result => result.json())
    },

    delete(tableName, id) {
        // This fetch call grabs the id of a single object and deletes it from tableName. 
        return fetch(`${remoteURL}/${tableName}/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    // This fetch call posts a new object to tableName.  
    post(tableName, newEvent) {
        return fetch(`${remoteURL}/${tableName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(data => data.json())
    },
    getLoggedInUser(email) {
        return fetch(`${remoteURL}/users?email=${email}`)
            .then(response => response.json())
    },
    getUserData() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json())
    },
    createNewUser(user) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(results => results.json())
    },
    checkUser(email, password) {
        return fetch(`${remoteURL}/users?email=${email}&password=${password}`)
            .then(response => response.json())
    }
}

// const remoteURL = "http://localhost:5002"

// export default {

//     checkAdmin(username, email, password) {
//         return fetch(`${remoteURL}/admins?username=${username}&email=${email}&password=${password}`)
//             .then(response => response.json())
//     },
//     getUserData() {
//         return fetch(`${remoteURL}/users`)
//             .then(response => response.json())
//     },
//     createNewAdmin(admin) {
//         return fetch (`${remoteURL}/admins`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(admin)
//         }).then(results => results.json()) 
//     }

// }