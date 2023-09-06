Array.prototype.saveInUrl = function(keyName){
    url.searchParams.set(keyName, JSON.stringify(this));
    history.pushState({}, '', url);
}
Array.prototype.restoreFromUrl = function(keyName){    
    const arrayString = urlParams.get(keyName);
    return JSON.parse(arrayString) || [];
}