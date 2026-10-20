console.log("Portfolio Loaded");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document
.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior:'smooth'
});

});
});

const certificateDialog = document.querySelector('.certificate-dialog');
const certificateDialogTitle = document.querySelector('#certificate-dialog-title');
const certificateDocument = document.querySelector('.certificate-document');

document.querySelectorAll('button.certificate-card').forEach(card => {
    card.addEventListener('click', () => {
        certificateDialogTitle.textContent = card.dataset.title;
        if (card.dataset.orientation) {
            certificateDialog.dataset.orientation = card.dataset.orientation;
        } else {
            delete certificateDialog.dataset.orientation;
        }
        certificateDocument.src = `${card.dataset.certificate}#toolbar=0&navpanes=0`;
        certificateDialog.showModal();
    });
});

document.querySelector('.dialog-close').addEventListener('click', () => {
    certificateDialog.close();
});

certificateDialog.addEventListener('click', event => {
    if (event.target === certificateDialog) {
        certificateDialog.close();
    }
});

certificateDialog.addEventListener('close', () => {
    certificateDocument.removeAttribute('src');
});