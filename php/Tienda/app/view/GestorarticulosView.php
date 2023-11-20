<?php
    class GestorarticulosView{

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
            echo "<h1>Gestor de articulos</h1>";
            echo "<form action='gestorarticulos/llamarVistaCrear'>";
            echo "Crear articulo ";
            echo "<input type='submit' href='' name='crear' value='Crear'>";
            echo "</form>";
            echo "<form action='gestorarticulos/llamarVistaBorrar'>";
            echo "<br></br>Borrar articulo ";
            echo "<input type='submit' name='borrar' value='Borrar'>";
            echo "</form>";
            echo "<form action='gestorarticulos/llamarVistaModificar'>";
            echo "<br></br>Modificar articulo ";
            echo "<input type='submit' name='modificar' value='Modificar'>";
            echo "</form>";
            echo "<form action='gestorarticulos/verArticulos'>";
            echo "<br></br>Ver articulos ";
            echo "<input type='submit' name='modificar' value='Ver'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();
        }

        public function vueltaInicio(){
            echo $this->cabecera();
            echo "<div class='inicio'>";
            echo "<h1>Gestor de articulos</h1>";
            echo "<form action='llamarVistaCrear'>";
            echo "Crear articulo ";
            echo "<input type='submit' href='' name='crear' value='Crear'>";
            echo "</form>";
            echo "<form action='llamarVistaBorrar'>";
            echo "<br></br>Borrar articulo ";
            echo "<input type='submit' name='borrar' value='Borrar'>";
            echo "</form>";
            echo "<form action='llamarVistaModificar'>";
            echo "<br></br>Modificar articulo ";
            echo "<input type='submit' name='modificar' value='Modificar'>";
            echo "</form>";
            echo "<form action='verArticulos'>";
            echo "<br></br>Ver articulos ";
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
            echo "<h1>Pagina borrar articulo</h1>";
            echo "<form action='borrarArticulo' method='post'>";
            echo "Borrar articulo ";
            echo "<input type=text name='idArticulo'/>";
            echo "<input type='submit' href='' name='borrar' value='Borrar'>";
            echo "</form>";
            echo "<form action='volverPagInicio'>";
            echo "Volver pagina inicio ";
            echo "<input type='submit' name='regresar' value='Inicio'>";
            echo "</form>";
            echo "</div>";
            echo $this->pie();

        }

        public function modificar(){
            echo $this->cabecera();
            echo "<div class='modificar'>";
            echo "<h1>Pagina modificar articulo</h1>";
            echo "<form action='modificarArticulo' method='post'>";
            echo "ID articulo ";
            echo "<input type=text name='idArticulo' required/>";
            echo "<br>";
            echo "<h3>Datos a modificar</h3>";
            echo "Nombre articulo ";
            echo "<input type=text name='nombreArticulo' required/>";
            echo "<br>";
            echo "Categoria articulo ";
            echo "<input type=text name='categoriaArticulo'required/>";
            echo "<br>";
            echo "Stock articulo ";
            echo "<input type=text name='stockArticulo'required/>";
            echo "<br>";
            echo "Precio articulo ";
            echo "<input type=text name='precioArticulo'required/>";
            echo "<br>";
            echo "<input type='submit' href='' name='modificar' value='Modificar'>";
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
            echo "<h1>Pagina crear articulo</h1>";
            echo "<form action='crearArticulo' method='post'>";
            echo "ID articulo a modificar ";
            echo "<input type=text name='idArticulo'/>";
            echo "<br>";
            echo "Nombre articulo ";
            echo "<input type=text name='nombreArticulo'/>";
            echo "<br>";
            echo "Categoria articulo ";
            echo "<input type=text name='categoriaArticulo'/>";
            echo "<br>";
            echo "Stock articulo ";
            echo "<input type=text name='stockArticulo'/>";
            echo "<br>";
            echo "Precio articulo ";
            echo "<input type=text name='precioArticulo'/>";
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
            echo "<h1>Pagina ver articulo</h1>";
            echo "<form action='filtrarArticulos' method='post'>";
            echo "Articulos: ";
            echo "<div class='lista'>";
            echo $lista;
            echo "</div>";
            echo "<h3>Filtrar articulos</h3>";
            echo "<input type='text' name='categoriaArticulo' required>";
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