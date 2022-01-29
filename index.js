$(function () {
    function display(bool) {
    if (bool) {
        $("body").show();
        $("#haxx").show();
    } else {
        $("body").hide();
        $("#haxx").hide();
    }
}

display(false)

window.addEventListener('message', function(event) {

        var item = event.data;

        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }

        haxxPoints(event.data);
        haxxkillanddeathPoints(event.data);
        haxxnvector3Points(event.data);

    })
})

function haxxClose(){
    $.post('http://haxx_points/haxxcloseButton');
}

function haxxCopy(){
    const copyText = document.getElementById("haxxPoints").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

function haxxkillanddeathCopy(){
    const copyText = document.getElementById("haxxkillPoints").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

function haxxvector3Copy(){
    const copyText = document.getElementById("haxxdeathPoints").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

function haxxPoints(data) {

	if (data.type === 'haxx') {
        haxxPointsStart(data);
    }

}

function haxxkillanddeathPoints(data) {

	if (data.type === 'killanddeath') {
        haxxPointskillanddeathStart(data);
    }

}

function haxxnvector3Points(data) {

	if (data.type === 'vector3') {
        haxxPointsvector3Start(data);
    }

}

function haxxPointsStart(data){
    document.querySelector("#haxxPoints").textContent = data.text;
}

function haxxPointskillanddeathStart(data){
    document.querySelector("#haxxkillanddeathPoints").textContent = data.text;
}

function haxxPointsvector3Start(data){
    document.querySelector("#haxxvector3Points").textContent = data.text;
}