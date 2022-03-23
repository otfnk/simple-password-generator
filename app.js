const passLength = document.querySelector('#range-l');
const idIn = document.querySelector('#in');
const reactionIn = document.querySelector('#reaction');
const giveBtn = document.querySelector('#give');
const copyBtn = document.querySelector('#copy');
const againBtn = document.querySelector('#back');
const backBtn = document.querySelector('#length-again');
const password = document.querySelector('#re-password');


function generatePassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordL = passLength.value;
    let password = "";
    for (let i = 0; i < passwordL; i++){
        let randomN = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomN, randomN + 1);
        document.querySelector('#re-password').innerText = password;
    }
}
const tl = gsap.timeline({});

    tl
        .fromTo('#p-gen', {width: '0', y: -100}, {width: '24rem', y: 0, ease: 'circ.out', duration: 1.2})
        .fromTo('#header1', {fontSize: '0'}, {fontSize: '2rem', ease: 'bounce'})
        .fromTo('#subheader', {fontSize: '0'}, {fontSize: '1.5rem', ease: 'bounce'})
        .fromTo('#length-container', {opacity: 0}, {opacity: 1, duration: 1.5}, 'myLabel')
        .fromTo('#give', {scale: 0}, {scale: 1, duration: .5}, 'myLabel')
        .fromTo('#reaction', {scale: 0}, {scale: 1, duration: .5}, 'myLabel')
        .to('#pass-q', {scale: 0, opacity: 0, delay: 2.5, y: -50}, 'myLabel')

    giveBtn.addEventListener('click', () => {
    const passLength = document.querySelector('#range-l');
        const tl = gsap.timeline({})
            tl
                .to('#p-gen', {scale: 0.7, ease: 'back.out', duration: 1.3, border:"8px solid #fbc02d"}, 'myLabel')
                .to('#header1', {scale: 0, duration: 0.2,}, 'myLabel')
                .to('#subheader', {scale: 0, duration: 0.2}, 'myLabel')
                .to('#range-l', {scale: 0, duration: 0.2}, 'myLabel')
                .to('#in', {scale: 0, duration: 0.2}, 'myLabel')
                .to('#pass-q', {scale: 0, duration: 0.3}, 'myLabel')
                .to('#p-gen', {scale: 1.25, ease: 'bounce', duration: 1.5, border:"8px solid #00e676"})
                .to('#p-gen', {scale: 1, ease: 'power1.out', border:'2px solid #E4E4E7'})
                .to('#reaction', {scale: 0, duration: 0.5}, 'myLabel')
                .to('#give', {scale: 0, duration: 0.6}, 'myLabel')
                .fromTo('#re-password', {opacity: 0, scale: 0}, {opacity: 1, scale: 0.89, ease: 'bounce.out', delay: 1.7, color: '#10B981'}, 'myLabel')
                .fromTo('#random-m', {scale: 0, display: 'none'}, {display: 'inline', scale: 1, duration: 1.5, ease: 'bounce'}, 'myLabel')
                .fromTo('#confetti-cont', {scale: 0, display: 'none'}, {display:'inline', y: 30, rotation: -10, repeat: 1, yoyo: true, scale: 1, duration: 1.3, ease: 'bounce.out', width: '8rem'}, 'myLabel')
                .fromTo('#shield-cont', {scale: 0, display: 'none'}, {scale: 1, y: 40, display: 'inline', ease: 'power4.out', width: '9rem'})
                .fromTo('#two-b', {scale: 0, display: 'none'}, {scale: 1, display: 'inline', y: -25, x: 105, delay: 3}, 'myLabel')
                .fromTo('#back', {scale: 0, display: 'none'}, {scale: 1, display: 'inline', delay: 3, x: 5}, 'myLabel')
    generatePassword();
        })

passLength.addEventListener('click', () => {
    idIn.innerText = passLength.value;
    if (passLength.value <= 10){
        idIn.style.color = '#E11D48';
        gsap.fromTo(idIn, {x: -17}, {x: 0, repeat: 6, yoyo: true, duration: 0.1});
        reactionIn.innerText = 'Do you feel safe? 🤔';
        gsap.fromTo(reactionIn, {x: -100}, {x: 0})
        document.getElementById('reaction').style.color = '#E11D48';
    } else if (passLength.value <= 20){
        gsap.fromTo(idIn, {x: -5}, {x: 0, repeat: 3, yoyo: true, duration: 0.1});
        gsap.fromTo(reactionIn, {x: 100}, {x: 0});
        idIn.style.color = '#F59E0B';
        reactionIn.innerText = 'Push the limits.';
        reactionIn.style.color = '#F59E0B';
    } else if (passLength.value < 30){
        gsap.fromTo(idIn, {y: -10}, {y: 0});
        gsap.fromTo(reactionIn, {y: 30, opacity: 0}, {opacity: 1, y: 0});
        idIn.style.color = '#10B981';
        reactionIn.innerText = 'Great.'
        reactionIn.style.color = '#10B981'
    } else {
        gsap.fromTo(idIn, {scale: 0.5}, {x: 0, color: '#064E3B', scale: 1, ease: 'power4.out'});
        gsap.fromTo(reactionIn, {y: 30, opacity: 0}, {opacity: 1, y: 0, ease: 'power4.out'});
        idIn.style.color = '#0F766E';
        reactionIn.innerText = 'Stay away, bad guys.';
        reactionIn.style.color = '#0F766E';
    }
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(password.innerText);
    copyBtn.innerText = 'Copied!'
})

againBtn.addEventListener('click', () => {
    const passLength = document.querySelector('#range-l');
    const tl = gsap.timeline({})
        tl
            .to('#p-gen', {scale: 0.7, ease: 'back.out', duration: 1.3, border:"5px solid #fbc02d"}, 'myLabel')
            .to('#header1', {scale: 0, duration: 0.2,}, 'myLabel')
            .to('#subheader', {scale: 0, duration: 0.2}, 'myLabel')
            .to('#range-l', {scale: 0, duration: 0.2}, 'myLabel')
            .to('#in', {scale: 0, duration: 0.2}, 'myLabel')
            .to('#pass-q', {scale: 0, duration: 0.3}, 'myLabel')
            .to('#p-gen', {scale: 1.25, ease: 'bounce', duration: 1.5, border:"5px solid #00e676"})
            .to('#p-gen', {scale: 1, ease: 'power1.out', border:'2px solid #E4E4E7'})
            .to('#reaction', {scale: 0, duration: 0.5}, 'myLabel')
            .to('#give', {scale: 0, duration: 0.6}, 'myLabel')
            .fromTo('#re-password', {opacity: 0, scale: 0}, {opacity: 1, scale: 0.89, ease: 'bounce.out', delay: 1.7, color: '#0F766E'}, 'myLabel')
            .fromTo('#random-m', {scale: 0, display: 'none'}, {display: 'inline', scale: 1, duration: 1.5, ease: 'bounce'}, 'myLabel')
            .fromTo('#confetti-cont', {scale: 0, display: 'none'}, {display:'inline', y: 30, rotation: -10, repeat: 1, yoyo: true, scale: 1, duration: 1.3, ease: 'bounce.out', width: '8rem'}, 'myLabel')
            .fromTo('#shield-cont', {scale: 0, display: 'none'}, {scale: 1, y: 40, display: 'inline', ease: 'power4.out', width: '10rem'})
    generatePassword();
    copyBtn.innerText = "Copy";
    
})

backBtn.addEventListener('click', () => {
    location.reload();
})