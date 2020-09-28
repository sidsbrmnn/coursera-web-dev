(function() {
    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    names.forEach(function(name) {
        if (name.toLowerCase().startsWith('j')) {
            SpeakGoodBye.speak(name);
        } else {
            SpeakHello.speak(name);
        }
    });
})();
