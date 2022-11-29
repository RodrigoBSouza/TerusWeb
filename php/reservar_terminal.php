<?php


session_start();

$url = "URL-DA-API";
$cnl = isset($_POST['cnl']) ? $_POST['cnl'] : null;
$areaTel = isset($_POST['areaTel']) ? $_POST['areaTel'] : null;
$estacao = array(
    "localidade" => $cnl,
    "area_telefonica" => $areaTel
);
$flagPort = isset($_POST['flagPort']) ? $_POST['flagPort'] : null;
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
$cliente = new SoapClient($url, array("trace" => 1, "exception" => 0));

$resultado = $cliente -> __soapCall("Reserva", array(
    "Reserva" => array(
        "estacao_instalacao" => $estacao,
        "tecnologia" => "VOIP",
        "flag_portabilidade" => "N",
        "terminal" => $terminal,
        "nrc" => $nrc,
        "classe_servico" => "LIRS"
    )
));

$count_objeto = count(get_object_vars($resultado));

if ($count_objeto == 1) {
    echo "<b>".$resultado -> codigo_retorno." - Operação realizada com sucesso!";
} elseif ($count_objeto > 1) {
    echo "<b>".$resultado -> codigo_retorno." - ";
    echo " ";
    echo $resultado -> motivo_falha;
}
