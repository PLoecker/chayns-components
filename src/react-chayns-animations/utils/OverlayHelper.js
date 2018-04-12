import * as chaynsCall from '../../utils/chayns/setOverlay';

const overlay = document.createElement('div');
let closeListener = null;

function initOverlay() {
    overlay.style.position = 'fixed';

    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';

    document.body.appendChild(overlay);
}

export function hideOverlay({ transitionTime, color } = {}) {
    chaynsCall.hideOverlay({
        color,
        transition: `${transitionTime}ms`,
        mode: 1,
    });

    overlay.style.transition = `background-color ${transitionTime || 0}ms ease`;

    window.setTimeout(() => {
        overlay.style.backgroundColor = 'transparent';
    }, transitionTime ? 10 : 0);

    window.setTimeout(() => {
        if(overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }, transitionTime || 0);
}

export function showOverlay({
    transitionTime,
    zIndex,
    color,
    onClose,
} = {}) {
    initOverlay();

    closeListener = onClose;

    chaynsCall.showOverlay({
        color,
        transition: `${transitionTime}ms`,
        mode: 1,
    }).then(() => {
        if(closeListener) {
            closeListener();
        }
    });

    overlay.style.zIndex = zIndex;
    overlay.style.transition = `background-color ${transitionTime || 0}ms ease`;
    overlay.onclick = () => {
        if(closeListener) {
            closeListener();
        }
    };

    window.setTimeout(() => {
        overlay.style.backgroundColor = color;
    }, transitionTime ? 10 : 0);
}

export default {
    showOverlay,
    hideOverlay,
};