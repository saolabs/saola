
(function() {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return; // Only run on local development
    }
    
    const ws = new WebSocket('ws://localhost:3300');
    
    ws.onmessage = function(event) {
        if (event.data === 'reload') {
            console.log('[DEV] Reloading page...');
            window.location.reload();
        }
    };
    
    ws.onerror = function() {
        console.log('[DEV] WebSocket connection failed');
    };
    
    ws.onclose = function() {
        // Reconnect after 1 second
        setTimeout(function() {
            window.location.reload();
        }, 1000);
    };
})();
