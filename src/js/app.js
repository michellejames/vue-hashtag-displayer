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
		let self = this;
		let countdown;

		let refreshTweets = setInterval(function(){
			if (self.timer > 0) {
				self.timer -= 1
			} else if (self.timer = 0) {
				self.getTweets();
				self.timer = 20;
			}
			// self.getTweets();
		}, 2000);

		// this.getTweets();
		// let countdown = setInterval(() => {
		// 	if (this.timer > 0 ) {
		// 		this.timer -= 1;
		// 	} 
		// 		this.getTweets();
		// 		this.timer = 20;
		// 	}
		// }, 1000);

	},
	// components: {
	//   'TweetFeedComponent': SelectedTweetsComponent,
	// },
	methods: {
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



