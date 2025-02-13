(function() {
    console.log('Widget script starting...');

    // Create container
    var widget = document.createElement('div');
    widget.id = 'root';
    widget.style.position = 'fixed';
    widget.style.bottom = '40px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '528px';
    widget.style.backgroundColor = 'transparent';
    widget.style.border = 'none';
    widget.style.zIndex = '9999';
    widget.style.borderRadius = '16px';
    widget.style.overflow = 'hidden';
    widget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    document.body.appendChild(widget);
    console.log('Container created');

<<<<<<< HEAD
    // Add media preload
    var mediaFiles = [
        'chat.9852bbd49db43ab5ba6c39258c8e5f42.svg',
        'circleDiv.cf0e90a4f080ecaf1bc910140b0576bd.svg',
        'Closed.0a7e1bfe83eb8fcad1b4ab33ff35a996.svg',
        'game.64a20cb10b927a4036c3baaed638c130.svg',
        'logo.8562c214b741e5bde7af390722764cda.svg',
        'mic.cc6bbaec2dbe3cac78dcaca5160d0a7a.svg',
        'show.044c5aec5ea62977acb394b98fa3bbf9.svg',
        'start.ac15180422b613275ca6853eb504839a.svg'
    ];

    mediaFiles.forEach(function(file) {
        var link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = 'https://leapthelimit.github.io/finlit-widget/static/media/' + file;
        document.head.appendChild(link);
    });

=======
>>>>>>> f7b53b8d7a043b023e3209e28c2d1f05363d58c6
    // Add CSS with error checking
    var styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://leapthelimit.github.io/finlit-widget/static/css/main.479e324a.css';
    styles.onload = function() {
        console.log('CSS loaded successfully');
    };
    styles.onerror = function(e) {
        console.error('CSS failed to load:', e);
    };
    document.head.appendChild(styles);

    // Add React with error checking
    var script = document.createElement('script');
    script.src = 'https://leapthelimit.github.io/finlit-widget/static/js/main.c40c8448.js';
    script.async = true;
    script.onload = function() {
        console.log('React script loaded successfully');
    };
    script.onerror = function(e) {
        console.error('React script failed to load:', e);
    };
    document.body.appendChild(script);

    // Add error handling
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        console.error('Widget error:', msg, url, lineNo, columnNo, error);
        return false;
    };

    console.log('Widget script finished initial setup');
})();
