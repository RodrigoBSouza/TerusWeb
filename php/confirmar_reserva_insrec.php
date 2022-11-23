<?php


session_start();
date_default_timezone_set ("America/Sao_Paulo");

$url = "http://10.27.16.140:7018/ws-linhaIndividual/NumeracaoLIService?wsdl";
$data = date('Y-m-d\TH:i:s.000000');
$identOs = isset($_POST['identOs']) ? $_POST['identOs'] : null;
$cnl = isset($_POST['cnl']) ? $_POST['cnl'] : null;
$idEstacao = isset($_POST['idEstacao']) ? $_POST['idEstacao'] : null;
$terminal = isset($_POST['terminal']) ? $_POST['terminal'] : null;
$terminalFormatado = substr($terminal, 2);

if(strlen($terminalFormatado) >= 6 && strlen($terminalFormatado) < 8) {
    echo "<b> Insira o terminal com o DDD.";
} else if(strlen($terminalFormatado) > 8 || strlen($terminalFormatado) < 8) {
    echo "<b> Número do terminal inválido.";
}

$flagInsPort = isset($_POST['flagInsPort']) ? $_POST['flagInsPort'] : null;
$nrc = isset($_POST['nrc']) ? $_POST['nrc'] : null;
$idFibra = isset($_POST['idFibra']) ? $_POST['idFibra'] : null;
$client = new SoapClient($url, array("trace" => 1, "exception" => 0));


$insrec = $client -> __soapCall("confirmaReserva", array(
    "confirmaReserva" => array(
        "DATA_HORA" => $data,
        "IDENT_OS" => $identOs,
        "COD_CLASSE" => 'LIRS',
        "ID_LOCAL_ESTACAO" => $cnl,
        "ID_ESTACAO" => $idEstacao,
        "NDS_ID_LOCAL" => $cnl,
        "NDS" => $terminalFormatado,
        "NDS_COMPLEMEN" => "0",
        "TIPO_OPERACAO" => "SDVOIP",
        "NATUREZA_OS" => "INSREC",
        "CABO_ATUAL" => "99",
        "PAR_ATUAL" => "99",
        "FLAG_SPEEDY_ATUAL" => "0", 
        "FLAG_INS_PORT" => $flagInsPort,
        "NRC" => $nrc,
        "ID_FIBRA" => $idFibra,
        "NDS_ID_LOCAL_NOVO" => $cnl,
        "NDS_NOVO" => $terminalFormatado,
        "NDS_COMPLEMEN_NOVO" => "0"
    )
));

// echo "<b>".print_r($insrec, true)."</br>";
echo "<br>";
echo "<b>". $insrec -> COD_MSG." - ";
echo "<b>". $insrec -> DSC_MSG."<br>";