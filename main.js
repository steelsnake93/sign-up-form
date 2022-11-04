(function() {
    var form = document.getElementById ('password');
    addEvent(form, 'submit', function(e) {
        e.preventDefault();
        var elements = this.elements;
        var userName = elements.firstName.value;
        var msg = 'Welcome' + userName;
        document.getElementById('main').textContent = msg;
    });
}());



