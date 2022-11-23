<?php

session_start();

$url = "http://10.27.16.140:7018/ws-linhaIndividual/NumeracaoLIService?wsdl";
$cn = isset($_POST['cn']) ? $_POST['cn'] : null;
$prefixo = isset($_POST['prefixo']) ? $_POST['prefixo'] : null;
$mcdu = isset($_POST['mcdu']) ? $_POST['mcdu'] : null;
$terminal = isset($_POST['terminal']) ? $_POST['terminal'] : null;

$terminal = array (
    "cn" => $cn = substr($terminal, 0, 2),
    "prefixo" => $prefixo = substr($terminal, 2, 4),
    "mcdu" => $mcdu = substr($terminal, 6, 4)
);

$terminalFormatado = implode("", $terminal);

$nrc = isset($_POST['nrc']) ? $_POST['nrc'] : null;
$client = new SoapClient($url, array("trace" => 1, "exception" => 0));

$resultado = $client -> __soapCall("CancelaReserva", array(
    "CancelaReserva" => array(
        "terminal" => $terminal,
        "nrc" => $nrc
    )
));

$count_objeto = count(get_object_vars($resultado));

if ($count_objeto == 1) {
    echo "<b>".$resultado -> codigo_retorno." - Operação realizada com sucesso!";
} elseif ($count_objeto > 1) {
    echo "<b>".$resultado -> codigo_retorno;
    echo " ";
    echo " - ".$resultado -> motivo_falha;
}

