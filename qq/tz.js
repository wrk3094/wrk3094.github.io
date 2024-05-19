function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomNumber(1, 1000);

function redirectToSubpage(id) {
  window.location.href = "http://svgcc.cc/qq/?id=" + id + "&" + randomNumber;
}

var urlid = getURLParameter('id');
if (urlid) {
  console.log("URL parameter 'id' value:", urlid);
  redirectToSubpage(urlid);
}
