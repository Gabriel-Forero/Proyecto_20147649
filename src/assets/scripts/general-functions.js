function showMessage(message)
{  
    document.querySelector("#messageText").innerHtml =message;
    let elems = document.querySelectorAll('#messageModal');
    let instance= M.Modal.init(elems, {});
    instance.open();   
};

