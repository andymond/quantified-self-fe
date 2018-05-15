const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:3000`
  } else {
    return `https://infinite-wave-61389.herokuapp.com` // phoenix backend host
    // return `https://calm-harbor-70156.herokuapp.com` //node backend host
    // return `https://murmuring-earth-90329.herokuapp.com` //rails backend host
  }

}

module.exports = {
  baseURL
}
