(function() {
    // Create the widget container with visible styles
    var widget = document.createElement('div');
    widget.id = 'root'; // This is important for React
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '400px';
    widget.style.zIndex = '9999';
    document.body.appendChild(widget);

    // Add CSS
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.8da595db.css';
    document.head.appendChild(styles);

    // Add React
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.07479a87.js';
    script.async = true;
    document.body.appendChild(script);

    // Log for debugging
    console.log('Widget container created');
})();
