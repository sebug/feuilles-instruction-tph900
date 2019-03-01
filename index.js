const tphOverview = document.getElementsByClassName('tph900-overview')[0];
const displayScreen = tphOverview.getElementsByClassName('screen-active')[0];

let isOn = false;
let isSpeaking = false;


const toggleDisplayScreen = () => {
    const currentDisplay = displayScreen.getAttributeNS(null, 'display');
    if (currentDisplay === 'none') {
	displayScreen.setAttributeNS(null, 'display', 'block');
	affichageEnvoi.classList.add('clignotant');
	isOn = true;
    } else {
	displayScreen.setAttributeNS(null, 'display', 'none');
	affichageEnvoi.classList.remove('clignotant');
	isOn = false;
	isSpeaking = false;
    }
};



const powerbutton = tphOverview.getElementsByClassName('powerbutton')[0];
powerbutton.addEventListener('click',toggleDisplayScreen);

const affichageEnvoi = tphOverview.querySelector('rect.affichageenvoi');

const setSpeakingStyle = () => {
    if (isSpeaking) {
	affichageEnvoi.classList.remove('clignotant');
	affichageEnvoi.classList.add('parlant');
    } else {
	affichageEnvoi.classList.remove('parlant');
	affichageEnvoi.classList.add('clignotant');
    }
};

const speakerButton = tphOverview.querySelector('rect.speakerbutton');

const setIsSpeaking = () => {
    if (!isOn) {
        return;
    }
    isSpeaking = true;
    setSpeakingStyle();
};
const setIsNoLongerSpeaking = () => {
    if (!isOn) {
        return;
    }
    isSpeaking = false;
    setSpeakingStyle();
};
speakerButton.addEventListener('mousedown', setIsSpeaking);
speakerButton.addEventListener('mouseup', setIsNoLongerSpeaking);
speakerButton.addEventListener('touchstart', setIsSpeaking);
speakerButton.addEventListener('touchend', setIsNoLongerSpeaking);

const elementsFront = ['antenne', 'hautparleur', 'marchearret', 'ecran', 'microphone', 'retouraumodeveille', 'clavier', 'clavier-alphanumeriques'];

for (let frontElementKey of elementsFront) {
    const elementRect = tphOverview.querySelector('rect.' + frontElementKey);
    const elementText = tphOverview.querySelector('text.' + frontElementKey);
    elementRect.addEventListener('mouseenter', () => {
	elementText.classList.add('highlighted');
    });
    elementRect.addEventListener('mouseleave', () => {
	elementText.classList.remove('highlighted');
    });
}

const touchesCircle = tphOverview.querySelector('circle.touchesnavigation');
const touchesText = tphOverview.querySelector('text.touchesnavigation');
touchesCircle.addEventListener('mouseenter', () => {
    touchesText.classList.add('highlighted');
});
touchesCircle.addEventListener('mouseleave', () => {
    touchesText.classList.remove('highlighted');
});

document.querySelector('button.montrer-marche-arret').addEventListener('click', () => {
    powerbutton.classList.remove('montrer');
    setTimeout(() => {
	powerbutton.classList.add('montrer');
	powerbutton.style.animationPlayState = "running";
    }, 0);
});

document.querySelector('button.montrer-bouton-conversation').addEventListener('click', () => {
    speakerButton.classList.remove('montrer');
    setTimeout(() => {
	speakerButton.classList.add('montrer');
	speakerButton.style.animationPlayState = "running";
    }, 0);
});
