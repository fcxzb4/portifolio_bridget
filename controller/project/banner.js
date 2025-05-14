let actual_banner = 1;
const qnt_banner = 4;

export function switchBanner(n_bannner) {
    let banners = document.getElementById('banners')
    banners.style.left = `-${n_bannner - 1}00vw`;
    actual_banner = n_bannner
};

setInterval(() => {
    if (actual_banner >= qnt_banner) {
        actual_banner = 0;
    }
    switchBanner(actual_banner + 1);
}, 5000);