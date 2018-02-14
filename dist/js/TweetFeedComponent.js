"use strict";

var TweetFeedComponent = Vue.component("tweet-feed", {
	props: ["tweets", "hashtag", "timer"],
	template: "\n\t\t<div class=\"tweetfeed\">\n\t\t\t<hashtag-form @hashtagchanged=\"userChangedHashtag\"></hashtag-form>\n\t\t\t<selected-tweets :hashtag=\"hashtag\"></selected-tweets>\n\t\t\t<tweet-timer :timer=\"timer\"></tweet-timer>\n\t\t\t<ul class=\"tweets\">\n\t\t\t\t<li v-for=\"tweet in tweets\">\n\t\t\t\t\t{{tweet.text}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t",
	methods: {
		userChangedHashtag: function userChangedHashtag(enteredHashtag) {
			this.$emit("hashtagchanged", enteredHashtag);
		}
	}

});
//# sourceMappingURL=TweetFeedComponent.js.map
