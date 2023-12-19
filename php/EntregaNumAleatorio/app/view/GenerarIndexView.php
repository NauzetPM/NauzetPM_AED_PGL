<?php
class GenerarIndexView{
    private static function cabecera(){
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
    
    private static function pie(){
        return '
        </body>
        </html>            
        ';
    }

        public static function crearindex(){
            echo GenerarIndexView::cabecera();
            echo '<form action="comprobarintento" method="POST">';

        echo '<input type="text" name="intento" id="intento" placeholder="Inserte"><br>';

        echo '<input type="submit" value="enviar" placeholder="enviar"/><br></form>';
            if(file_exists('app/model/intentos.txt')){
                $file = file_get_contents('app/model/intentos.txt');
                $arrayIntentos=unserialize($file)??[];
                    foreach ($arrayIntentos as $key => $value) {
                        echo "$value";
                    }
            }
            echo GenerarIndexView::pie();

        }
}

?>