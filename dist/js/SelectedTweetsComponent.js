"use strict";

var SelectedTweetsComponent = Vue.component("selected-tweets", {
	props: ["tweets", "hashtag"],
	template: "\n\t\t<div>\n\t\t\t<p>Showing {{tweets.length}} tweets containing \"{{hashtag}}\"</p>\n\t\t</div>\n\t",
	methods: {
		userChangedHashtag: function userChangedHashtag(enteredHashtag) {
			this.$emit("hashtagchanged", enteredHashtag);
		}
	}
});
//# sourceMappingURL=SelectedTweetsComponent.js.map
