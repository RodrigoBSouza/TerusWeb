<?php

session_start();
date_default_timezone_set ("America/Sao_Paulo");

$url = "URL-DA-API";
$terminal = isset($_POST['terminal']) ? $_POST['terminal'] : null;
$terminalFormatado = substr($terminal, 2);

if(strlen($terminalFormatado) >= 6 && strlen($terminalFormatado) < 8) {
    echo "<b> Insira o terminal com o DDD.";
} else if(strlen($terminalFormatado) > 8 || strlen($terminalFormatado) < 8) {
    echo "<b> Número de terminal inválido.";
}

$cnl = isset($_POST['cnl']) ? $_POST['cnl'] : null;
$client = new SoapClient($url, array("trace" => 1, "exception" => 0));
$data = date('Y-m-d\TH:i:s');

$result = $client -> __soapCall("ConsultaFacilidadesRedeInterna", array(
    "ConsultaFacilidadesRedeInterna" => array(
        "DATA_HORA" => $data,
        "NDS_ID_LOCAL" => $cnl,
        "NDS" => $terminalFormatado,
        "NDS_COMPLEMEN" => "0"    
    )
));

$dadosRetorno = array(
    'IDENT_OS',
    'ESTADO_ATUAL',
    'TIPO_NUMERO_ATUAL',
    'LIC_ATUAL',
    'NDS_ENC_ATUAL',
    'RN1_ENC_ATUAL',
    'STATUS_OPCIONAL_ATUAL',
    'DOMAIN_NAME_ATUAL',
    'NRC',
    'TIPO_NUMERO_NOVO',
    'NDS_ENC_NOVO',
    'ESTADO_NOVO',
    'FUNCAO_CENTRAL_NOVA',
    'DOMAIN_NAME_NOVO' 
);

foreach ($dadosRetorno as $valor) {
    if (array_key_exists($valor, $result)){
        echo "<b>".$valor."</b>: ". $result -> $valor . "<br>";
    } 
}
