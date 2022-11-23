<?php


session_start();
date_default_timezone_set ("America/Sao_Paulo");

$url = "http://10.27.16.140:7018/ws-linhaIndividual/NumeracaoLIService?wsdl";
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

$ocupaInsrec = $client -> __soapCall("ocupaConfirmacao", array(
    "ocupaConfirmacao" => array(
        "DATA_HORA" => $data,
        "IDENT_OS" => $identOs,
        "NDS_ID_LOCAL" => $cnl,
        "NDS" => $terminalFormatado,
        "NDS_COMPLEMEN" => "0",
        "TIPO_OPERACAO_ACMD" => "90",
        "NATUREZA_OS" => "INSREC",
        "CABO_ATUAL" => "99",
        "PAR_ATUAL" => "99",
        "FLAG_SPEEDY_ATUAL" => "0",
        "FLAG_ATL" => $flagPort, 
    )
));

echo "<br>";
echo "<b>". $ocupaInsrec -> COD_MSG." - ";
echo "<b>". $ocupaInsrec -> DSC_MSG."<br>";