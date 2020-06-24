var storgae = {
    set(key,val) {
        localStorage.setItem(key,JSON.stringify(val));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        return localStorage.removeItem(key)
    }
}
module.exports = storage;