var context;

var editorModule = (function() {
    var editor;
    var textUpperCase = false;

    function init(){
        var elem = document.getElementById("fontSizeChanger");
        var s = "";
        for(var i = 1; i < 15; i++){
                    s = s + `<option value=${i}>${i}</option>`;
        }
        elem.innerHTML = s;
    }

    function editingMethods() {
        window.addEventListener("load", function(){
            editor = textingEditor.document;
            editor.designMode = "on";

            redaction();
            specialButtons();
            changeColor();
            linking();
            sizeChanger();

        }, false);
    };

    function redaction(){
        boldButton.addEventListener("click", function(){
                editor.execCommand("Bold", false, null);
            }, false);

            italicButton.addEventListener("click", function(){
                editor.execCommand("Italic", false, null);
            }, false);

            underlineButton.addEventListener("click", function(){
                editor.execCommand("Underline", false, null);
            }, false);

            strikeButton.addEventListener("click", function(){
                editor.execCommand("Strikethrough", false, null);
            }, false);
    }

    function specialButtons(){
        orderedListButton.addEventListener("click", function(){
                editor.execCommand("InsertOrderedList", false, "new" + Math.round(Math.random()));
            }, false);

            registerButton.addEventListener("click", function(){
                if(textUpperCase == false) {
                    editor.body.innerHTML = editor.body.innerHTML.toUpperCase();
                    textUpperCase = true;
                } else {
                    editor.body.innerHTML = editor.body.innerHTML.toLowerCase();
                    textUpperCase = false;
                }
            }, false);
    }


    function changeColor(){
        fontColor.addEventListener("change", function(event){
                editor.execCommand("Forecolor", false, event.target.value);
            }, false);

            highlightButton.addEventListener("change", function(event){
                editor.execCommand("BackColor", false, event.target.value);
            }, false);
    }

    function linking(){
            linkButton.addEventListener("click", function(){
                var url = prompt("Введіть адресу:", "http://");
                editor.execCommand("CreateLink", false, url);
            }, false);

            unlinkButton.addEventListener("click", function(){
                editor.execCommand("UnLink", false, null);
            }, false);
    }

    function sizeChanger() {
        fontSizeChanger.addEventListener("change", function(event){
                editor.execCommand("FontSize", false, event.target.value);
            }, false);
    }

    init();

    return {
        startEditing: function() {
            editingMethods();
        }
    };
}());

editorModule.startEditing();
