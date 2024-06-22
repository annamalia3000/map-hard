export default class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);

        this.userSettings = new Map();
    }

    setSetting(name, value) {
        const validSettings = {
            theme: ['dark', 'light', 'gray'],
            music: ['trance', 'pop', 'rock', 'chillout', 'off'],
            difficulty: ['easy', 'normal', 'hard', 'nightmare']
        };

        if (validSettings[name] && validSettings[name].includes(value)) {
            this.userSettings.set(name, value);
        } else {
            throw new Error(`Invalid setting value for ${name}: ${value}`);
        }
    }

    get settings() {
        const finalSettings = new Map(this.defaultSettings);

        this.userSettings.forEach((value, key) => {
            finalSettings.set(key, value);
        });

        return finalSettings;
    }
}


