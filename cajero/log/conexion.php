<?php  
print "hola mundo"

$conexion = new mysqli("localhost","root","","usuario","3307");
$conexion->set_charset("utf8");
if($conexion){
    echo "console.log(conectado exitosamente)";
}else{
    echo "no se a podido conectar a la base de datos";
}

?>
