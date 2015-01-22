$(document).ready(function () {
    var modelHello = {
        title: "hellooo", body: "body line", sayGoodBye: "Good Bye"
    }

    var modelBye = {
        title: "This is the second Title", body: "second body", sayGoodBye: "Good Bye"
    }

    var result = Handlu.templates.hello(modelHello);
    result += Handlu.templates.bye(modelBye);
    $("#result").html(result);
});