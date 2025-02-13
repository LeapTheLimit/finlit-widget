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

    // Add CSS with public URL
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    document.head.appendChild(styles);

    // Add React with public URL
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.c40c8448.js';
    script.async = true;
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

    // Add version info for debugging
    console.log('Finlit Widget version: 2.0.0');
    console.log('Finlit Widget setup complete');
})();
