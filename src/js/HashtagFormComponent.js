var HashtagFormComponent = Vue.component("hashtag-form", {
	data: function (){
		return {
			enteredHashtag: "",
		}
	},
	template: `
		<div>
			<input v-model="enteredHashtag" placeholder="#cats">
		</div>
	`,

	watch: {
		enteredHashtag: function (){
			console.log(this.enteredHashtag);

			if(this.enteredHashtag[0] != "#") {
				this.enteredHashtag = "#" + this.enteredHashtag;
			}

			if ((this.enteredHashtag.length >= 4)) {
				this.$emit("hashtagchanged", this.enteredHashtag);			//custome event names alwasy lowercase
			}

			//Hashtags changed and here is new hashtag:
		}
	}
})



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