
var Dividendos;
var Investido,Acao;
var Unidade=100;
var resultado;


    Investido =Number.parseFloat(document.getElementById('entrada01').value);
    Acao=Number.parseFloat(document.getElementById('entrada02').value);

function Calculo(){


    Dividendos= Investido / Acao;
    resultado= Dividendos * Unidade;

    document.getElementById('saida_unica').value = resultado;
    

    
}
Calculo()