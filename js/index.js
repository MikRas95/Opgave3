Vue.createApp({
    data() {
        return {
            Word: null,
            Result: "",
            lowerCaseResult: "",
            UpperCaseResult: "",
            CapitalizedResult: "",
            EndCapitalizedResult: "",
            ReversedResult: ""
        }
    },
    methods: {
        showWord() {
            let text = this.Word
            let length = text.length

            this.Result = this.Word
            this.UpperCaseResult = this.Word.toUpperCase()
            this.LowerCaseResult = this.Word.toLowerCase()
            this.CapitalizedResult = this.Word.charAt(0).toUpperCase() + this.Word.slice(1)
            this.EndCapitalizedResult = this.Word.slice(0,-1) + this.Word.charAt(this.Word.length-1).toUpperCase()
            this.ReversedResult = this.Word.split("").reverse().join("")
        }
    }
}).mount("#app")