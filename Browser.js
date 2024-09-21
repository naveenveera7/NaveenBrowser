
function performSearch() {
    var query = document.getElementById("searchInput").value;
    
    if (query) {
        var searchUrl;
        var userAgent = navigator.userAgent;

                if (userAgent.includes("Edg")) {
                        searchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);
                } else if (userAgent.includes("Chrome")) {
                    searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
                } else {
                    searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
                }
                window.open(searchUrl, '_blank');
            } else {
                alert("Please enter something.");
            }
}

document.getElementById("searchBtn").addEventListener("click", function() {
    performSearch();
});

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

