const shortcutsListener = require('./shortcut');
const viewsListener = require('./views');

module.exports.registerListeners = (app) => {
	shortcutsListener.register(app);
	viewsListener.register(app);
};
