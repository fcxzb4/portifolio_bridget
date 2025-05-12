let actual_banner = 1;
const qnt_banner = 3;

export function switchBanner(n_bannner) {
    let banners = document.getElementById('banners')
    banners.style.left = `-${n_bannner - 1}00vw`;
    actual_banner = n_bannner

    for(let i = 1; i <= qnt_banner; i++){
        let btn = document.getElementById(`btn_banner_${i}`);
        if( i == n_bannner){
            btn.style.transform = 'scale(1.2)';
        }else{
            btn.style.transform = 'scale(1)';
        }
    }
};

setInterval(() => {
    if (actual_banner >= qnt_banner) {
        actual_banner = 0;
    }
    switchBanner(actual_banner + 1);
}, 3000);