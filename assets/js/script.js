function video2 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default');
    const elVideo2 = document.querySelector('#video2');

    elVideo2.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo2.getAttribute('data-source');
        elVideo2.classList.add('visto');
        elVideo.load();
        elVideo.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
video2 ();

function video3 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default');
    const elVideo3 = document.querySelector('#video3');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
video3 ();

function video4 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default');
    const elVideo3 = document.querySelector('#video4');

    const btn1 = document.getElementById('video2');
    const btn2 = document.getElementById('video3');
    const btn3 = document.getElementById('video4');

    const btn4 = document.getElementById('video5');
    const btn5 = document.getElementById('video6');
    const btn6 = document.getElementById('video7');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
        btn1.classList.add('hidden');
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');

        btn4.classList.remove('hidden');
        btn5.classList.remove('hidden');
        btn6.classList.remove('hidden');
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
video4 ();

function video5 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default');
    const elVideo3 = document.querySelector('#video5');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
video5 ();

function video6 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default');
    const elVideo3 = document.querySelector('#video6');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
video6 ();

function video7 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default');
    const elVideo3 = document.querySelector('#video7');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
video7 ();


var timeout;
var downloadTimer;
var urlAtual = window.location.host;

document.querySelector('#video-default').addEventListener('ended', () => {
    document.querySelector('.video').classList.add('action-buttons');
    document.querySelector('.group-bt').classList.remove('hidden');
    document.querySelector('#video-default').classList.add('hidden');
    document.querySelector('#gamefication').classList.remove('hidden');
    document.querySelector('#gamefication').play();
    document.querySelector('.countdow').classList.remove('hidden');
    
    
        let timeleft = 10;
        downloadTimer = setInterval(function(){
            if(timeleft === 0){
                clearInterval(downloadTimer);
            }
            document.querySelector('.countdow').innerText = `Próximo vídeo em ${timeleft -= 1} segundos`;
        }, 1000);

    if(document.querySelector('#video-default').src == `${window.location.protocol}//${window.location.host}/assets/videos/video-8.mp4`) {
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    }
    
    timeout = setTimeout(function() {
        const expr = document.querySelector('#video-default').getAttribute('src');
        switch (expr) {
            case 'assets/videos/video-1.mp4':
                document.querySelector('#video-default').src= "assets/videos/video-2-3.mp4";
                document.querySelector('#video-default').play();
                document.querySelector('#video-default').classList.remove('hidden');
                document.querySelector('#gamefication').classList.add('hidden');
                document.querySelector('.group-bt').classList.add('hidden');
                document.querySelector('#gamefication').pause();
                document.querySelector('#video2').classList.add('visto');
                clearInterval(downloadTimer);
                document.querySelector('.countdow').classList.add('hidden');
                break;
            case 'assets/videos/video-2-3.mp4':
                document.querySelector('#video-default').src= "assets/videos/video-4.mp4";
                document.querySelector('#video-default').play();
                document.querySelector('#video-default').classList.remove('hidden');
                document.querySelector('#gamefication').classList.add('hidden');
                document.querySelector('.group-bt').classList.add('hidden');
                document.querySelector('#gamefication').pause();
                document.querySelector('#video3').classList.add('visto');
                document.querySelector('.countdow').classList.add('hidden');
                clearInterval(downloadTimer);
                break;
            case 'assets/videos/video-4.mp4':
                document.querySelector('#video-default').src= "assets/videos/video-5.mp4";
                document.querySelector('#video-default').play();
                document.querySelector('#video-default').classList.remove('hidden');
                document.querySelector('#gamefication').classList.add('hidden');
                document.querySelector('.group-bt').classList.add('hidden');
                document.querySelector('#video4').classList.add('visto');
                document.querySelector('#gamefication').pause();
                document.querySelector('.countdow').classList.add('hidden');
                const btn1 = document.getElementById('video2');
                const btn2 = document.getElementById('video3');
                const btn3 = document.getElementById('video4');

                const btn4 = document.getElementById('video5');
                const btn5 = document.getElementById('video6');
                const btn6 = document.getElementById('video7');

                btn1.classList.add('hidden');
                btn2.classList.add('hidden');
                btn3.classList.add('hidden');

                btn4.classList.remove('hidden');
                btn5.classList.remove('hidden');
                btn6.classList.remove('hidden');
                clearInterval(downloadTimer);
                break;
            case 'assets/videos/video-5.mp4':
                document.querySelector('#video-default').src= "assets/videos/video-6.mp4";
                document.querySelector('#video-default').play();
                document.querySelector('#video-default').classList.remove('hidden');
                document.querySelector('#gamefication').classList.add('hidden');
                document.querySelector('.group-bt').classList.add('hidden');
                document.querySelector('#video5').classList.add('visto');
                document.querySelector('#gamefication').pause();
                document.querySelector('.countdow').classList.add('hidden');
                clearInterval(downloadTimer);
                break;
            case 'assets/videos/video-6.mp4':
                document.querySelector('#video-default').src= "assets/videos/video-7.mp4";
                document.querySelector('#video-default').play();
                document.querySelector('#video-default').classList.remove('hidden');
                document.querySelector('#gamefication').classList.add('hidden');
                document.querySelector('.group-bt').classList.add('hidden');
                document.querySelector('#video6').classList.add('visto');
                document.querySelector('#gamefication').pause();
                document.querySelector('.countdow').classList.add('hidden');
                clearInterval(downloadTimer);
                break;
            case 'assets/videos/video-7.mp4':
                document.querySelector('#video-default').src= "assets/videos/video-8.mp4";
                document.querySelector('#video-default').play();
                document.querySelector('#video-default').classList.remove('hidden');
                document.querySelector('#gamefication').classList.add('hidden');
                document.querySelector('.group-bt').classList.add('hidden');
                document.querySelector('#video7').classList.add('visto');
                document.querySelector('#gamefication').pause();
                document.querySelector('.countdow').classList.add('hidden');
                clearInterval(downloadTimer);
                
                break;
        }
    }, 10000);
});

document.querySelector('#video-gal').addEventListener('ended', () => {
    document.querySelector('#video-gal').load();
});

const infosVd1 = document.querySelector('.vd1');
const infosVd2 = document.querySelector('.vd2');
const infosVd3 = document.querySelector('.vd3');
const infosVd4 = document.querySelector('.vd4');
const infosVd5 = document.querySelector('.vd5');
const infosVd6 = document.querySelector('.vd6');
const infosVd7 = document.querySelector('.vd7');

function videoGaleria1 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd1');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.remove('hidden');
        infosVd2.classList.add('hidden');
        infosVd3.classList.add('hidden');
        infosVd4.classList.add('hidden');
        infosVd5.classList.add('hidden');
        infosVd6.classList.add('hidden');
        infosVd7.classList.add('hidden');

        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria1 ();

function videoGaleria2 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd2');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.add('hidden');
        infosVd2.classList.remove('hidden');
        infosVd3.classList.add('hidden');
        infosVd4.classList.add('hidden');
        infosVd5.classList.add('hidden');
        infosVd6.classList.add('hidden');
        infosVd7.classList.add('hidden');

        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria2 ();

function videoGaleria3 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd3');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.add('hidden');
        infosVd2.classList.add('hidden');
        infosVd3.classList.remove('hidden');
        infosVd4.classList.add('hidden');
        infosVd5.classList.add('hidden');
        infosVd6.classList.add('hidden');
        infosVd7.classList.add('hidden');

        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria3 ();

function videoGaleria4 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd4');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.add('hidden');
        infosVd2.classList.add('hidden');
        infosVd3.classList.add('hidden');
        infosVd4.classList.remove('hidden');
        infosVd5.classList.add('hidden');
        infosVd6.classList.add('hidden');
        infosVd7.classList.add('hidden');
        
        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria4 ();

function videoGaleria5 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd5');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.add('hidden');
        infosVd2.classList.add('hidden');
        infosVd3.classList.add('hidden');
        infosVd4.classList.add('hidden');
        infosVd5.classList.remove('hidden');
        infosVd6.classList.add('hidden');
        infosVd7.classList.add('hidden');

        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria5 ();

function videoGaleria6 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd6');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.add('hidden');
        infosVd2.classList.add('hidden');
        infosVd3.classList.add('hidden');
        infosVd4.classList.add('hidden');
        infosVd5.classList.add('hidden');
        infosVd6.classList.remove('hidden');
        infosVd7.classList.add('hidden');

        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria6 ();

function videoGaleria7 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal');
    const elVideoGal2 = document.querySelector('#vd7');

    elVideoGal2.addEventListener('click', () => {
        infosVd1.classList.add('hidden');
        infosVd2.classList.add('hidden');
        infosVd3.classList.add('hidden');
        infosVd4.classList.add('hidden');
        infosVd5.classList.add('hidden');
        infosVd6.classList.add('hidden');
        infosVd7.classList.remove('hidden');

        window.scrollTo(0, 0);
        document.querySelector('.video').classList.remove('action-buttons');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
        clearTimeout(timeout);
        clearInterval(downloadTimer);
        document.querySelector('.countdow').classList.add('hidden');
    })
}
videoGaleria7 ();

function viewAll () {
    const elViewAll = document.querySelector('.bt-view');
    const dcViewAll = document.querySelector('.view');

    elViewAll.addEventListener('click', () => {
        document.querySelector('.bt-viewall').classList.add('hidden');
        dcViewAll.classList.remove('hidden');
        elViewAll.classList.add('hidden');
    });
}
viewAll ();

$('.owl-carousel').owlCarousel({
    margin:40,
    loop:false,
    autoWidth:true,
    items:4
})