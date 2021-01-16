const defaultSettings = require('../default_settings.json');

const saveFile = (data, filename = 'file') => {
    if (typeof data === 'object') data = JSON.stringify(data, undefined, 4);

    const blob = new Blob([data], { type: 'text/json' });
    let e = document.createEvent('MouseEvents');
    let a = document.createElement('a');

    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');

    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
};

export default class SettingsFunctions {
    static exportSettings() {
        let settings = {};
        for (const key of Object.keys(localStorage)) {
            settings[key] = localStorage.getItem(key);
        }
        saveFile(settings, 'mue-settings.json');
    }

    static setItem(key, value) {
        const old = localStorage.getItem(key);
        let val = true;

        if (old !== null && !value) {
            if (old === 'true') {
                val = false;
            }

            if (old === 'false') {
                val = true;
            }
        }

        localStorage.setItem(key, val);
    }

    static setSearchEngine(input) {
        const searchEngineInput = document.getElementById('searchEngineInput');
        if (input === 'custom') {
            searchEngineInput.enabled = 'true';
            searchEngineInput.style.display = 'block';
        } else {
            searchEngineInput.style.display = 'none';
            searchEngineInput.enabled = 'false';
            localStorage.setItem('searchEngine', input);
        }
    }

    static saveStuff(hexDisabled) {
        localStorage.setItem('customcss', document.getElementById('customcss').value);

        if (document.getElementById('customBackgroundHex').value !== hexDisabled) {
            localStorage.setItem('customBackgroundColour', document.getElementById('customBackgroundHex').value);
        }

        if (document.getElementById('searchEngineInput').enabled === 'true') {
            const input = document.getElementById('customSearchEngine').value;
            if (input) {
                localStorage.setItem('searchEngine', 'custom');
                localStorage.setItem('customSearchEngine', input);
            }
        }

        window.location.reload();
    }

    static setDefaultSettings(reset) {
        localStorage.clear();
        defaultSettings.forEach((element) => localStorage.setItem(element.name, element.value));

        // Set theme depending on user preferred
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('darkTheme', true);
        } else {
            localStorage.setItem('darkTheme', false);
        }

        // Languages
        const languages = ['nl', 'no', 'fr', 'ru', 'es'];
        const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language;

        if (languages.includes(browserLanguage)) {
            localStorage.setItem('language', browserLanguage);
            document.documentElement.lang = browserLanguage;
        } else {
            localStorage.setItem('language', 'en');
        }

        if (reset) {
            localStorage.setItem('showWelcome', false);
        }

        // Finally we set this to true so it doesn't run the function on every load
        localStorage.setItem('firstRun', true);
        window.location.reload();
    }
}