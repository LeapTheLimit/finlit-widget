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

    // Function to load resources with retries
    function loadResource(type, url, maxRetries = 3) {
        let retries = 0;
        
        function tryLoad() {
            return new Promise((resolve, reject) => {
                const element = type === 'css' 
                    ? document.createElement('link')
                    : document.createElement('script');

                if (type === 'css') {
                    element.rel = 'stylesheet';
                    element.href = url;
                } else {
                    element.src = url;
                    element.async = true;
                }

                element.onload = () => resolve(element);
                element.onerror = (e) => {
                    console.error(`Failed to load ${type} (attempt ${retries + 1}):`, url);
                    if (retries < maxRetries) {
                        retries++;
                        setTimeout(tryLoad, 1000 * retries); // Exponential backoff
                    } else {
                        reject(e);
                    }
                };

                if (type === 'css') {
                    document.head.appendChild(element);
                } else {
                    document.body.appendChild(element);
                }
            });
        }

        return tryLoad();
    }

    // Load CSS and JS with proper error handling
    Promise.all([
        loadResource('css', 'https://leapthelimit.github.io/finlit-widget/static/css/main.45aa36f4.css'),
        loadResource('js', 'https://leapthelimit.github.io/finlit-widget/static/js/main.96ea37cd.js')
    ]).then(() => {
        console.log('All resources loaded successfully');
    }).catch(error => {
        console.error('Failed to load some resources:', error);
    });

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
