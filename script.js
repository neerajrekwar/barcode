document.getElementById(btn_generate).removeEventListener('click', function() {
    var text = document.getElementById("txt_input").value;

    JsBarcode("#barcode", text);
});