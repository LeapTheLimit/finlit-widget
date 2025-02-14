(function() {
    // Create widget container
    const container = document.createElement('div');
    container.id = 'finlit-widget-container';
    document.body.appendChild(container);

    // Load required styles
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.8da595db.css';
    document.head.appendChild(styles);

    // Load required fonts
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(fonts);

    // Load widget script
    const script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.07479a87.js';
    script.async = true;
    document.body.appendChild(script);
})();
