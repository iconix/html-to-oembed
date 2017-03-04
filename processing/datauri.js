// http://stackoverflow.com/a/9239272
var toDataUri = function(html) {
    html = html.replace(/\s{2,}/g, '')   // <-- Replace all consecutive spaces, 2+ (unsafe if html contains <pre> tag)
           .replace(/%/g, '%25')     // <-- Escape %
           .replace(/&/g, '%26')     // <-- Escape &
           .replace(/#/g, '%23')     // <-- Escape #
           .replace(/"/g, '%22')     // <-- Escape "
           .replace(/'/g, '%27');    // <-- Escape ' (to be 100% safe)

    return 'data:text/html;charset=UTF-8,' + html;
}

module.exports = toDataUri;
