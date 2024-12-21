const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const button = document.getElementById("btn")

async function query() {

    image.src = "C:/Users/hardi/Downloads/CS(EH)/AI/projects/Text To Image Generator (js)/loading.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: "Bearer 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",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click',async function () {
 
    query().then((response) => {
        const objectURL = URL.createObjectURL(response)
        image.src = objectURL
    });

})
