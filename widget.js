(function() {
    // Create a visible element
    var widget = document.createElement('div');
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.width = '300px';
    widget.style.height = '400px';
    widget.style.backgroundColor = 'black';
    widget.style.borderRadius = '10px';
    widget.style.zIndex = '9999';
    
    // Add it to the page
    document.body.appendChild(widget);
    
    // Log something so we know it's running
    console.log('Widget script is running!');
})();
