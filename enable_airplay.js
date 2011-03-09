var videoElements = document.getElementsByTagName("video");
for(var index = 0; index < videoElements.length; index++) {
  videoElements[index].setAttribute('x-webkit-airplay', 'allow');
};

var embedElements = document.getElementsByTagName("embed");
for(var index = 0; index < videoElements.length; index++) {
  embedElements[index].setAttribute('airplay', 'allow');
};
