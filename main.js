var bootstrapjs=document.createElement("script")
var jquery=document.createElement("script")
var bootstrapcss=document.createElement("link")
bootstrapjs.src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
jquery.src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
bootstrapcss.rel="stylesheet"
bootstrapcss.href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
document.head.appendChild(jquery)
document.head.appendChild(bootstrapjs)
document.head.appendChild(bootstrapcss)
console.log("beautify web successful")