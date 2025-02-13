(function() {
    console.log('Finlit Widget initializing...');

    // Create container with updated styling
    var widget = document.createElement('div');
    widget.id = 'root';
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.width = '360px';
    widget.style.height = '600px';
    widget.style.backgroundColor = 'black';
    widget.style.borderRadius = '16px';
    widget.style.overflow = 'hidden';
    widget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    widget.style.zIndex = '999999';
    document.body.appendChild(widget);

    // Function to log resource loading status
    function logResourceStatus(type, url, success) {
        console.log(`${type} ${success ? 'loaded' : 'failed to load'}: ${url}`);
    }

    // Add CSS with correct hash
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    styles.onload = function() {
        logResourceStatus('CSS', styles.href, true);
    };
    styles.onerror = function() {
        logResourceStatus('CSS', styles.href, false);
        // Try fallback
        styles.href = './static/css/main.479e324a.css';
    };
    document.head.appendChild(styles);

    // Add React bundle
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.96ea37cd.js';
    script.async = true;
    script.onload = function() {
        logResourceStatus('React bundle', script.src, true);
    };
    script.onerror = function() {
        logResourceStatus('React bundle', script.src, false);
        // Try fallback
        script.src = './static/js/main.96ea37cd.js';
    };
    document.body.appendChild(script);

    // Add close button
    var closeButton = document.createElement('button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '1000000';
    closeButton.innerHTML = '×';
    closeButton.onclick = function() {
        widget.style.display = 'none';
    };
    widget.appendChild(closeButton);

    // Add font
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(font);

    console.log('Finlit Widget version: 1.0.0');
    console.log('Finlit Widget setup complete');
})();
