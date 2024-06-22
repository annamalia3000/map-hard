import Settings from '../settings.js';

test('default settings', () => {
    let settings = new Settings;
    const defaultSettings = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
    ]);
    expect(settings.settings).toEqual(defaultSettings);
});


test.each([
    ['theme', 'dark'],
    ['theme', 'light'],
    ['theme', 'gray'],
    ['music', 'trance'],
    ['music', 'pop'],
    ['music', 'rock'],
    ['music', 'chillout'],
    ['music', 'off'],
    ['difficulty', 'easy'],
    ['difficulty', 'normal'],
    ['difficulty', 'hard'],
    ['difficulty', 'nightmare']
])('user settings %s to %s', (name, value) => {
    let settings = new Settings;
    settings.setSetting(name, value);
    const userValidSettings = {
        theme: ['dark', 'light', 'gray'],
        music: ['trance', 'pop', 'rock', 'chillout', 'off'],
        difficulty: ['easy', 'normal', 'hard', 'nightmare']
    };
    const expectedSettings = new Map([
        ['theme', name === 'theme' ? value : 'dark'],
        ['music', name === 'music' ? value : 'trance'],
        ['difficulty', name === 'difficulty' ? value : 'easy']
    ]);
    expect(settings.settings).toEqual(expectedSettings);
});

test('invalid setting value throws error', () => {
    let settings = new Settings;
    expect(() => settings.setSetting('theme', 'blue')).toThrow(Error);
    expect(() => settings.setSetting('music', 'classical')).toThrow(Error);
    expect(() => settings.setSetting('difficulty', 'impossible')).toThrow(Error);
});