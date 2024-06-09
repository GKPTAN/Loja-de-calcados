//tentei fazer uma lupa mas não consegui fazer do jeito que eu queria, vou tentar descobrir mais sobre isso
const caixaDeZoom = document.getElementById('caixa-de-zoom');

function mostrarCaixaDeZoom(event) {
    const textoDoElemento = event.target;
    const selecao = window.getSelection()

    //const texto = textoDoElemento.textContent;
    //const mouseX = event.clientX;
    //const mouseY = event.clientY;

    const range = document.createRange();

    range.selectNodeContents(textoDoElemento);
    selecao.removeAllRanges();
    selecao.addRange(range)

    //const textNode = textoDoElemento.childNodes[0];
    //range.setStart(textNode, 0);
    //range.setEnd(textNode, texto.length);

    const rects = range.getClientRects();
    let closestRect;
    let closestDistance = Infinity;

    for (const rect of rects) {
        const distance = Math.abs(event.clientX - rect.left) +  Math.abs(event.clientY - rect.top);
        if (distance < closestDistance) {
            closestDistance = distance
            closestRect = rect;
        };
    };

    selecao.removeAllRanges();

    if (closestRect) {
        caixaDeZoom.textContent = textoDoElemento.textContent;
        caixaDeZoom.style.display = 'block';
        caixaDeZoom.style.left = `${event.pageX}px`;
        caixaDeZoom.style.top = `${event.pageY}px`;
    } else {
        caixaDeZoom.style.display = 'none'
    }

    //const x = mouseX - rect.left;
    //const y = mouseY - rect.top;

    //const charIndex = Math.floor((x / rect.width) * texto.length);
    
    //const palavra = getWordAt(texto, charIndex);

    //if (palavra) {
        //caixaDeZoom.textContent = palavra;
    //} else {
        //caixaDeZoom.style.display = 'none'
    //}
};

function esconderCaixaDeZoom() {
    caixaDeZoom.style.display = 'none';
};

function getWordAt(str, pos) {
    const left = str.slice(0, pos).search(/\S+$/);
    const right = str.slice(pos).search(/\s/);
    if (right < 0) return
    str.slice(left);
    return str.slice(left, right + pos);
}