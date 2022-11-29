<?php


session_start();
date_default_timezone_set ("America/Sao_Paulo");

$url = "URL-DA-API";
$data = date('Y-m-d\TH:i:s.000000');
$identOs = isset($_POST['identOs']) ? $_POST['identOs'] : null;
$cnl = isset($_POST['cnl']) ? $_POST['cnl'] : null;
$terminal = isset($_POST['terminal']) ? $_POST['terminal'] : null;
$terminalFormatado = substr($terminal, 2);

if(strlen($terminalFormatado) >= 6 && strlen($terminalFormatado) < 8) {
    echo "<b> Insira o terminal com o DDD.";
} else if(strlen($terminalFormatado) > 8 || strlen($terminalFormatado) < 8) {
    echo "<b> Número do terminal inválido.";
}

$flagPort = isset($_POST['flagPort']) ? $_POST['flagPort'] : null;
$client = new SoapClient($url, array("trace" => 1, "exception" => 0));  

$confirmaLiberacao = $client -> __soapCall("confirmaLiberacao", array(
    "confirmaLiberacao" => array(
        "DATA_HORA" => $data,
        "IDENT_OS" => $identOs,
        "NDS_ID_LOCAL" => $cnl,
        "NDS" => $terminalFormatado,
        "NDS_COMPLEMEN" => "0",
        "NATUREZA_OS" => "RET",
        "CABO" => "99",
        "PAR" => "99",
        "FLAG_SPEEDY" => "0",
        "FLAG_RET_PORT" => $flagPort, 
    )
));

echo "<br>";
echo "<b>". $confirmaLiberacao -> COD_MSG." - ";
echo "<b>". $confirmaLiberacao -> DSC_MSG."<br>";
