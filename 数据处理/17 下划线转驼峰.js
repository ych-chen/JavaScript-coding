

function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function (match) {
        return match.toUpperCase();
    });
}
