var args = arguments[0] || {};


//////////
// Open //
//////////
function auto() {
	Auth.autoLogin({
		timeout: 5000,
		error: function() {
			Logger.warn("Failed to login");
			Router.go("/login");
		},
	});
}


if (OS_ANDROID) {
	UI.RootActivity = $.getView();
	UI.RootActivity.fbProxy = FB.createActivityWorker({ lifecycleContainer: UI.RootActivity });
	UI.RootActivity.addEventListener('open', auto);
	UI.RootActivity.open();
} else {
	auto();
}