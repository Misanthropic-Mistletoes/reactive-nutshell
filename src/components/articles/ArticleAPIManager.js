const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/articles`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newEvent) {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(data => data.json())
  }
}