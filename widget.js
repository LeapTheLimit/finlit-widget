(function() {
    console.log('Widget script starting...');

    // First create container
    var widget = document.createElement('div');
    widget.id = 'root';
    widget.style.position = 'fixed';
    widget.style.bottom = '40px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '528px';  // 480px + 10%
    widget.style.backgroundColor = '#f0f0f0'; // Light gray background to see if it's there
    widget.style.border = '2px solid black';  // Border to make it visible
    widget.style.zIndex = '9999';
    widget.style.borderRadius = '16px';
    widget.style.overflow = 'hidden';
    widget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    document.body.appendChild(widget);
    console.log('Container created');

    // Add CSS with error checking
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    styles.onload = function() {
        console.log('CSS loaded successfully');
    };
    styles.onerror = function() {
        console.error('CSS failed to load');
    };
    document.head.appendChild(styles);

    // Add React with error checking
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.3f31f8e3.js';
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