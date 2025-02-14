(function() {
    console.log('Widget script starting...');

    // Create widget container
    const widget = document.createElement('div');
    widget.id = 'finlit-widget-container';
    widget.style.position = 'fixed';
    widget.style.bottom = '40px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '528px';
    widget.style.backgroundColor = '#f0f0f0'; // Light gray background
    widget.style.borderRadius = '16px';
    widget.style.overflow = 'hidden';
    widget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    document.body.appendChild(widget);
    console.log('Widget container created.');

    // Load required styles
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://cors-anywhere.herokuapp.com/https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    
    styles.onload = () => {
        console.log('CSS loaded successfully.');
        // Load required scripts
        loadScript('https://cors-anywhere.herokuapp.com/https://leapthelimit.github.io/finlit-widget/static/js/main.3f31f8e3.js');
    };

    styles.onerror = () => {
        console.error('Failed to load CSS. Please check the URL or your network connection.');
    };

    document.head.appendChild(styles);
    console.log('Stylesheet link added.');

    // Function to load scripts with error handling
    function loadScript(src) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
            console.log('Script loaded successfully:', src);
        };

        script.onerror = () => {
            console.error('Failed to load script:', src);
        };

        document.body.appendChild(script);
        console.log('Script tag added for:', src);
    }
})();
