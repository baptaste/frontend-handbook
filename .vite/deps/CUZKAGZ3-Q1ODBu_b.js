//#region node_modules/.pnpm/@tanstack+devtools@0.14.0_@neodrag+core@3.0.0-next.11_csstype@3.2.3_solid-js@1.9.15/node_modules/@tanstack/devtools/dist/chunk/CUZKAGZ3.js
var keyboardModifiers = [
	"Alt",
	"Control",
	"Meta",
	"Shift",
	"CtrlOrMeta"
];
var initialState = {
	settings: {
		defaultOpen: false,
		hideUntilHover: false,
		position: "bottom-right",
		triggerMode: "fixed",
		triggerCoords: void 0,
		panelLocation: "bottom",
		openHotkey: ["Control", "~"],
		inspectHotkey: [
			"Shift",
			"Alt",
			"CtrlOrMeta"
		],
		requireUrlFlag: false,
		urlFlag: "tanstack-devtools",
		theme: typeof window !== "undefined" && typeof window.matchMedia !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
		sourceAction: "ide-warp",
		triggerHidden: false,
		customTrigger: void 0
	},
	state: {
		activeTab: "plugins",
		height: 400,
		layout: null,
		persistOpen: false
	}
};
//#endregion
export { keyboardModifiers as n, initialState as t };
