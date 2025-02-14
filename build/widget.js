(function() {
    console.log('Widget script starting...');

    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded event fired');

        // Create container
        var widget = document.createElement('div');
        widget.id = 'root';
        widget.style.position = 'fixed';
        widget.style.bottom = '40px';
        widget.style.right = '20px';
        widget.style.width = '300px';
        widget.style.height = '528px';
        widget.style.backgroundColor = 'transparent';
        widget.style.border = 'none';
        widget.style.zIndex = '9999';
        widget.style.borderRadius = '16px';
        widget.style.overflow = 'hidden';
        widget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';

        try {
            document.body.appendChild(widget);
            console.log('Container created and appended to body');
        } catch (error) {
            console.error('Error appending widget to body:', error);
        }

        // Add CSS with error checking
        var styles = document.createElement('link');
        styles.rel = 'stylesheet';
        styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
        styles.onload = function() {
            console.log('CSS loaded successfully');
        };
        styles.onerror = function(e) {
            console.error('CSS failed to load:', e);
        };

        try {
            document.head.appendChild(styles);
            console.log('CSS link appended to head');
        } catch (error) {
            console.error('Error appending CSS link to head:', error);
        }

        // Add React with error checking
        var script = document.createElement('script');
        script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.c40c8448.js';
        script.async = true;
        script.onload = function() {
            console.log('React script loaded successfully');
        };
        script.onerror = function(e) {
            console.error('React script failed to load:', e);
        };

        try {
            document.body.appendChild(script);
            console.log('React script appended to body');
        } catch (error) {
            console.error('Error appending React script to body:', error);
        }

        // Add error handling
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            console.error('Widget error:', msg, url, lineNo, columnNo, error);
            return false;
        };

        console.log('Widget script finished initial setup');
    });
})();
