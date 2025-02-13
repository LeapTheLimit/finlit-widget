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

    // Add latest CSS with better error handling
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.45aa36f4.css';
    styles.onload = function() {
        console.log('Finlit CSS loaded successfully');
    };
    styles.onerror = function(e) {
        console.error('Failed to load Finlit CSS:', e);
        console.log('Attempted to load:', styles.href);
        styles.href = './static/css/main.45aa36f4.css';
    };
    document.head.appendChild(styles);

    // Add latest React bundle with better error handling
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.d51a8117.js';
    script.async = true;
    script.onload = function() {
        console.log('Finlit React bundle loaded successfully');
    };
    script.onerror = function(e) {
        console.error('Failed to load Finlit React bundle:', e);
        console.log('Attempted to load:', script.src);
        script.src = './static/js/main.d51a8117.js';
    };
    document.body.appendChild(script);

    // Add font
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(font);

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

    // Add version info for debugging
    console.log('Finlit Widget version: 1.0.0');
    console.log('Finlit Widget setup complete');
})();
