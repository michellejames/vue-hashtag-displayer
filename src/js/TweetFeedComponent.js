var TweetFeedComponent = Vue.component("tweet-feed", {
	props: ["tweets", "hashtag", "timer"],
	template: `
		<div class="tweetfeed">
			<hashtag-form :hashtag="hashtag" @hashtagchanged="userChangedHashtag"></hashtag-form>
			<selected-tweets :hashtag="hashtag" :tweets="tweets"></selected-tweets>
			<tweet-timer :timer="timer"></tweet-timer>
			<ul class="tweets">
				<li v-for="tweet in tweets">
					{{tweet.text}}
				</li>
			</ul>
		</div>
	`,
	methods: {
		userChangedHashtag: function (enteredHashtag){
			this.$emit("hashtagchanged", enteredHashtag);
		}
	},

});
