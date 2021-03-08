function video2 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default source');
    const elVideo2 = document.querySelector('#video2');

    elVideo2.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo2.getAttribute('data-source');
        elVideo2.classList.add('visto');
        elVideo.load();
        elVideo.play();
    })
}
video2 ();

function video3 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default source');
    const elVideo3 = document.querySelector('#video3');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
    })
}
video3 ();

function video4 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default source');
    const elVideo3 = document.querySelector('#video4');

    const btn1 = document.getElementById('video2');
    const btn2 = document.getElementById('video3');
    const btn3 = document.getElementById('video4');

    const btn4 = document.getElementById('video5');
    const btn5 = document.getElementById('video6');
    const btn6 = document.getElementById('video7');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
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
    })
}
video4 ();

function video5 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default source');
    const elVideo3 = document.querySelector('#video5');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
    })
}
video5 ();

function video6 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default source');
    const elVideo3 = document.querySelector('#video6');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
    })
}
video6 ();

function video7 () {
    const elVideo = document.querySelector('#video-default')
    const elVideoSrc = document.querySelector('#video-default source');
    const elVideo3 = document.querySelector('#video7');

    elVideo3.addEventListener('click', () => {
        elVideo.classList.remove('hidden');
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        elVideoSrc.src = elVideo3.getAttribute('data-source');
        elVideo3.classList.add('visto');
        elVideo.load();
        elVideo.play();
    })
}
video7 ();

/* Recupera o tempo do vídeo */
// document.querySelector('#video-default').addEventListener('timeupdate', () => {
//   const falta = Math.round(document.querySelector('#video-default').duration) - 4;
  
//   if(Math.round(document.querySelector('#video-default').currentTime) >= falta) {
  	
//   }
// });

document.querySelector('#video-default').addEventListener('ended', () => {
    document.querySelector('.group-bt').classList.remove('hidden');
    document.querySelector('#video-default').classList.add('hidden');
    document.querySelector('#gamefication').classList.remove('hidden');
    document.querySelector('#gamefication').play();
});

document.querySelector('#video-gal').addEventListener('ended', () => {
    document.querySelector('#video-gal').load();
});

function videoGaleria1 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal source');
    const elVideoGal2 = document.querySelector('#vd1');

    elVideoGal2.addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
    })
}
videoGaleria1 ();

function videoGaleria2 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal source');
    const elVideoGal2 = document.querySelector('#vd2');

    elVideoGal2.addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
    })
}
videoGaleria2 ();

function videoGaleria3 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal source');
    const elVideoGal2 = document.querySelector('#vd3');

    elVideoGal2.addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
    })
}
videoGaleria3 ();

function videoGaleria4 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal source');
    const elVideoGal2 = document.querySelector('#vd4');

    elVideoGal2.addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
    })
}
videoGaleria4 ();

function videoGaleria5 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal source');
    const elVideoGal2 = document.querySelector('#vd5');

    elVideoGal2.addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
    })
}
videoGaleria5 ();

function videoGaleria6 () {
    const elVideoGal = document.querySelector('#video-gal');
    const elVideoGalSrc = document.querySelector('#video-gal source');
    const elVideoGal2 = document.querySelector('#vd6');

    elVideoGal2.addEventListener('click', () => {
        window.scrollTo(0, 0);
        document.querySelector('#gamefication').classList.add('hidden');
        document.querySelector('#gamefication').pause();
        document.querySelector('.group-bt').classList.add('hidden');
        document.querySelector('#video-default').classList.add('hidden');
        document.querySelector('#video-default').pause();
        elVideoGal.classList.remove('hidden');
        elVideoGalSrc.src = elVideoGal2.getAttribute('data-source');
        elVideoGal.load();
        elVideoGal.play();
    })
}
videoGaleria6 ();

function viewAll () {
    const elViewAll = document.querySelector('.bt-view');
    const dcViewAll = document.querySelector('.view');

    elViewAll.addEventListener('click', () => {
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