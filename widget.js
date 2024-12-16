(function() {
    console.log('Widget script starting...');

    // First create container
    var widget = document.createElement('div');
    widget.id = 'root';
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '400px';
    widget.style.backgroundColor = '#f0f0f0';
    widget.style.border = '2px solid black';
    widget.style.zIndex = '9999';
    document.body.appendChild(widget);
    console.log('Container created');

    // Add CSS with error checking
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.12c73e1d.css';  // Updated file name
    styles.onload = function() {
        console.log('CSS loaded successfully');
    };
    styles.onerror = function() {
        console.error('CSS failed to load');
    };
    document.head.appendChild(styles);

    // Add React with error checking
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.9dcff789.js';  // Updated file name
    script.async = true;
    script.onload = function() {
        console.log('React script loaded successfully');
    };
    script.onerror = function() {
        console.error('React script failed to load');
    };
    document.body.appendChild(script);

    console.log('Widget script finished initial setup');
})();
