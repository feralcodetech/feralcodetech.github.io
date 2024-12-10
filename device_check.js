let onDesktop = true

var userAgent = navigator.userAgent

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))
    onDesktop = false
