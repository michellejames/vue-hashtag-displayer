"use strict";

var HashtagFormComponent = Vue.component("hashtag-form", {
	props: ["hashtag"],
	data: function data() {
		return {
			enteredHashtag: "#" + this.hashtag
		};
	},
	template: "\n\t\t<div>\n\t\t\t<input v-model=\"enteredHashtag\">\n\t\t</div>\n\t",

	watch: {
		enteredHashtag: function enteredHashtag() {

			if (this.enteredHashtag[0] != "#") {
				this.enteredHashtag = "#" + this.enteredHashtag;
			}

			if (this.enteredHashtag.length >= 4) {
				this.$emit("hashtagchanged", this.enteredHashtag); //custome event names alwasy lowercase
			}
		}
	}
});

//Other way of doing this:
// template: `
// 	<div>
// 		<input v-model="enteredHashtag" @keyup="userChangedHashtag">
// 	</div>
// `,

// methods: {
// 	userChangedHashtag: function (){
// 		console.log(this.enteredHashtag);

// 		//Hashtags changed and here is new hashtag:
// 		this.$emit("hashtagchanged", this.enteredHashtag);			//custome event names alwasy lowercase
// 	}
// }
//# sourceMappingURL=HashtagFormComponent.js.map
