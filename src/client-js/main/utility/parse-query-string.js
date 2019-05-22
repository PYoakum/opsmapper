// client-side query string parsing function
// https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript

module.exports = (variable) => {
    let query = window.location.search.substring(1);
    let vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}
