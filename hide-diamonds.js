var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) return

    for (var i = 0; i < mutation.addedNodes.length; i++) {
  		var node = mutation.addedNodes[i]
		let elh2 = Array.from(document.querySelectorAll('h2'))
  		.find(el => el.textContent === 'Diamond Pack 2020');
  		if(typeof elh2 === 'object') {
  			return removeDiamond(elh2);
  		}
    }
  })
})

observer.observe(document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
})

function removeDiamond(elh2) {
	elh2.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}
