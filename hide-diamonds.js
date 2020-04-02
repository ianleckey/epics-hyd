var diamondThumb = 'https://cdn.epics.gg/pack-template/05bb80b69c968b4bf6275d7f4dd0d7a51b46fa1f4d9f782adc6d32a68e8b1c63_thumb.png';

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) return

    for (var i = 0; i < mutation.addedNodes.length; i++) {
  		var node = mutation.addedNodes[i]
		  let storeh2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent === 'Diamond Pack 2020');
  		if(typeof storeh2 === 'object') {
  			return removeStoreDiamond(storeh2);
  		}
      let availh2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent === 'Available Packs');
      if(typeof availh2 === 'object') {
        return removeAvailPackDiamond(availh2);
      }
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false
})

function removeStoreDiamond(elh2) {
	elh2.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}

function removeAvailPackDiamond(elh2) {
  let img = elh2.nextSibling.querySelectorAll('img');
  if(img.length) {
    return img.forEach(function(imgEl) {
      if(imgEl.src == diamondThumb) {
        imgEl.parentElement.parentElement.remove();
        return true;
      }
    })
  }
}