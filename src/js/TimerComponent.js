var TimerComponent = Vue.component("tweet-timer", {
	props: ["timer"],
	template: `
		<div>
			<p>Reloading in {{timer}}s</p>
		</div>
	`,
});
