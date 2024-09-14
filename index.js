const sigmaBtn = document.querySelector('.sigma-btn');
const sigmaSpan = document.querySelector('.sigma-span');
sigmaBtn.addEventListener('click', changeCoems);
function changeCoems() {
    sigmaSpan.textContent = parseFloat(sigmaSpan.textContent) + 1;
}