var allPages = [];

// Notes
{% for note in site.notes %}
allPages.push("{{ site.url }}{{ note.url }}");
{% endfor %}

function jekyllFixCaseSensitiveUrl() {
    var url = window.location.toString();
    
    if (url.slice(-1) === "/"){
        url = url.slice(0, -1);
    }
    
    var note = jekyllallPagesPages.map(function(value) {
        return value.toLowerCase();
    });
    var i = note.indexOf(url.toLowerCase());
    
    if (i !== -1) {
        window.location = allPages[i];
    }
}
window.onload = jekyllFixCaseSensitiveUrl;