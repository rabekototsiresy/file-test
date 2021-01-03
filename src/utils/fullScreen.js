 
    let elem = document.documentElement
    
    /* View in fullscreen */
   export function openFullscreen() {
    if (elem.requestFullscreen) {
    
        elem.requestFullscreen()
    
        } else if (elem.webkit) { 
            /* Safari */
            elem.webkitRequestFullScreen()
    
        } else if (elem.msRequestFullscreen) { 
            /* IE11 */
            elem.msRequestFullscreen();
    
        }
    }
    
    // /* Close fullscreen */
    export default function closeFullscreen() {
        if (document.exitFullscreen) {
    
            document.exitFullscreen();
        
        } else if (document.webkitExitFullscreen) { /* Safari */
    
            document.webkitExitFullscreen();
    
        } else if (document.msExitFullscreen) { /* IE11 */
    
            document.msExitFullscreen();
    
        }
    }