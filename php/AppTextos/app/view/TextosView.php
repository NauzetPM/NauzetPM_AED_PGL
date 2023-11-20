<?php
    class TextosView{

        public function __construct(){}

        private function cabecera(){
            return '            
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel=stylesheet href=../css/styles.css>
            </head>
            <body>
            '
            ;
        }
        private function cabecera1(){
            return '            
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel=stylesheet href=css/styles.css>
            </head>
            <body>
            '
            ;
        }

        private function pie(){
            return '
            </body>
            </html>            
            ';
        }

        public function iniciar(){
            echo $this->cabecera1();
            echo "<div class='inicio'>";
            echo "<h1>Gestor de Entradass</h1>";
            echo "<form action='textos/crear'>";
            echo "Crear Entrada ";
            echo "<input type='submit' href='' name='crear' value='Crear'>";
            echo "</form>";
            echo "<form action='textos/llamarVistaBorrar'>";
            echo "<br></br>Borrar Entrada ";
            echo "<input type='submit' name='borrar' value='Borrar'>";
            echo "</form>";
            echo "<form action='textos/mostrar'>";
            echo "<br></br>Ver Entradas ";
            echo "<input type='submit' name='modificar' value='Ver'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();
        }

        public function vueltaInicio(){
            echo $this->cabecera();
            echo "<div class='inicio'>";
            echo "<h1>Gestor de Entradas</h1>";
            echo "<form action='crear'>";
            echo "Crear Entrada ";
            echo "<input type='submit' href='' name='crear' value='Crear'>";
            echo "</form>";
            echo "<form action='llamarVistaBorrar'>";
            echo "<br></br>Borrar Entrada ";
            echo "<input type='submit' name='borrar' value='Borrar'>";
            echo "</form>";
            echo "<form action='mostrar'>";
            echo "<br></br>Ver Entradas ";
            echo "<input type='submit' name='modificar' value='Ver'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();
        }

        public function mostrarError($error){
            echo $this->cabecera();
            echo "<div class='error'>";
            echo "<h1>Se ha encontrado un error: {$error}</h1>";
            echo "<form action='volverPagInicio'>";
            echo "Volver pagina inicio ";
            echo "<input type='submit' name='regresar' value='Inicio'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();
        }

        public function borrar(){
            echo $this->cabecera();
            echo "<div class='borrar'>";
            echo "<h1>Pagina borrar Entrada</h1>";
            echo "<form action='borrar' method='post'>";
            echo "Borrar entradas ";
            echo "<input type=text name='autor'/>";
            echo "<input type='submit' href='' name='borrar' value='Borrar'>";
            echo "</form>";
            echo "<form action='volverPagInicio'>";
            echo "Volver pagina inicio ";
            echo "<input type='submit' name='regresar' value='Inicio'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();

        }


        public function crear(){
            echo $this->cabecera();
            echo "<div class='crear'>";
            echo "<h1>Pagina crear Entrada</h1>";
            echo "<form action='crearEntrada' method='post'>";
            echo "Autor ";
            echo "<input type=text name='autor'/>";
            echo "<br>";
            echo "Titulo ";
            echo "<input type=text name='titulo'/>";
            echo "<br>";
            echo "Contenido ";
            echo "<input type=text name='contenido'/>";
            echo "<br>";
            echo "<input type='submit' href='' name='crear' value='Crear'>";
            echo "</form>";
            echo "<form action='volverPagInicio'>";
            echo "Volver pagina inicio ";
            echo "<input type='submit' name='regresar' value='Inicio'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();
        }

        public function ver($lista){
            echo $this->cabecera();
            echo "<div class='ver'>";
            echo "<h1>Pagina ver Entradas</h1>";
            echo "<form action='mostrar' method='post'>";
            echo "Entradas: ";
            echo "<div class='lista'>";
            echo $lista;
            echo "</div>";
            echo "<h3>Filtrar Entradas</h3>";
            echo "<input type='text' name='autor' required>";
            echo "<input type='submit' name='filtrar' value='Filtrar'>";
            echo "</form>";
            echo "<br>";
            echo "<form action='volverPagInicio'>";
            echo "Volver pagina inicio ";
            echo "<input type='submit' name='regresar' value='Inicio'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();

        }

    }

?>