const selectors = {
    globalPopup: '.global-popup',
    globalPopupBoxClose: '.global-popup__box-close',
    globalPopupBoxAccept: '.global-popup__box-accept'
};

class GlobalPopup {
    constructor() {
        this.elements = this._getElements();
        if (Object.keys(this.elements).length === 0) return;
        this._setupEventListeners();
    }

    _getElements() {
        const globalPopup = document.querySelector(selectors.globalPopup);
        return globalPopup ? {
            globalPopup,
            globalPopupBoxClose: globalPopup.querySelector(selectors.globalPopupBoxClose),
            globalPopupBoxAccept: globalPopup.querySelector(selectors.globalPopupBoxAccept)
        } : {};
    }

    _setupEventListeners() {
        this.elements.globalPopupBoxClose.addEventListener('click', this._handleClosePopup);
        this.elements.globalPopupBoxAccept.addEventListener('click', this._handleClosePopup);
    }

    _closePopup() {
        const fadeTimer = activeFadeEffect ? 1000 : 0;

        this.elements.globalPopup.classList.add('popup--fade');

        setTimeout(() => {
            this.elements.globalPopup.remove();
        }, fadeTimer);
    }

    _handleClosePopup = () => {
        this._closePopup();
    }
}
