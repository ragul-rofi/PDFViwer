const url = 'ur-url or ur-file.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null,
    scale = 1,
    canvas = document.getElementById('pdf-render'),
    ctx = canvas.getContext('2d');

pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;
    document.getElementById('page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum);
});
function renderPage(num){
    pageIsRendering = true;

    pdfDoc.getPage(num).then((page) => {
        const viewport = page.getViewport({scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport
        };

        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
            pageIsRendering = false;

            if(pageNumIsPending !== null){
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });
        document.getElementById('page-num').textContent = num;
    });
}

function queueRenderPage(num){
    if (pageIsRendering){
        pageNumIsPending = num;
    }
    else{
        renderPage(num);
    }
}
document.getElementById('p-page').addEventListener('click',() => {
    if (pageNum <= 1){
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
});

document.getElementById('n-page').addEventListener('click',() =>{
    if (pageNum>= pdfDoc.numPages){
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
});