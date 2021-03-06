const allowed = ["iframe", "object", "param", "embed"];
const tag_re = /<\s*\/?\s*([a-z]+)(\s*([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^"'>]*))*\s*>/ig;

function filter(str) {
    str = str.replace(tag_re, function (match, tag) {
        if(!~allowed.indexOf(tag.toLowerCase())) {
            return match.replace("<", "&lt;").replace(">", "&gt;");
        }
        return match;
    });
    str = str.replace(/(\bon\w*\s*=\s*('[^']*'|"[^"]"|[^\s><]*))/ig, function () {
        return "";
    });
    return str;
}

exports.filter = filter;
