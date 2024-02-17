let tunicaPreta = window.document.getElementById('tunicaPreta');

tunicaPreta.addEventListener('mouseenter', entrar) ;
tunicaPreta.addEventListener('mouseout', sair);


function entrar() {
    tunicaPreta.style.opacity = 0;

    setTimeout(function() {
        tunicaPreta.setAttribute('src', 'imagens/ulihu-charcoal-silk-linen-tunic_DETAIL.jpg');

        tunicaPreta.style.opacity = 1;
    }, 300);
}

function sair() {
    tunicaPreta.style.opacity = 0;

    setTimeout(function() {
        tunicaPreta.setAttribute('src', 'imagens/ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg');

        tunicaPreta.style.opacity = 1;
    }, 300);


}


let tunicaAzul = window.document.getElementById('tunicaAzul');


tunicaAzul.addEventListener('mouseenter', tunicaAzulentrar);
tunicaAzul.addEventListener('mouseout', tunicaAzulSair);

function tunicaAzulentrar() {
    tunicaAzul.style.opacity = 0;

    setTimeout(function() {
        tunicaAzul.setAttribute('src', 'imagens/ulihu-blue-linen-tunic_DETAIL.jpg');
        tunicaAzul.style.width = '500px'
        tunicaAzul.style.height = '500px'

        tunicaAzul.style.opacity = 1;
    }, 300);
}

function tunicaAzulSair() {
    tunicaAzul.style.opacity = 0;

    setTimeout(function() {
        tunicaAzul.setAttribute('src', 'imagens/ulihu-blue-linen-tunic_0308-v1-FINAL-copy.jpg');

        tunicaAzul.style.opacity = 1;
    }, 300);
}

let tunicaCreme = window.document.getElementById('tunicaCreme');

tunicaCreme.addEventListener('mouseenter', tunicaCremeEntrar);
tunicaCreme.addEventListener('mouseout', tunicaCremeSair);

function tunicaCremeEntrar() {
    tunicaCreme.style.opacity = 0;

    setTimeout(function() {
        tunicaCreme.setAttribute('src', 'imagens/lauren-winter-natural-dress_DETAIL.jpg')

        tunicaCreme.style.opacity = 1;
    }, 300);
}

function tunicaCremeSair() {
    tunicaCreme.style.opacity = 0;

    setTimeout(function() {
        tunicaCreme.setAttribute('src', 'imagens/lauren-winter-natural-dress_0172-v1-FINAL-copy.jpg');

        tunicaCreme.style.opacity = 1;
    }, 300);
}

let saiaSonia = window.document.getElementById('saiaSonia');

saiaSonia.addEventListener('mouseenter', saiaSoniaEntrar);
saiaSonia.addEventListener('mouseout', saiaSoniaSair);

function saiaSoniaEntrar() {
    saiaSonia.style.opacity = 0;

    setTimeout(function() {
        saiaSonia.setAttribute('src', 'imagens/lauren-winter-sonia-skirt-grey_DETAIL.jpg');

        saiaSonia.style.opacity = 1;
    }, 300);
}

function saiaSoniaSair() {
    saiaSonia.style.opacity = 0;

    setTimeout(function() {
        saiaSonia.setAttribute('src', 'imagens/lauren-winter-sonia-skirt-grey_0270-v1-FINAL-copy.jpg');

        saiaSonia.style.opacity = 1;
    }, 300);
}


let vestidoSonia = window.document.getElementById('vestidoSonia');

vestidoSonia.addEventListener('mouseenter', vestidoSoniaEntrar);
vestidoSonia.addEventListener('mouseout', vestidoSoniaSair);

function vestidoSoniaEntrar() {
    vestidoSonia.style.opacity = 0;

    setTimeout(function() {
        vestidoSonia.setAttribute('src', 'imagens/lauren-winter-sonia-dress-terracotta_DETAIL.jpg')

        vestidoSonia.style.opacity = 1;
    }, 300);
}

function vestidoSoniaSair() {
    vestidoSonia.style.opacity = 0;

    setTimeout(function() {
        vestidoSonia.setAttribute('src', 'imagens/vermelho.jpg');

        vestidoSonia.style.opacity = 1;
    }, 300);
}

let calcaLarga = window.document.getElementById('calcaLarga');

calcaLarga.addEventListener('mouseenter', calcaLargaEntrar);
calcaLarga.addEventListener('mouseout', calcaLargaSair);

function calcaLargaEntrar() {
    calcaLarga.style.opacity = 0;

    setTimeout(function() {
        calcaLarga.setAttribute('src', 'imagens/lauren-winter-wide-pant-natural_DETAIL.jpg');

        calcaLarga.style.opacity = 1;
    }, 300);
}

function calcaLargaSair() {
    calcaLarga.style.opacity = 0;

    setTimeout(function() {
        calcaLarga.setAttribute('src', 'imagens/lauren-winter-wide-pant-natural_0178-v1-FINAL.jpg');

        calcaLarga.style.opacity = 1;
    }, 300);
}

let jaquetaHaori = window.document.getElementById('jaquetaHaori');

jaquetaHaori.addEventListener('mouseenter', jaquetaHaoriEntrar);
jaquetaHaori.addEventListener('mouseout', jaquetaHaoriSair);

function jaquetaHaoriEntrar() {
    jaquetaHaori.style.opacity = 0;

    setTimeout(function() {
        jaquetaHaori.setAttribute('src', 'imagens/lauren-winter-haori-jacket_DETAIL.jpg');

        jaquetaHaori.style.opacity = 1;
    }, 300);
}

function jaquetaHaoriSair() {
    jaquetaHaori.style.opacity = 0;

    setTimeout(function() {
        jaquetaHaori.setAttribute('src', 'imagens/ulihu-blue-linen-crop-top_0320-v1-FINAL-1-copy.jpg');

        jaquetaHaori.style.opacity = 1;
    }, 300);
}


let largaAzul = window.document.getElementById('largaAzul');

largaAzul.addEventListener('mouseenter', largaAzulEntrar);
largaAzul.addEventListener('mouseout', largaAzulSair);

function largaAzulEntrar() {
    largaAzul.style.opacity = 0;

    setTimeout(function() {
        largaAzul.setAttribute('src', 'imagens/largaAzul.jpg');

        largaAzul.style.opacity = 1;
    }, 300);
}

function largaAzulSair() {
    largaAzul.style.opacity = 0;

    setTimeout(function() {
        largaAzul.setAttribute('src', 'imagens/ulihu-blue-linen-long-short_0346-v1-FINAL-copy.jpg');

        largaAzul.style.opacity = 1;
    }, 300);
}

let saiaJane = window.document.getElementById('saiaJane');

saiaJane.addEventListener('mouseenter', saiaJaneEntrar);
saiaJane.addEventListener('mouseout', saiaJaneSair);

function saiaJaneEntrar() {
    saiaJane.style.opacity = 0;

    setTimeout(function() {
        saiaJane.setAttribute('src', 'imagens/kimem-long-pleated-skirt-black_DETAIL.jpg');

        saiaJane.style.opacity = 1;
    }, 300);
}

function saiaJaneSair() {
    saiaJane.style.opacity = 0;

    setTimeout(function() {
        saiaJane.setAttribute('src', 'imagens/kimem-long-pleated-skirt-black_0354-v1-FINAL-copy.jpg');

        saiaJane.style.opacity = 1;
    }, 300);
}

let calcaRomy = window.document.getElementById('calcaRomy');

calcaRomy.addEventListener('mouseenter', calcaRomyEntrar);
calcaRomy.addEventListener('mouseout', calcaRomySair);

function calcaRomyEntrar() {
    calcaRomy.style.opacity = 0;

    setTimeout(function() {
        calcaRomy.setAttribute('src', 'imagens/kimem-romy-trousers_DETAIL.jpg');

        calcaRomy.style.opacity = 1;
    }, 300);
}

function calcaRomySair() {
    calcaRomy.style.opacity = 0;

    setTimeout(function() {
        calcaRomy.setAttribute('src', 'imagens/kimem-romy-trousers_0155-v1-FINAL-copy.jpg');

        calcaRomy.style.opacity = 1;
    }, 300);
}

let camisetaChef = window.document.getElementById('camisetaChef');

camisetaChef.addEventListener('mouseenter', camisetaChefEntrar);
camisetaChef.addEventListener('mouseout', camisetaChefSair);

function camisetaChefEntrar() {
    camisetaChef.style.opacity = 0;

    setTimeout(function() {
        camisetaChef.setAttribute('src', 'imagens/kimem-poplin-chef-shirt-white_DETAIL.jpg');

        camisetaChef.style.opacity = 1;
    }, 300);
}

function camisetaChefSair() {
    camisetaChef.style.opacity = 0;

    setTimeout(function() {
        camisetaChef.setAttribute('src', 'imagens/kimem-poplin-chef-shirt-white_0304-v1-FINAL-copy.jpg');

        camisetaChef.style.opacity = 1;
    }, 300);
}

let camisaLisa = window.document.getElementById('camisaLisa');

camisaLisa.addEventListener('mouseenter', camisaLisaEntrar);
camisaLisa.addEventListener('mouseout', camisaLisaSair);

function camisaLisaEntrar() {
    camisaLisa.style.opacity = 0;

    setTimeout(function() {
        camisaLisa.setAttribute('src', 'imagens/kimem-lisa-oversized-shirt-navy_DETAIL.jpg');

        camisaLisa.style.opacity = 1;
    }, 300);
}

function camisaLisaSair() {
    camisaLisa.style.opacity = 0;

    setTimeout(function() {
        camisaLisa.setAttribute('src', 'imagens/kimem-lisa-oversized-shirt-navy_0363-v1-FINAL-copy.jpg');

        camisaLisa.style.opacity = 1;
    }, 300);
}

let estudio = window.document.getElementById('estudio');

estudio.addEventListener('mouseenter', estudioEntrar);
estudio.addEventListener('mouseout', estudioSair);

function estudioEntrar() {
    estudio.style.opacity = 0;

    setTimeout(function() {
        estudio.setAttribute('src', 'imagens/lauren-winter-studio-top-terracotta_DETAIL.jpg');

        estudio.style.opacity = 1;
    }, 300);
}

function estudioSair() {
    estudio.style.opacity = 0;

    setTimeout(function() {
        estudio.setAttribute('src', 'imagens/ulihu-blue-linen-crop-top_0320-v1-FINAL-2-copy.jpg');

        estudio.style.opacity = 1;
    }, 300);
}

let topLinho = window.document.getElementById('topLinho');

topLinho.addEventListener('mouseenter', topLinhoEntrar);
topLinho.addEventListener('mouseout', topLinhoSair);

function topLinhoEntrar() {
    topLinho.style.opacity = 0;

    setTimeout(function() {
        topLinho.setAttribute('src', 'imagens/ulihu-blue-linen-crop-top_DETAIL.jpg');

        topLinho.style.opacity = 1;
    }, 300);
}

function estudioSair() {
    topLinho.style.opacity = 0;

    setTimeout(function() {
        topLinho.setAttribute('src', 'imagens/ulihu-blue-linen-crop-top_0320-v1-FINAL-3.jpg');

        topLinho.style.opacity = 1;
    }, 300);
}

