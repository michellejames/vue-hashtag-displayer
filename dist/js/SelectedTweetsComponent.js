"use strict";

var SelectedTweetsComponent = Vue.component("selected-tweets", {
	props: ["hashtag"],
	template: "\n\t\t<div>\n\t\t\t<p>Showing 15 tweets containing {{hashtag}}</p>\n\t\t</div>\n\t",
	methods: {
		userChangedHashtag: function userChangedHashtag(enteredHashtag) {
			this.$emit("hashtagchanged", enteredHashtag);
		}
	}
});
//# sourceMappingURL=SelectedTweetsComponent.js.map
