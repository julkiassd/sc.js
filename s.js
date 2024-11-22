// Fungsi untuk mendapatkan parameter query dari URL
function getQueryParam(paramName) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
}

// Ambil parameter 's' dari URL
let s = getQueryParam('s');

// Fungsi untuk membuka tautan berdasarkan perangkat
function openLinkBasedOnDevice(url) {
    var userAgent = navigator.userAgent;

    if (/(android)/i.test(userAgent)) {
        try {
            // Coba buka dengan intent di perangkat Android
            window.location.href = "intent://" + url.replace(/^https?:\/\//, '') + "#Intent;scheme=https;package=com.android.chrome;end;";
        } catch (error) {
            console.error("Gagal membuka dengan intent:", error);
            window.location.href = url; // Jika gagal, fallback ke URL biasa
        }
    } else if (/(iphone|ipad|ipod)/i.test(userAgent)) {
        // Buka di perangkat iOS
        window.location.href = url;
    } else {
        // Buka di perangkat lainnya (desktop, dll.)
        window.location.href = url;
    }
}



    var targetUrl = s; 


        openLinkBasedOnDevice(targetUrl);
 

