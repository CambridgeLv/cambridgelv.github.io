document.addEventListener('copy',function (e) {
    var selectedText = window.getSelection().toString();
    var copyrightText = "\n\n ljq test\nhaha";
    var newText = selectedText + copyrightText;

    e.clipboardData.setData('text/plain', newText);
    e.preventDefault();
});