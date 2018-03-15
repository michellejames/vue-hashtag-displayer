// "use strict";

const TWITTER_API_BASE = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php"; 

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent },
		{ path: '/about', component: AboutComponent },
		{ path: '/tweets', component: TweetFeedComponent },
		// { path: '/tweets', component: SelectedTweetsComponent },
		// { path: '/tweets', component: TimerComponent },
	]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		hashtag: "cats",
		tweets: [],
		timer: 20,
	},
	created: function() {
		// use created to do initial AJAX lookups
		let refreshTweets = setInterval(this.countdown, 1000);
	},
	methods: {
		countdown: function (enteredHashtag) {
			this.timer--;

			if (this.timer == 0) {
				this.timer = 20;

				this.getTweets();
			}
		},
		userChangedHashtag: function (enteredHashtag) {
			this.hashtag = enteredHashtag;
			this.getTweets();
		},
		getTweets: function() {
			if (!this.hashtag) {
				this.tweets = [];
				return;
			}
			var uri = TWITTER_API_BASE + '?op=search_tweets&q=' + encodeURIComponent(this.hashtag);
			console.log('getTweets', uri);
			axios.get(uri)
				.then((response) => {
					console.log(response);
					if (response && response.data && response.data.statuses) {
						this.tweets = response.data.statuses;
					} else {
						console.warn("Valid response from twitter api/proxy, but bad data");
						this.tweets = [];
					}
				})
				.catch((error) => {
					console.warn(error);
				});
		}
	}
});



