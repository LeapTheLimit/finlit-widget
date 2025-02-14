(function() {
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

    // Load required styles
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    styles.onload = () => {
        // Load required scripts
        const script = document.createElement('script');
        script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.3f31f8e3.js';
        script.async = true;
        document.body.appendChild(script);
    };
    styles.onerror = () => {
        console.error('Failed to load CSS');
    };
    document.head.appendChild(styles);
})();
