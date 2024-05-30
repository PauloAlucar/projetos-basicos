function generateSheet() {

    // Atributos Primários
    const st = document.getElementById('st').value;
    const dx = document.getElementById('dx').value;
    const iq = document.getElementById('iq').value;
    const ht = document.getElementById('ht').value;

    document.getElementById('displayST').textContent = st;
    document.getElementById('displayDX').textContent = dx;
    document.getElementById('displayIQ').textContent = iq;
    document.getElementById('displayHT').textContent = ht;

    // Atributos Secundários
    const hp = document.getElementById('st').value;
    const von = document.getElementById('iq').value;
    const per = document.getElementById('iq').value;
    const pf = document.getElementById('ht').value;

    document.getElementById('displayHP').textContent = hp;
    document.getElementById('displayVon').textContent = von;
    document.getElementById('displayPer').textContent = per;
    document.getElementById('displayPF').textContent = pf;

    // Outras Características
    const bc = (st**2)/10;
    const velBas = (dx/4) + (ht/4);
    const db = parseInt((dx/4) + (ht/4));
    const esq = (parseInt((dx/4) + (ht/4)))+3;

    document.getElementById('displayBC').textContent = bc;
    document.getElementById('displayVelBas').textContent = velBas;
    document.getElementById('displayDB').textContent = db;
    document.getElementById('displayEsq').textContent = esq;
}
