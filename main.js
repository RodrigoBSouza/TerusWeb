const modalOpacity = document.getElementById('modal-opacity');
const modalOpacity2 = document.getElementById('modal-opacity-2');
const modalConsultarTerminal = document.getElementById('consultar-terminal');
const modalOpacityConsultarTerminal = document.getElementById('modal-opacity-consultar-terminal');

/* ----- CONSULTAR TERMINAL ----- */

function openConsultarTerminal() {
    if(modalConsultarTerminal.style.display = 'none') {
        modalConsultarTerminal.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.consultar-terminal-li').classList.add('hover-menu');
    }
}

function closeConsultarTerminal() {
    if(modalConsultarTerminal.style.display = 'flex') {
        modalConsultarTerminal.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.consultar-terminal-li').classList.remove('hover-menu');
        limparConsultarTerminal();
    }
}

function limparConsultarTerminal() {
    let cnlCT = document.getElementById('cnl-consultar-terminal');
    let terminalCT = document.getElementById('terminal-consultar-terminal');
    
    cnlCT.value = '';
    terminalCT.value = '';
}

const resultadoConsultarTerminal = document.getElementById('resultado-consultar-terminal');
const modalResultadoConsultarTerminal = document.getElementById('modal-resultado-consultar-terminal');

function consultarTerminal(cnl, terminal) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/consultar_terminal.php', 
        data: {
            cnl: cnl,
            terminal: terminal
        }, 

        beforeSend: function () { 
            $("#loader-consultar-terminal").show();  
        },

        success: function (msg) {
            $("#modal-resultado-consultar-terminal").html(msg);
            $("#loader-consultar-terminal").hide();  
        }
})}
    $('#btn-consultar-terminal').click(function () {
        consultarTerminal($("#cnl-consultar-terminal").val(), $("#terminal-consultar-terminal").val());
        resultadoConsultarTerminal.style.display = 'flex';
        modalOpacityConsultarTerminal.style.display = 'block';
});

function voltarConsultarTerminal() {
    resultadoConsultarTerminal.style.display = 'none';
    modalResultadoConsultarTerminal.innerText = '';
    modalOpacityConsultarTerminal.style.display = 'none';
}

function closeResultadoConsultarTerminal() {
    resultadoConsultarTerminal.style.display = 'none';
    closeConsultarTerminal();
    modalResultadoConsultarTerminal.innerText = '';
    modalOpacityConsultarTerminal.style.display = 'none';
}

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CONSULTAR TERMINAL

document.getElementById("btn-consultar-terminal").disabled = true;
document.getElementById('consultar-terminal').addEventListener("input", function(){
const terminalConsultarTerminalBlock = document.getElementById("terminal-consultar-terminal").value;
    if (terminalConsultarTerminalBlock !== null && terminalConsultarTerminalBlock !== '') {
        document.getElementById("btn-consultar-terminal").disabled = false;
    } else {
        document.getElementById("btn-consultar-terminal").disabled = true;
    }
});

/* ----- RESERVAR TERMINAL ----- */

const modalReservarTerminal = document.getElementById('reservar-terminal');
const modalOpacityReservarTerminal = document.getElementById('modal-opacity-reservar-terminal');

function openReservarTerminal() {
    if(modalReservarTerminal.style.display = 'none') {
        modalReservarTerminal.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.reservar-terminal-li').classList.add('hover-menu');
    }
}

function closeReservarTerminal() {
    if(modalReservarTerminal.style.display = 'flex') {
        modalReservarTerminal.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.reservar-terminal-li').classList.remove('hover-menu');
        limparReservarTerminal();
    }
}

function limparReservarTerminal() {
    let cnlRT = document.getElementById('cnl-reservar-terminal');
    let atRT = document.getElementById('at-reservar-terminal');
    let terminal = document.getElementById('terminal-reservar-terminal');
    let nrcRT = document.getElementById('nrc-reservar-terminal');
    let resultadoReservarTerminal = document.getElementById('resultado-reservar-terminal');
            
    cnlRT.value = '';
    atRT.value = '';
    terminal.value = '';
    nrcRT.value = '';
    modalResultadoReservarTerminal.innerText = '';
    resultadoReservarTerminal.style.display = 'none';
}

const resultadoReservarTerminal = document.getElementById('resultado-reservar-terminal');
const modalResultadoReservarTerminal = document.getElementById('modal-resultado-reservar-terminal');

function reservarTerminal(reservaCnl, areaTel, terminal, nrc) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/reservar_terminal.php', 
        data: {
            cnl: reservaCnl, 
            areaTel: areaTel, 
            terminal: terminal,
            nrc: nrc
        }, 

        beforeSend: function () { 
            $("#loader-reservar-terminal").show();    
        },

        success: function (msg) {
            $("#modal-resultado-reservar-terminal").html(msg); 
            $("#loader-reservar-terminal").hide(); 
        }
})}
    $('#btn-reservar-terminal').click(function () {
        reservarTerminal($("#cnl-reservar-terminal").val(), $("#at-reservar-terminal").val(), 
        $("#terminal-reservar-terminal").val(), $("#nrc-reservar-terminal").val());
        resultadoReservarTerminal.style.display = 'flex';
        modalResultadoReservarTerminal.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO RESERVAR TERMINAL

document.getElementById("btn-reservar-terminal").disabled = true;
document.getElementById('reservar-terminal').addEventListener("input", function(){
const terminalReservarTerminalBlock = document.getElementById("nrc-reservar-terminal").value;
    if (
        terminalReservarTerminalBlock !== null && terminalReservarTerminalBlock !== '') {
        document.getElementById("btn-reservar-terminal").disabled = false;
    } else {
        document.getElementById("btn-reservar-terminal").disabled = true;
    }
});

/* ----- CONFIRMAR RESERVA ----- */

const modalConfirmarReserva = document.getElementById('confirmar-reserva');

function openConfirmarReserva() {
    if(modalConfirmarReserva.style.display = 'none') {
        modalConfirmarReserva.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.confirmar-reserva-li').classList.add('hover-menu');
    }
}

function closeConfirmarReserva() {
    if(modalConfirmarReserva.style.display = 'flex') {
        modalConfirmarReserva.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.confirmar-reserva-li').classList.remove('hover-menu');
        limparConfirmarReserva();
    }
}

function mostrarReserva(value) {
    let avisoInsrec = document.getElementById('content-aviso-confirmar-reserva-insrec');
    let avisoInsmud = document.getElementById('content-aviso-confirmar-reserva-insmud');
    let inshab = document.getElementById('modal-inshab-confirmar-reserva');
    let insrec = document.getElementById('modal-insrec-confirmar-reserva');
    let insmud = document.getElementById('modal-insmud-confirmar-reserva');
    let altpro = document.getElementById('modal-altpro-confirmar-reserva');

    if(value == "inshab") {
        inshab.style.display = 'flex';
        insrec.style.display = 'none';
        insmud.style.display = 'none';
        altpro.style.display = 'none';
        avisoInsrec.style.display = 'none';
        avisoInsmud.style.display = 'none';
    } else if(value == "insrec") {
        insrec.style.display = 'flex';
        inshab.style.display = 'none';
        insmud.style.display = 'none';
        altpro.style.display = 'none';
        avisoInsmud.style.display = 'none';
        avisoInsrec.style.display = 'flex';
    } else if(value == "insmud") {
        insmud.style.display = 'flex';
        inshab.style.display = 'none';
        insrec.style.display = 'none';
        altpro.style.display = 'none';
        avisoInsrec.style.display = 'none';
        avisoInsmud.style.display = 'flex';
    } else if(value == "altpro") {
        altpro.style.display = 'flex';
        inshab.style.display = 'none';
        insrec.style.display = 'none';
        insmud.style.display = 'none';
        avisoInsrec.style.display = 'none';
        avisoInsmud.style.display = 'none';
    }
};

function limparConfirmarReserva() {
    let identOsCRInshab = document.getElementById('ident-os-inshab-confirmar-reserva');
    let cnlCRInshab = document.getElementById('cnl-inshab-confirmar-reserva');
    let idEstacaoCRInshab = document.getElementById('id-estacao-inshab-confirmar-reserva');
    let terminalCRInshab = document.getElementById('terminal-inshab-confirmar-reserva');
    let flagPortCRInshab = document.getElementById('flag-port-inshab-confirmar-reserva');
    let nrcCRInshab = document.getElementById('nrc-inshab-confirmar-reserva');
    let idFibraCRInshab = document.getElementById('id-fibra-inshab-confirmar-reserva');

    let identOsCRInsrec = document.getElementById('ident-os-insrec-confirmar-reserva');
    let cnlCRInsrec = document.getElementById('cnl-insrec-confirmar-reserva');
    let idEstacaoCRInsrec = document.getElementById('id-estacao-insrec-confirmar-reserva');
    let terminalCRInsrec = document.getElementById('terminal-insrec-confirmar-reserva');
    let flagPortCRInsrec = document.getElementById('flag-port-insrec-confirmar-reserva');
    let nrcCRInsrec = document.getElementById('nrc-insrec-confirmar-reserva');
    let idFibraCRInsrec = document.getElementById('id-fibra-insrec-confirmar-reserva');

    let identOsCRInsmud = document.getElementById('ident-os-insmud-confirmar-reserva');
    let cnlCRInsmud = document.getElementById('cnl-insmud-confirmar-reserva');
    let idEstacaoCRInsmud = document.getElementById('id-estacao-insmud-confirmar-reserva');
    let terminalCRInsmud = document.getElementById('terminal-insmud-confirmar-reserva');
    let flagPortCRInsmud= document.getElementById('flag-port-insmud-confirmar-reserva');
    let nrcCRInsmud = document.getElementById('nrc-insmud-confirmar-reserva');
    let idFibraCRInsmud = document.getElementById('id-fibra-insmud-confirmar-reserva');

    let identOsCRAltpro = document.getElementById('ident-os-altpro-confirmar-reserva');
    let cnlCRAltpro = document.getElementById('cnl-altpro-confirmar-reserva');
    let idEstacaoCRAltpro = document.getElementById('id-estacao-altpro-confirmar-reserva');
    let terminalCRAltpro = document.getElementById('terminal-altpro-confirmar-reserva');
    let flagPortCRAltpro = document.getElementById('flag-port-altpro-confirmar-reserva');
    let nrcCRAltpro = document.getElementById('nrc-altpro-confirmar-reserva');
    let idFibraCRAltpro = document.getElementById('id-fibra-altpro-confirmar-reserva');
            
    identOsCRInshab.value = ''; identOsCRInsrec.value = ''; identOsCRInsmud.value = ''; identOsCRAltpro.value = '';
    cnlCRInshab.value = ''; cnlCRInsrec.value = ''; cnlCRInsmud.value = ''; cnlCRAltpro.value = '';
    idEstacaoCRInshab.value = ''; idEstacaoCRInsrec.value = ''; idEstacaoCRInsmud.value = ''; idEstacaoCRAltpro.value = '';
    terminalCRInshab.value = ''; terminalCRInsrec.value = ''; terminalCRInsmud.value = ''; terminalCRAltpro.value = '';
    flagPortCRInshab.value = ''; flagPortCRInsrec.value = ''; flagPortCRInsmud.value = ''; flagPortCRAltpro.value = '';
    nrcCRInshab.value = ''; nrcCRInsrec.value = ''; nrcCRInsmud.value = ''; nrcCRAltpro.value = '';
    idFibraCRInshab.value = ''; idFibraCRInsrec.value = ''; idFibraCRInsmud.value = ''; idFibraCRAltpro.value = '';
    modalResultadoConfirmarReservaInshab.innerText = '';
    resultadoConfirmarReservaInshab.style.display = 'none';
    modalResultadoConfirmarReservaInsrec.innerText = '';
    resultadoConfirmarReservaInsrec.style.display = 'none';
    modalResultadoConfirmarReservaInsmud.innerText = '';
    resultadoConfirmarReservaInsmud.style.display = 'none';
    modalResultadoConfirmarReservaAltpro.innerText = '';
    resultadoConfirmarReservaAltpro.style.display = 'none';

}

/* ----- RESULTADO CONFIRMAR RESERVA INSHAB ----- */

const resultadoConfirmarReservaInshab = document.getElementById('resultado-confirmar-reserva-inshab');
const modalResultadoConfirmarReservaInshab = document.getElementById('modal-resultado-confirmar-reserva-inshab');

function confirmarReservaInshab(
    identOs, cnl, idEstacao, 
    terminal, flagInsPort, nrc, 
    idFibra) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/confirmar_reserva_inshab.php', 
        data: {
            identOs: identOs, 
            cnl: cnl,
            idEstacao: idEstacao,
            terminal: terminal,
            flagInsPort: flagInsPort,
            nrc: nrc,
            idFibra: idFibra
        }, 

        beforeSend: function () { 
            $("#loader-confirmar-reserva-inshab").show();    
        },

        success: function (msg) {
            $("#modal-resultado-confirmar-reserva-inshab").html(msg);
            $("#loader-confirmar-reserva-inshab").hide();  
        }
})}
    $('#btn-inshab-confirmar-reserva').click(function () {
        confirmarReservaInshab($("#ident-os-inshab-confirmar-reserva").val(), $("#cnl-inshab-confirmar-reserva").val(), 
        $("#id-estacao-inshab-confirmar-reserva").val(), $("#terminal-inshab-confirmar-reserva").val(), 
        $("#flag-port-inshab-confirmar-reserva").val(), $("#nrc-inshab-confirmar-reserva").val(), 
        $("#id-fibra-inshab-confirmar-reserva").val());
        resultadoConfirmarReservaInshab.style.display = 'flex';
        modalResultadoConfirmarReservaInshab.innerText = '';

});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO INSHAB

document.getElementById("btn-inshab-confirmar-reserva").disabled = true;
document.getElementById('modal-inshab-confirmar-reserva').addEventListener("input", function(){
const confirmarReservainshab = document.getElementById("id-fibra-inshab-confirmar-reserva").value;
    if (
        confirmarReservainshab !== null && confirmarReservainshab !== '') {
        document.getElementById("btn-inshab-confirmar-reserva").disabled = false;
    } else {
        document.getElementById("btn-inshab-confirmar-reserva").disabled = true;
    }
});

/* ----- RESULTADO CONFIRMAR RESERVA INSREC ----- */

const resultadoConfirmarReservaInsrec = document.getElementById('resultado-confirmar-reserva-insrec');
const modalResultadoConfirmarReservaInsrec = document.getElementById('modal-resultado-confirmar-reserva-insrec');

function confirmarReservaInsrec(
    identOs, cnl, idEstacao, 
    terminal, flagInsPort, nrc, 
    idFibra) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/confirmar_reserva_insrec.php', 
        data: {
            identOs: identOs, 
            cnl: cnl,
            idEstacao: idEstacao,
            terminal: terminal,
            flagInsPort: flagInsPort,
            nrc: nrc,
            idFibra: idFibra,
        }, 

        beforeSend: function () { 
            $("#loader-confirmar-reserva-insrec").show();    
        },

        success: function (msg) {
            $("#modal-resultado-confirmar-reserva-insrec").html(msg);
            $("#loader-confirmar-reserva-insrec").hide();  
        }
})}
    $('#btn-insrec-confirmar-reserva').click(function () {
        confirmarReservaInsrec($("#ident-os-insrec-confirmar-reserva").val(), $("#cnl-insrec-confirmar-reserva").val(), 
        $("#id-estacao-insrec-confirmar-reserva").val(), $("#terminal-insrec-confirmar-reserva").val(), 
        $("#flag-port-insrec-confirmar-reserva").val(), $("#nrc-insrec-confirmar-reserva").val(), 
        $("#id-fibra-insrec-confirmar-reserva").val());
        resultadoConfirmarReservaInsrec.style.display = 'flex';
        modalResultadoConfirmarReservaInsrec.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO INSREC

document.getElementById("btn-insrec-confirmar-reserva").disabled = true;
document.getElementById('modal-insrec-confirmar-reserva').addEventListener("input", function(){
const confirmarTerminalinsrec = document.getElementById("id-fibra-insrec-confirmar-reserva").value;
    if (
        confirmarTerminalinsrec !== null && confirmarTerminalinsrec !== '') {
        document.getElementById("btn-insrec-confirmar-reserva").disabled = false;
    } else {
        document.getElementById("btn-insrec-confirmar-reserva").disabled = true;
    }
});

/* ----- RESULTADO CONFIRMAR RESERVA INSMUD ----- */

const resultadoConfirmarReservaInsmud = document.getElementById('resultado-confirmar-reserva-insmud');
const modalResultadoConfirmarReservaInsmud = document.getElementById('modal-resultado-confirmar-reserva-insmud');

function confirmarReservaInsmud(
    identOs, cnl, idEstacao, 
    terminal, flagInsPort, nrc, 
    idFibra) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/confirmar_reserva_insmud.php', 
        data: {
            identOs: identOs, 
            cnl: cnl,
            idEstacao: idEstacao,
            terminal: terminal,
            flagInsPort: flagInsPort,
            nrc: nrc,
            idFibra: idFibra,
        }, 

        beforeSend: function () { 
            $("#loader-confirmar-reserva-insmud").show();    
        },

        success: function (msg) {
            $("#modal-resultado-confirmar-reserva-insmud").html(msg);
            $("#loader-confirmar-reserva-insmud").hide();  
        }
})}
    $('#btn-insmud-confirmar-reserva').click(function () {
        confirmarReservaInsmud($("#ident-os-insmud-confirmar-reserva").val(), $("#cnl-insmud-confirmar-reserva").val(), 
        $("#id-estacao-insmud-confirmar-reserva").val(), $("#terminal-insmud-confirmar-reserva").val(), 
        $("#flag-port-insmud-confirmar-reserva").val(), $("#nrc-insmud-confirmar-reserva").val(), 
        $("#id-fibra-insmud-confirmar-reserva").val());
        resultadoConfirmarReservaInsmud.style.display = 'flex';
        modalResultadoConfirmarReservaInsmud.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO INSMUD

document.getElementById("btn-insmud-confirmar-reserva").disabled = true;
document.getElementById('modal-insmud-confirmar-reserva').addEventListener("input", function(){
const confirmarTerminalinsmud = document.getElementById("id-fibra-insmud-confirmar-reserva").value;
    if (
        confirmarTerminalinsmud !== null && confirmarTerminalinsmud !== '') {
        document.getElementById("btn-insmud-confirmar-reserva").disabled = false;
    } else {
        document.getElementById("btn-insmud-confirmar-reserva").disabled = true;
    }
});

/* ----- RESULTADO CONFIRMAR RESERVA ALTPRO ----- */

const resultadoConfirmarReservaAltpro = document.getElementById('resultado-confirmar-reserva-altpro');
const modalResultadoConfirmarReservaAltpro = document.getElementById('modal-resultado-confirmar-reserva-altpro');

function confirmarReservaAltpro(
    identOs, cnl, idEstacao, 
    terminal, flagInsPort, nrc, 
    idFibra) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/confirmar_reserva_altpro.php', 
        data: {
            identOs: identOs, 
            cnl: cnl,
            idEstacao: idEstacao,
            terminal: terminal,
            flagInsPort: flagInsPort,
            nrc: nrc,
            idFibra: idFibra,
        }, 

        beforeSend: function () { 
            $("#loader-confirmar-reserva-altpro").show();    
        },

        success: function (msg) {
            $("#modal-resultado-confirmar-reserva-altpro").html(msg);
            $("#loader-confirmar-reserva-altpro").hide();  
        }
})}
    $('#btn-altpro-confirmar-reserva').click(function () {
        confirmarReservaAltpro($("#ident-os-altpro-confirmar-reserva").val(), $("#cnl-altpro-confirmar-reserva").val(), 
        $("#id-estacao-altpro-confirmar-reserva").val(), $("#terminal-altpro-confirmar-reserva").val(), 
        $("#flag-port-altpro-confirmar-reserva").val(), $("#nrc-altpro-confirmar-reserva").val(), 
        $("#id-fibra-altpro-confirmar-reserva").val());
        resultadoConfirmarReservaAltpro.style.display = 'flex';
        modalResultadoConfirmarReservaAltpro.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO ALTPRO

document.getElementById("btn-altpro-confirmar-reserva").disabled = true;
document.getElementById('modal-altpro-confirmar-reserva').addEventListener("input", function(){
const confirmarTerminalAltpro = document.getElementById("id-fibra-altpro-confirmar-reserva").value;
    if (
        confirmarTerminalAltpro !== null && confirmarTerminalAltpro !== '') {
        document.getElementById("btn-altpro-confirmar-reserva").disabled = false;
    } else {
        document.getElementById("btn-altpro-confirmar-reserva").disabled = true;
    }
});

/* ----- OCUPAR CONFIRMAÇÃO ----- */

const modalOcuparConfirmacao = document.getElementById('ocupar-confirmacao');

function openOcuparConfirmacao() {
    if(modalOcuparConfirmacao.style.display = 'none') {
        modalOcuparConfirmacao.style.display = 'flex';
        modalOpacity.style.display = 'block'
        document.querySelector('.ocupar-confirmacao-li').classList.add('hover-menu');
    }
}

function closeOcuparConfirmacao() {
    if(modalOcuparConfirmacao.style.display = 'flex') {
        modalOcuparConfirmacao.style.display = 'none';      
        modalOpacity.style.display = 'none';
        document.querySelector('.ocupar-confirmacao-li').classList.remove('hover-menu');
        limparOcuparConfirmacao();
    }
}

function limparOcuparConfirmacao() {
    let identOsOCInshab = document.getElementById('ident-os-inshab-ocupar-confirmacao');
    let cnlOCInshab = document.getElementById('cnl-inshab-ocupar-confirmacao');
    let terminalOCInshab = document.getElementById('terminal-inshab-ocupar-confirmacao');
    let flagPortOCInshab = document.getElementById('flag-port-inshab-ocupar-confirmacao');

    let identOsOCInsrec = document.getElementById('ident-os-insrec-ocupar-confirmacao');
    let cnlOCInsrec = document.getElementById('cnl-insrec-ocupar-confirmacao');
    let terminalOCInsrec = document.getElementById('terminal-insrec-ocupar-confirmacao');
    let flagPortOCInsrec = document.getElementById('flag-port-insrec-ocupar-confirmacao');

    let identOsOCInsmud = document.getElementById('ident-os-insmud-ocupar-confirmacao');
    let cnlOCInsmud = document.getElementById('cnl-insmud-ocupar-confirmacao');
    let terminalOCInsmud = document.getElementById('terminal-insmud-ocupar-confirmacao');
    let flagPortOCInsmud = document.getElementById('flag-port-insmud-ocupar-confirmacao');

    let identOsOCAltpro = document.getElementById('ident-os-altpro-ocupar-confirmacao');
    let cnlOCAltpro = document.getElementById('cnl-altpro-ocupar-confirmacao');
    let terminalOCAltpro = document.getElementById('terminal-altpro-ocupar-confirmacao');
    let flagPortOCAltpro = document.getElementById('flag-port-altpro-ocupar-confirmacao');
            
    identOsOCInshab.value = ''; identOsOCInsrec.value = ''; identOsOCInsmud.value = ''; identOsOCAltpro.value = '';
    cnlOCInshab.value = ''; cnlOCInsrec.value = ''; cnlOCInsmud.value = ''; cnlOCAltpro.value = '';
    terminalOCInshab.value = ''; terminalOCInsrec.value = ''; terminalOCInsmud.value = ''; terminalOCAltpro.value = '';
    flagPortOCInshab.value = ''; flagPortOCInsrec.value = ''; flagPortOCInsmud.value = ''; flagPortOCAltpro.value = '';

    modalResultadoOcuparConfirmacaoInshab.innerText = '';
    resultadoOcuparConfirmacaoInshab.style.display = 'none';
    modalResultadoOcuparConfirmacaoInsrec.innerText = '';
    resultadoOcuparConfirmacaoInsrec.style.display = 'none';
    modalResultadoOcuparConfirmacaoInsmud.innerText = '';
    resultadoOcuparConfirmacaoInsmud.style.display = 'none';
    modalResultadoOcuparConfirmacaoAltpro.innerText = '';
    resultadoOcuparConfirmacaoAltpro.style.display = 'none';
}

function ocuparConfirmacao(value) {
    let inshab = document.getElementById('modal-inshab-ocupar-confirmacao');
    let insrec = document.getElementById('modal-insrec-ocupar-confirmacao');
    let insmud = document.getElementById('modal-insmud-ocupar-confirmacao');
    let altpro = document.getElementById('modal-altpro-ocupar-confirmacao');

    if(value === "inshab") {
        inshab.style.display = 'flex';
        insrec.style.display = 'none';
        insmud.style.display = 'none';
        altpro.style.display = 'none';
    } else if(value === "insrec") {
        insrec.style.display = 'flex';
        inshab.style.display = 'none';
        insmud.style.display = 'none';
        altpro.style.display = 'none';
    } else if(value === "insmud") {
        insmud.style.display = 'flex';
        inshab.style.display = 'none';
        insrec.style.display = 'none';
        altpro.style.display = 'none';
    } else if(value === "altpro") {
        altpro.style.display = 'flex';
        inshab.style.display = 'none';
        insrec.style.display = 'none';
        insmud.style.display = 'none';
    }
};

/* ----- RESULTADO OCUPAR CONFIRMAÇÃO INSHAB ----- */

const resultadoOcuparConfirmacaoInshab = document.getElementById('resultado-ocupar-confirmacao-inshab');
const modalResultadoOcuparConfirmacaoInshab = document.getElementById('modal-resultado-ocupar-confirmacao-inshab');

function ocuparConfirmacaoInshab(
    identOs, cnl, terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/ocupar_confirmacao_inshab.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-ocupar-confirmacao-inshab").show();    
        },

        success: function (msg) {
            $("#modal-resultado-ocupar-confirmacao-inshab").html(msg);
            $("#loader-ocupar-confirmacao-inshab").hide();  
        }
})}
    $('#btn-inshab-ocupar-confirmacao').click(function () {
        ocuparConfirmacaoInshab($("#ident-os-inshab-ocupar-confirmacao").val(), $("#cnl-inshab-ocupar-confirmacao").val(), 
        $("#terminal-inshab-ocupar-confirmacao").val(), $("#flag-port-inshab-ocupar-confirmacao").val());
        resultadoOcuparConfirmacaoInshab.style.display = 'flex';
        modalResultadoOcuparConfirmacaoInshab.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO OCUPAR CONFIRMAÇÃO

document.getElementById("btn-inshab-ocupar-confirmacao").disabled = true;
document.getElementById('modal-inshab-ocupar-confirmacao').addEventListener("input", function(){
const ocuparConfirmacaoinshab = document.getElementById("flag-port-inshab-ocupar-confirmacao").value;
    if (
        ocuparConfirmacaoinshab !== null && ocuparConfirmacaoinshab !== '') {
        document.getElementById("btn-inshab-ocupar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-inshab-ocupar-confirmacao").disabled = true;
    }
});

/* ----- RESULTADO OCUPAR CONFIRMAÇÃO INSREC ----- */

const resultadoOcuparConfirmacaoInsrec = document.getElementById('resultado-ocupar-confirmacao-insrec');
const modalResultadoOcuparConfirmacaoInsrec = document.getElementById('modal-resultado-ocupar-confirmacao-insrec');

function ocuparConfirmacaoInsrec(
    identOs, cnl, terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/ocupar_confirmacao_insrec.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-ocupar-confirmacao-insrec").show();    
        },

        success: function (msg) {
            $("#modal-resultado-ocupar-confirmacao-insrec").html(msg);
            $("#loader-ocupar-confirmacao-insrec").hide();  
        }
})}
    $('#btn-insrec-ocupar-confirmacao').click(function () {
        ocuparConfirmacaoInsrec($("#ident-os-insrec-ocupar-confirmacao").val(), $("#cnl-insrec-ocupar-confirmacao").val(), 
        $("#terminal-insrec-ocupar-confirmacao").val(), $("#flag-port-insrec-ocupar-confirmacao").val());
        resultadoOcuparConfirmacaoInsrec.style.display = 'flex';
        modalResultadoOcuparConfirmacaoInsrec.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO OCUPAR CONFIRMAÇÃO

document.getElementById("btn-insrec-ocupar-confirmacao").disabled = true;
document.getElementById('modal-insrec-ocupar-confirmacao').addEventListener("input", function(){
const ocuparConfirmacaoinsrec = document.getElementById("flag-port-insrec-ocupar-confirmacao").value;
    if (
        ocuparConfirmacaoinsrec !== null && ocuparConfirmacaoinsrec !== '') {
        document.getElementById("btn-insrec-ocupar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-insrec-ocupar-confirmacao").disabled = true;
    }
});

/* ----- RESULTADO OCUPAR CONFIRMAÇÃO INSMUD ----- */

const resultadoOcuparConfirmacaoInsmud = document.getElementById('resultado-ocupar-confirmacao-insmud');
const modalResultadoOcuparConfirmacaoInsmud = document.getElementById('modal-resultado-ocupar-confirmacao-insmud');

function ocuparConfirmacaoInsmud(
    identOs, cnl, terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/ocupar_confirmacao_insmud.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-ocupar-confirmacao-insmud").show();    
        },

        success: function (msg) {
            $("#modal-resultado-ocupar-confirmacao-insmud").html(msg);
            $("#loader-ocupar-confirmacao-insmud").hide();  
        }
})}
    $('#btn-insmud-ocupar-confirmacao').click(function () {
        ocuparConfirmacaoInsmud($("#ident-os-insmud-ocupar-confirmacao").val(), $("#cnl-insmud-ocupar-confirmacao").val(), 
        $("#terminal-insmud-ocupar-confirmacao").val(), $("#flag-port-insmud-ocupar-confirmacao").val());
        resultadoOcuparConfirmacaoInsmud.style.display = 'flex';
        modalResultadoOcuparConfirmacaoInsmud.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO OCUPAR CONFIRMAÇÃO

document.getElementById("btn-insmud-ocupar-confirmacao").disabled = true;
document.getElementById('modal-insmud-ocupar-confirmacao').addEventListener("input", function(){
const ocuparConfirmacaoinsmud = document.getElementById("flag-port-insmud-ocupar-confirmacao").value;
    if (
        ocuparConfirmacaoinsmud !== null && ocuparConfirmacaoinsmud !== '') {
        document.getElementById("btn-insmud-ocupar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-insmud-ocupar-confirmacao").disabled = true;
    }
});

/* ----- RESULTADO OCUPAR CONFIRMAÇÃO ALTPRO ----- */

const resultadoOcuparConfirmacaoAltpro = document.getElementById('resultado-ocupar-confirmacao-altpro');
const modalResultadoOcuparConfirmacaoAltpro = document.getElementById('modal-resultado-ocupar-confirmacao-altpro');

function ocuparConfirmacaoAltpro(
    identOs, cnl, terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/ocupar_confirmacao_altpro.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-ocupar-confirmacao-altpro").show();    
        },

        success: function (msg) {
            $("#modal-resultado-ocupar-confirmacao-altpro").html(msg);
            $("#loader-ocupar-confirmacao-altpro").hide();  
        }
})}
    $('#btn-altpro-ocupar-confirmacao').click(function () {
        ocuparConfirmacaoAltpro($("#ident-os-altpro-ocupar-confirmacao").val(), $("#cnl-altpro-ocupar-confirmacao").val(), 
        $("#terminal-altpro-ocupar-confirmacao").val(), $("#flag-port-altpro-ocupar-confirmacao").val());
        resultadoOcuparConfirmacaoAltpro.style.display = 'flex';
        modalResultadoOcuparConfirmacaoAltpro.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO OCUPAR CONFIRMAÇÃO ALTPRO

document.getElementById("btn-altpro-ocupar-confirmacao").disabled = true;
document.getElementById('modal-altpro-ocupar-confirmacao').addEventListener("input", function(){
const ocuparConfirmacaoAltpro = document.getElementById("flag-port-altpro-ocupar-confirmacao").value;
    if (
        ocuparConfirmacaoAltpro !== null && ocuparConfirmacaoAltpro !== '') {
        document.getElementById("btn-altpro-ocupar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-altpro-ocupar-confirmacao").disabled = true;
    }
});

/* ----- CANCELAR CONFIRMAÇÃO ----- */

const modalCancelarConfirmacao = document.getElementById('cancelar-confirmacao');

function openCancelarConfirmacao() {
    if(modalCancelarConfirmacao.style.display = 'none') {
        modalCancelarConfirmacao.style.display = 'flex';
        modalOpacity.style.display = 'block'
        document.querySelector('.cancelar-confirmacao-li').classList.add('hover-menu');
    }
}

function closeCancelarConfirmacao() {
    if(modalCancelarConfirmacao.style.display = 'flex') {
        modalCancelarConfirmacao.style.display = 'none';      
        modalOpacity.style.display = 'none';
        document.querySelector('.cancelar-confirmacao-li').classList.remove('hover-menu');
        limparCancelarConfirmacao();
    }
}

function limparCancelarConfirmacao() {
    let identOsCCInshab = document.getElementById('ident-os-inshab-cancelar-confirmacao');
    let cnlCCInshab = document.getElementById('cnl-inshab-cancelar-confirmacao');
    let terminalCCInshab = document.getElementById('terminal-inshab-cancelar-confirmacao');

    let identOsCCInsrec = document.getElementById('ident-os-insrec-cancelar-confirmacao');
    let cnlCCInsrec = document.getElementById('cnl-insrec-cancelar-confirmacao');
    let terminalCCInsrec = document.getElementById('terminal-insrec-cancelar-confirmacao');
    
    let identOsCCInsmud = document.getElementById('ident-os-insmud-cancelar-confirmacao');
    let cnlCCInsmud = document.getElementById('cnl-insmud-cancelar-confirmacao');
    let terminalCCInsmud = document.getElementById('terminal-insmud-cancelar-confirmacao');

    let identOsCCSubnum = document.getElementById('ident-os-subnum-cancelar-confirmacao');
    let cnlCCSubnum = document.getElementById('cnl-subnum-cancelar-confirmacao');
    let terminalCCSubnum = document.getElementById('terminal-subnum-cancelar-confirmacao');
            
    identOsCCInshab.value = ''; identOsCCInsrec.value = '', identOsCCSubnum.value = ''; identOsCCInsmud.value = '';
    cnlCCInshab.value = ''; cnlCCInsrec.value = '', cnlCCSubnum.value = ''; cnlCCInsmud.value = '';
    terminalCCInshab.value = ''; terminalCCInsrec.value = '', terminalCCSubnum.value = ''; terminalCCInsmud.value = '';

    modalResultadoCancelarConfirmacaoInshab.innerText = '';
    resultadoCancelarConfirmacaoInshab.style.display = 'none';
    modalResultadoCancelarConfirmacaoInsrec.innerText = '';
    resultadoCancelarConfirmacaoInsrec.style.display = 'none';
    modalResultadoCancelarConfirmacaoInsmud.innerText = '';
    resultadoCancelarConfirmacaoInsmud.style.display = 'none';
    modalResultadoCancelarConfirmacaoSubnum.innerText = '';
    resultadoCancelarConfirmacaoSubnum.style.display = 'none';
}

function cancelarConfirmacao(value) {
    let inshab = document.getElementById('modal-inshab-cancelar-confirmacao');
    let insrec = document.getElementById('modal-insrec-cancelar-confirmacao');
    let insmud = document.getElementById('modal-insmud-cancelar-confirmacao');
    let subnum = document.getElementById('modal-subnum-cancelar-confirmacao');

    if(value == "inshab") {
        inshab.style.display = 'flex';
        insrec.style.display = 'none';
        subnum.style.display = 'none';
        insmud.style.display = 'none';
    } else if(value == "insrec") {
        insrec.style.display = 'flex';
        inshab.style.display = 'none';
        subnum.style.display = 'none';
        insmud.style.display = 'none';
    } else if(value == "subnum") {
        subnum.style.display = 'flex';
        inshab.style.display = 'none';
        insrec.style.display = 'none';
        insmud.style.display = 'none';
    } else if(value == "insmud") {
        insmud.style.display = 'flex';
        inshab.style.display = 'none';
        insrec.style.display = 'none';
        subnum.style.display = 'none';
    }
};

/* ----- RESULTADO CANCELAR CONFIRMAÇÃO INSHAB ----- */

const resultadoCancelarConfirmacaoInshab = document.getElementById('resultado-cancelar-confirmacao-inshab');
const modalResultadoCancelarConfirmacaoInshab = document.getElementById('modal-resultado-cancelar-confirmacao-inshab');

function cancelarConfirmacaoInshab(
    identOs, cnl, terminal) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/cancelar_confirmacao_inshab.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
        }, 

        beforeSend: function () { 
            $("#loader-cancelar-confirmacao-inshab").show();    
        },

        success: function (msg) {
            $("#modal-resultado-cancelar-confirmacao-inshab").html(msg);
            $("#loader-cancelar-confirmacao-inshab").hide();  
        }
})}
    $('#btn-inshab-cancelar-confirmacao').click(function () {
        cancelarConfirmacaoInshab($("#ident-os-inshab-cancelar-confirmacao").val(), $("#cnl-inshab-cancelar-confirmacao").val(), 
        $("#terminal-inshab-cancelar-confirmacao").val());
        resultadoCancelarConfirmacaoInshab.style.display = 'flex';
        modalResultadoCancelarConfirmacaoInshab.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CANCELAR CONFIRMAÇÃO 

document.getElementById("btn-inshab-cancelar-confirmacao").disabled = true;
document.getElementById('modal-inshab-cancelar-confirmacao').addEventListener("input", function(){
const cancelarConfirmacaoinshab = document.getElementById("terminal-inshab-cancelar-confirmacao").value;
    if (
        cancelarConfirmacaoinshab !== null && cancelarConfirmacaoinshab !== '') {
        document.getElementById("btn-inshab-cancelar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-inshab-cancelar-confirmacao").disabled = true;
    }
});

/* ----- RESULTADO CANCELAR CONFIRMAÇÃO INSREC ----- */

const resultadoCancelarConfirmacaoInsrec = document.getElementById('resultado-cancelar-confirmacao-insrec');
const modalResultadoCancelarConfirmacaoInsrec = document.getElementById('modal-resultado-cancelar-confirmacao-insrec');

function cancelarConfirmacaoInsrec (
    identOs, cnl, terminal) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/cancelar_confirmacao_insrec.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
        }, 

        beforeSend: function () { 
            $("#loader-cancelar-confirmacao-insrec").show();    
        },

        success: function (msg) {
            $("#modal-resultado-cancelar-confirmacao-insrec").html(msg);
            $("#loader-cancelar-confirmacao-insrec").hide();  
        }
})}
    $('#btn-insrec-cancelar-confirmacao').click(function () {
        cancelarConfirmacaoInsrec($("#ident-os-insrec-cancelar-confirmacao").val(), $("#cnl-insrec-cancelar-confirmacao").val(), 
        $("#terminal-insrec-cancelar-confirmacao").val());
        resultadoCancelarConfirmacaoInsrec.style.display = 'flex';
        modalResultadoCancelarConfirmacaoInsrec.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CANCELAR CONFIRMAÇÃO 

document.getElementById("btn-insrec-cancelar-confirmacao").disabled = true;
document.getElementById('modal-insrec-cancelar-confirmacao').addEventListener("input", function(){
const cancelarConfirmacaoinsrec = document.getElementById("terminal-insrec-cancelar-confirmacao").value;
    if (
        cancelarConfirmacaoinsrec !== null && cancelarConfirmacaoinsrec !== '') {
        document.getElementById("btn-insrec-cancelar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-insrec-cancelar-confirmacao").disabled = true;
    }
});

/* ----- RESULTADO CANCELAR RESERVA INSMUD ----- */

const resultadoCancelarConfirmacaoInsmud = document.getElementById('resultado-cancelar-confirmacao-insmud');
const modalResultadoCancelarConfirmacaoInsmud = document.getElementById('modal-resultado-cancelar-confirmacao-insmud');

function cancelarConfirmacaoInsmud(
    identOs, cnl, terminal) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/cancelar_confirmacao_insmud.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal
        }, 

        beforeSend: function () { 
            $("#loader-cancelar-confirmacao-insmud").show();    
        },

        success: function (msg) {
            $("#modal-resultado-cancelar-confirmacao-insmud").html(msg);
            $("#loader-cancelar-confirmacao-insmud").hide();  
        }
})}
    $('#btn-insmud-cancelar-confirmacao').click(function () {
        cancelarConfirmacaoInsmud($("#ident-os-insmud-cancelar-confirmacao").val(), $("#cnl-insmud-cancelar-confirmacao").val(), 
        $("#terminal-insmud-cancelar-confirmacao").val());
        resultadoCancelarConfirmacaoInsmud.style.display = 'flex';
        modalResultadoCancelarConfirmacaoInsmud.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CANCELAR RESERVA INSMUD

document.getElementById("btn-insmud-cancelar-confirmacao").disabled = true;
document.getElementById('modal-insmud-cancelar-confirmacao').addEventListener("input", function(){
const cancelarConfirmacaoinsmud = document.getElementById("terminal-insmud-cancelar-confirmacao").value;
    if (
        cancelarConfirmacaoinsmud !== null && cancelarConfirmacaoinsmud !== '') {
        document.getElementById("btn-insmud-cancelar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-insmud-cancelar-confirmacao").disabled = true;
    }
});

/* ----- RESULTADO CANCELAR RESERVA SUBUM ----- */

const resultadoCancelarConfirmacaoSubnum = document.getElementById('resultado-cancelar-confirmacao-subnum');
const modalResultadoCancelarConfirmacaoSubnum = document.getElementById('modal-resultado-cancelar-confirmacao-subnum');

function cancelarConfirmacaoSubnum(
    identOs, cnl, 
    terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/cancelar_confirmacao_subnum.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-cancelar-confirmacao-subnum").show();    
        },

        success: function (msg) {
            $("#modal-resultado-cancelar-confirmacao-subnum").html(msg);
            $("#loader-cancelar-confirmacao-subnum").hide();  
        }
})}
    $('#btn-subnum-cancelar-confirmacao').click(function () {
        cancelarConfirmacaoSubnum($("#ident-os-subnum-cancelar-confirmacao").val(), $("#cnl-subnum-cancelar-confirmacao").val(), 
        $("#terminal-subnum-cancelar-confirmacao").val(), $("#flag-port-subnum-cancelar-confirmacao").val());
        resultadoCancelarConfirmacaoSubnum.style.display = 'flex';
        modalResultadoCancelarConfirmacaoSubnum.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CANCELAR RESERVA INSMUD

document.getElementById("btn-subnum-cancelar-confirmacao").disabled = true;
document.getElementById('modal-subnum-cancelar-confirmacao').addEventListener("input", function(){
const cancelarConfirmacaoSubnum = document.getElementById("terminal-subnum-cancelar-confirmacao").value;
    if (
        cancelarConfirmacaoSubnum !== null && cancelarConfirmacaoSubnum !== '') {
        document.getElementById("btn-subnum-cancelar-confirmacao").disabled = false;
    } else {
        document.getElementById("btn-subnum-cancelar-confirmacao").disabled = true;
    }
});

/* ----- CANCELAR RESERVA ----- */

const modalCancelarReserva = document.getElementById('cancelar-reserva');

function openCancelarReserva() {
    if(modalCancelarReserva.style.display = 'none') {
        modalCancelarReserva.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.cancelar-reserva-li').classList.add('hover-menu');
    }
}

function closeCancelarReserva() {
    if(modalCancelarReserva.style.display = 'flex') {
        modalCancelarReserva.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.cancelar-reserva-li').classList.remove('hover-menu');

        limparCancelarReserva();
    }
}

function limparCancelarReserva() {
    let terminal = document.getElementById('terminal-cancelar-reserva');
    let nrcCR = document.getElementById('nrc-cancelar-reserva');
    
    terminal.value = '';
    nrcCR.value = '';

    modalResultadoCancelarReserva.innerText = '';
    resultadoCancelarReserva.style.display = 'none';
}

const resultadoCancelarReserva = document.getElementById('resultado-cancelar-reserva');
const modalResultadoCancelarReserva = document.getElementById('modal-resultado-cancelar-reserva');

function cancelarReserva(
    terminal, nrc) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/cancelar_reserva.php', 
        data: {
            terminal: terminal,
            nrc: nrc
        }, 

        beforeSend: function () { 
            $("#loader-cancelar-reserva").show();    
        },

        success: function (msg) {
            $("#modal-resultado-cancelar-reserva").html(msg);
            $("#loader-cancelar-reserva").hide();  
        }
})}
    $('#btn-cancelar-reserva').click(function () {
        cancelarReserva($("#terminal-cancelar-reserva").val(), $("#nrc-cancelar-reserva").val());
        resultadoCancelarReserva.style.display = 'flex';
        modalResultadoCancelarReserva.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CANCELAR RESERVA 

document.getElementById("btn-cancelar-reserva").disabled = true;
document.getElementById('cancelar-reserva').addEventListener("input", function(){
const cancelarReservaBlock = document.getElementById("nrc-cancelar-reserva").value;
    if (
        cancelarReservaBlock !== null && cancelarReservaBlock !== '') {
        document.getElementById("btn-cancelar-reserva").disabled = false;
    } else {
        document.getElementById("btn-cancelar-reserva").disabled = true;
    }
});

/* ----- SOLICITAR LIBERAÇÃO ----- */

const modalSolicitarLiberacao = document.getElementById('solicitar-liberacao');
const modalOpacitySolicitarLiberacao = document.getElementById('modal-opacity-solicitar-liberacao');

function openSolicitarLiberacao() {
    if(modalSolicitarLiberacao.style.display = 'none') {
        modalSolicitarLiberacao.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.solicitar-liberacao-li').classList.add('hover-menu');
    }
}

function closeSolicitarLiberacao() {
    if(modalSolicitarLiberacao.style.display = 'flex') {
        modalSolicitarLiberacao.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.solicitar-liberacao-li').classList.remove('hover-menu');
        limparSolicitarLiberacao();
    }
}

function limparSolicitarLiberacao() {
    let identOsSL = document.getElementById('ident-os-solicitar-liberacao');
    let cnlSL = document.getElementById('cnl-solicitar-liberacao');
    let terinalSL = document.getElementById('terminal-solicitar-liberacao');
    let flagPortSL = document.getElementById('flag-port-solicitar-liberacao');
    
    identOsSL.value = '';
    cnlSL.value = '';
    terinalSL.value = '';
    flagPortSL.value = '';

    modalResultadoSolicitarLiberacao.innerText = '';
    resultadoSolicitarLiberacao.style.display = 'none';
}


const resultadoSolicitarLiberacao = document.getElementById('resultado-solicitar-liberacao');
const modalResultadoSolicitarLiberacao = document.getElementById('modal-resultado-solicitar-liberacao');

function solicitarLiberacao(
    identOs, cnl, 
    terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/solicitar_liberacao.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-solicitar-liberacao").show();    
        },

        success: function (msg) {
            $("#modal-resultado-solicitar-liberacao").html(msg);
            $("#loader-solicitar-liberacao").hide();  
        }
})}
    $('#btn-solicitar-liberacao').click(function () {
        solicitarLiberacao($("#ident-os-solicitar-liberacao").val(), $("#cnl-solicitar-liberacao").val(), 
        $("#terminal-solicitar-liberacao").val(), $("#flag-port-solicitar-liberacao").val());
        resultadoSolicitarLiberacao.style.display = 'flex';
        modalResultadoSolicitarLiberacao.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO SOLICITAR LIBERAÇÃO

document.getElementById("btn-solicitar-liberacao").disabled = true;
document.getElementById('solicitar-liberacao').addEventListener("input", function(){
const solicitarLiberacaBlock = document.getElementById("flag-port-solicitar-liberacao").value;
    if (
        solicitarLiberacaBlock !== null && solicitarLiberacaBlock !== '') {
        document.getElementById("btn-solicitar-liberacao").disabled = false;
    } else {
        document.getElementById("btn-solicitar-liberacao").disabled = true;
    }
});

/* ----- CONFIRMAR LIBERAÇÃO ----- */

const modalConfirmarLiberacao = document.getElementById('confirmar-liberacao');
const modalOpacityConfirmarLiberacao = document.getElementById('modal-opacity-confirmar-liberacao');

function openConfirmarLiberacao() {
    if(modalConfirmarLiberacao.style.display = 'none') {
        modalConfirmarLiberacao.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.confirmar-liberacao-li').classList.add('hover-menu');
    }
}

function closeConfirmarLiberacao() {
    if(modalConfirmarLiberacao.style.display = 'flex') {
        modalConfirmarLiberacao.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.confirmar-liberacao-li').classList.remove('hover-menu');
        limparConfirmarLiberacao();
    }
}

function limparConfirmarLiberacao() {
    let identOsCL = document.getElementById('ident-os-confirmar-liberacao');
    let cnlCL = document.getElementById('cnl-confirmar-liberacao');
    let terinalCL = document.getElementById('terminal-confirmar-liberacao');
    let flagPortCL = document.getElementById('flag-port-confirmar-liberacao');
    
    identOsCL.value = '';
    cnlCL.value = '';
    terinalCL.value = '';
    flagPortCL.value = '';

    modalResultadoConfirmarLiberacao.innerText = '';
    resultadoConfirmarLiberacao.style.display = 'none';
}

const resultadoConfirmarLiberacao = document.getElementById('resultado-confirmar-liberacao');
const modalResultadoConfirmarLiberacao = document.getElementById('modal-resultado-confirmar-liberacao');

function confirmarLiberacao(
    identOs, cnl, 
    terminal, flagPort) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/confirmar_liberacao.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal,
            flagPort: flagPort
        }, 

        beforeSend: function () { 
            $("#loader-confirmar-liberacao").show();    
        },

        success: function (msg) {
            $("#modal-resultado-confirmar-liberacao").html(msg);
            $("#loader-confirmar-liberacao").hide();  
        }
})}
    $('#btn-confirmar-liberacao').click(function () {
        confirmarLiberacao($("#ident-os-confirmar-liberacao").val(), $("#cnl-confirmar-liberacao").val(), 
        $("#terminal-confirmar-liberacao").val(), $("#flag-port-confirmar-liberacao").val());
        resultadoConfirmarLiberacao.style.display = 'flex';
        modalResultadoConfirmarLiberacao.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CONFIRMAR LIBERAÇÃO

document.getElementById("btn-confirmar-liberacao").disabled = true;
document.getElementById('confirmar-liberacao').addEventListener("input", function(){
const confirmarLiberacaBlock = document.getElementById("flag-port-confirmar-liberacao").value;
    if (
        confirmarLiberacaBlock !== null && confirmarLiberacaBlock !== '') {
        document.getElementById("btn-confirmar-liberacao").disabled = false;
    } else {
        document.getElementById("btn-confirmar-liberacao").disabled = true;
    }
});

/* ----- CANCELAR LIBERAÇÃO ----- */

const modalCancelarLiberacao = document.getElementById('cancelar-liberacao');
const modalOpacityCancelarLiberacao = document.getElementById('modal-opacity-cancelar-liberacao');

function openCancelarLiberacao() {
    if(modalCancelarLiberacao.style.display = 'none') {
        modalCancelarLiberacao.style.display = 'flex';
        modalOpacity.style.display = 'block';
        document.querySelector('.cancelar-liberacao-li').classList.add('hover-menu');
    }
}

function closeCancelarLiberacao() {
    if(modalCancelarLiberacao.style.display = 'flex') {
        modalCancelarLiberacao.style.display = 'none';
        modalOpacity.style.display = 'none';
        document.querySelector('.cancelar-liberacao-li').classList.remove('hover-menu');
        limparCancelarLiberacao();
    }
}

function limparCancelarLiberacao() {
    let identOsCL = document.getElementById('ident-os-cancelar-liberacao');
    let cnlCL = document.getElementById('cnl-cancelar-liberacao');
    let terinalCL = document.getElementById('terminal-cancelar-liberacao');
    
    identOsCL.value = '';
    cnlCL.value = '';
    terinalCL.value = '';

    modalResultadoConfirmarLiberacao.innerText = '';
    resultadoConfirmarLiberacao.style.display = 'none';
}

const resultadoCancelarLiberacao = document.getElementById('resultado-cancelar-liberacao');
const modalResultadoCancelarLiberacao = document.getElementById('modal-resultado-cancelar-liberacao');

function cancelarLiberacao(
    identOs, cnl, 
    terminal) {
    $.ajax ({
        type: 'POST', 
        dataType: 'html', 
        url: 'php/cancelar_liberacao.php', 
        data: {
            identOs: identOs,
            cnl: cnl,
            terminal: terminal
        }, 

        beforeSend: function () { 
            $("#loader-cancelar-liberacao").show();    
        },

        success: function (msg) {
            $("#modal-resultado-cancelar-liberacao").html(msg);
            $("#loader-cancelar-liberacao").hide();  
        }
})}
    $('#btn-cancelar-liberacao').click(function () {
        cancelarLiberacao($("#ident-os-cancelar-liberacao").val(), $("#cnl-cancelar-liberacao").val(), 
        $("#terminal-cancelar-liberacao").val());
        resultadoCancelarLiberacao.style.display = 'flex';
        modalResultadoCancelarLiberacao.innerText = '';
});

// FUNCÃO PARA BLOQUEAR INPUT NÃO PREENCHIDO CANCELAR LIBERAÇÃO

document.getElementById("btn-cancelar-liberacao").disabled = true;
document.getElementById('cancelar-liberacao').addEventListener("input", function(){
const cancelarLiberacaBlock = document.getElementById("terminal-cancelar-liberacao").value;
    if (
        cancelarLiberacaBlock !== null && cancelarLiberacaBlock !== '') {
        document.getElementById("btn-cancelar-liberacao").disabled = false;
    } else {
        document.getElementById("btn-cancelar-liberacao").disabled = true;
    }
});

