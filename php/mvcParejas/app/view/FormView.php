<?php
class FormView{
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

        public static function crearForm(){
            echo FormView::cabecera();
            echo '<form action="app/controller/EmparejarController.php" method="POST">';

        require_once("app/model/array_nombres.php");
        echo '<input type="text" name="entrevistado" id="entrevistado" placeholder="Encuestado"><br>';
        foreach ($array_nombres as $key => $nombre) {
            echo $key;
            echo "<input type=\"text\" name=\"$key\"  placeholder=\"$nombre\"/><br>";
            
        }
        echo '<input type="submit" value="enviar" placeholder="enviar"/><br></form>';
    
            echo FormView::pie();
        }
}

?>