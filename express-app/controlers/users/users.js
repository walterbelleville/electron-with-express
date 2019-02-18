'use strict';

exports.GenerateHTML = function GenerateHTML(usersName) {
    
    let tag = "";
    
    tag += "<h1>This is the generated HTML</h1>";
    tag += "<p>" + usersName + "</p>";

    return tag;
}