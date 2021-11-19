const config = { host: "http://localhost:3002" };

export default function getHomeData() {
    return new Promise((resolve, reject) => {
        fetch(`${config.host}/api/home`)
        .then(res => res.json())
        .then(result => {
            resolve(result.cities)
        })
        .catch(error => {
            reject(error);
        })
    })
}