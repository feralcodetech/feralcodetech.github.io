let onMobile = false, onDesktop = false;

var userAgent = navigator.userAgent;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    onMobile = true;
} else {
    onDesktop = true;
}
