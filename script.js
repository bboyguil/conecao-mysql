function flashAtivo() {
    var hasFlash = false;
    try {
        var ao = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (ao) {
            hasFlash = !hasFlash;
        }
    } catch (e) {
        if (navigator.mimeTypes
            && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
            && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
            hasFlash = !hasFlash;
        }
    }
    return hasFlash;
};


if (flashAtivo()) {
   document.getElementById("model").style.display = "none";
} else {
   document.getElementById("model").style.display = "block";
}
document.getElementById("teste").onclick = function(){
    document.getElementsByClassName("arrow")[0].style.display = "block";
};