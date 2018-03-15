var SelectedTweetsComponent = Vue.component("selected-tweets", {
	props: ["tweets", "hashtag"],
	template: `
		<div>
			<p>Showing {{tweets.length}} tweets containing "{{hashtag}}"</p>
		</div>
	`,
	methods: {
		userChangedHashtag: function (enteredHashtag){
			this.$emit("hashtagchanged", enteredHashtag);
		}
	},
});
