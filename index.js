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

speakerButton.addEventListener('mousedown', () => {
    if (!isOn) {
        return;
    }
    isSpeaking = true;
    setSpeakingStyle();
});
speakerButton.addEventListener('mouseup', () => {
    if (!isOn) {
	return;
    }
    isSpeaking = false;
    setSpeakingStyle();
});

