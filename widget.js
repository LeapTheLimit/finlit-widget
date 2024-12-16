(function() {
    console.log('Widget script starting...');

    // Fix base URL for all assets
    var baseUrl = 'https://leapthelimit.github.io/finlit-widget';

    // First create container
    var widget = document.createElement('div');
    widget.id = 'root';
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '400px';
    widget.style.zIndex = '9999';
    document.body.appendChild(widget);

    // Add base tag for relative URLs
    var base = document.createElement('base');
    base.href = baseUrl;
    document.head.appendChild(base);

    // Add CSS
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = baseUrl + '/static/css/main.12c73e1d.css';
    document.head.appendChild(styles);

    // Add Montserrat font
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(font);

    // Add chunk script
    var chunkScript = document.createElement('script');
    chunkScript.src = baseUrl + '/static/js/845.6f7862ba.chunk.js';
    document.body.appendChild(chunkScript);

    // Add main script with CORS headers
    var mainScript = document.createElement('script');
    mainScript.src = baseUrl + '/static/js/main.9dcff789.js';
    mainScript.defer = true;
    mainScript.crossOrigin = 'anonymous';
    document.body.appendChild(mainScript);

    // Add CORS meta tag
    var corsMeta = document.createElement('meta');
    corsMeta.httpEquiv = 'Content-Security-Policy';
    corsMeta.content = "default-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: blob:;";
    document.head.appendChild(corsMeta);

    console.log('Widget script finished initial setup');
})();
