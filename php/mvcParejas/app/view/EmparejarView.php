<?php
class EmparejarView{

public function __construct(){}

private function cabecera(){
    return '            
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
    </head>
    <body>';
}

private function pie(){
    return '
    </body>
    </html>            
    ';
}

public function mostrar($arrayParejas){
    echo $this->cabecera();
    //mostrar parejas
    //if(file_exists("./timer.txt")){
      /*  $fileTimer = file_get_contents('./timer.txt');
        $timer=unserialize($fileTimer);
        $horaMostrar=$timer+(60*60);*/
        //if($horaMostrar>=timer()){
            foreach ($arrayParejas as $key => $value) {
                echo "<p>$key va con $value</p>";
                echo "<br>";
            }
            //}
        //}
    echo $this->pie();
}
}
?>
