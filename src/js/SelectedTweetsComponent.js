var SelectedTweetsComponent = Vue.component("selected-tweets", {
	props: ["hashtag"],
	template: `
		<div>
			<p v-bind:hashtag="hashtag">15 tweets containing {{hashtag}}</p>
		</div>
	`,
	methods: {
		userChangedHashtag: function (enteredHashtag){
			this.$emit("hashtagchanged", enteredHashtag);
		}
	},
});
