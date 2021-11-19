function calcularPedido(){
    //entrada
    primeiraFem = document.getElementById("primeiraFem").value;
    brancaFem = document.getElementById("brancaFem").value;
    pretaFem = document.getElementById("pretaFem").value;

    primeiraMasc = document.getElementById("primeiraMasc").value;
    brancaMasc = document.getElementById("brancaMasc").value;
    pretaMasc = document.getElementById("pretaMasc").value;

    //processamento

    //Primeira feminina
    if(primeiraFem == "P"){
        tamanhoPF =  "P";
        precoPF = 229.99;
    }else if(primeiraFem == "M"){
        tamanhoPF =  "M";
        precoPF = 229.99;
    }else if(primeiraFem == "G"){
        tamanhoPF =  "G";
        precoPF = 229.99;
    }else{
        tamanhoPF =" ";
        precoPF = 0.00;
    }

    //Branca feminina
    if(brancaFem == "P"){
        tamanhoBF = "P";
        precoBF = 279.99;
    }else if(brancaFem == "M"){
        tamanhoBF = "M";
        precoBF = 279.99;
    }else if(brancaFem == "G"){
        tamanhoBF = "G";
        precoBF = 279.99;
    }else{
        tamanhoPF = " ";
        precoBF = 0.00;
    }

    //Preta feminina
    if(pretaFem == "P"){
        tamanhoPretaF = "P";
        precoPretaF = 279.99;
    }else if(pretaFem == "M"){
        tamanhoPretaF = "M";
        precoPretaF = 279.99;
    }else if(pretaFem == "G"){
        tamanhoPretaF = "G";
        precoPretaF = 279.99;
    }else{
        tamanhoPretaF = " ";
        precoPretaF = 0.00;
    }

    //Primeira masculina
    if(primeiraMasc == "P"){
        tamanhoPM = "P";
        precoPM = 229.99;
    }else if(primeiraMasc == "M"){
        tamanhoPM = "M";
        precoPM = 229.99;
    }else if(primeiraMasc == "G"){
        tamanhoPM = "G";
        precoPM = 229.99;
    }else{
        tamanhoPM = " ";
        precoPM = 0.00;
    }

    //Branca masculina
    if(brancaMasc == "P"){
        tamanhoBM = "P";
        precoBM =  279.99;
    }else if(brancaMasc == "M"){
        tamanhoBM = "M";
        precoBM = 279.99;
    }else if(brancaMasc == "G"){
        tamanhoBM = "G";
        precoBM = 279.99;
    }else{
        tamanhoBM = " ";
        precoBM = 0.00;
    }

    //Preta masculina
    if(pretaMasc == "P"){
        tamanhoPretaM = "P";
        precoPretaM = 279.99;
    }else if(pretaMasc == "M"){
        tamanhoPretaM = "M";
        precoPretaM = 279.99;
    }else if(pretaMasc == "G"){
        tamanhoPretaM = "G";
        precoPretaM = 279.99;
    }else{
        tamanhoPretaM = " ";
        precoPretaM = 0.00;
    }

    total = precoPF + precoBF + precoPretaF + precoPM + precoBM + precoPretaM;

    //saida

    document.getElementById("total").value = total.toFixed(2);
}

function finalizar(){

    //entrada
    document.getElementById("total").value;

    //Processamento

    if(total == 0.00){
        msg = "Você precisa escolher pelo menos um item para realizar o pedido.";
    }else{
        msg = "Pedido Cadastrado com Sucesso! \n";
        msg += "O valor total da compra é R$";
        msg += total;
    }

    //saida
    document.getElementById("msg").value = msg;
}