//your JS code here. If required.

function Hello() {
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000);
	});
}
Hello().then((res)=>{
	document.getElementById("output").innerHTML=res;
})
