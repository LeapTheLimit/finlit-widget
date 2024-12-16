(function() {
    // First, let's make our container
    var container = document.createElement('div');
    container.id = 'root';  // Important: React needs this id
    document.body.appendChild(container);

    // Now add the main React script
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.07479a87.js';
    document.body.appendChild(script);

    // Add the styles
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.8da595db.css';
    document.head.appendChild(link);
})();
