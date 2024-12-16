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
    widget.style.zIndex = '9999';
    document.body.appendChild(widget);

    // Add meta tags
    var meta1 = document.createElement('meta');
    meta1.name = 'viewport';
    meta1.content = 'width=device-width,initial-scale=1';
    document.head.appendChild(meta1);

    var meta2 = document.createElement('meta');
    meta2.name = 'theme-color';
    meta2.content = '#000000';
    document.head.appendChild(meta2);

    // Add favicon
    var favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'https://leapthelimit.github.io/finlit-widget/favicon.ico';
    document.head.appendChild(favicon);

    // Add manifest
    var manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = 'https://leapthelimit.github.io/finlit-widget/manifest.json';
    document.head.appendChild(manifest);

    // Add CSS
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.12c73e1d.css';
    document.head.appendChild(styles);

    // Add Montserrat font
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(font);

    // Add all chunk scripts
    var chunkScript = document.createElement('script');
    chunkScript.src = 'https://leapthelimit.github.io/finlit-widget/static/js/845.6f7862ba.chunk.js';
    document.body.appendChild(chunkScript);

    // Add main script last
    var mainScript = document.createElement('script');
    mainScript.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.9dcff789.js';
    mainScript.defer = true;
    document.body.appendChild(mainScript);

    console.log('Widget script finished initial setup');
})();
