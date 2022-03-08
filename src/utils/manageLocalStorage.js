export const getLocalStorage = (key) => {
	try {
		return JSON.parse(window.localStorage.getItem(key));
	} catch (error) {
		console.error('[ERROR]: ' + error);
	}
};
export const setLocalStorage = (key, value) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('[ERROR]: ' + error);
	}
};
export const startStorage = (key, username) => {
	const currentLS = getLocalStorage(key)
	if (!currentLS) {
		setLocalStorage(key, [{ name: username, score: 0 }])
	}
}