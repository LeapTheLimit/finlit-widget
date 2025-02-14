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
<<<<<<< HEAD
=======

    // Load required scripts with error checking
    const script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/(function() {
    console.log('Widget script starting...');

    // Create widget container
    var widget = document.createElement('div');
    widget.id = 'finlit-widget-container';
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

    // Load required styles with error checking
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    styles.onload = () => console.log('CSS loaded successfully');
    styles.onerror = () => console.error('CSS failed to load');
    document.head.appendChild(styles);

    // Load required scripts with error checking
    const script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.c4f2115a.js';
    script.async = true;
    script.onload = () => console.log('React script loaded successfully');
    script.onerror = () => console.error('React script failed to load');
    document.body.appendChild(script);

    console.log('Widget script finished initial setup');
})();';
    script.async = true;
    script.onload = () => console.log('React script loaded successfully');
    script.onerror = () => console.error('React script failed to load');
    document.body.appendChild(script);

    console.log('Widget script finished initial setup');
>>>>>>> eb485f738f7ffbadf650b64bb7386b9e7ccda1cd
})();
