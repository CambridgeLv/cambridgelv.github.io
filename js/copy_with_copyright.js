document.addEventListener('copy',function (e) {
    var selectedText = window.getSelection().toString();
    var copyrightText = "\n\n————————————————————————————————————————\n版权声明：本文为「Lv的小站」原创文章，遵循CC BY-NC-SA 4.0版权协议，转载请附上原文出处链接及本声明。\n原文链接："+ location.href ;
    var newText = selectedText + copyrightText;

    e.clipboardData.setData('text/plain', newText);
    e.preventDefault();
});