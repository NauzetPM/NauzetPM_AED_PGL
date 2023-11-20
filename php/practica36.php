<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ordenar Números</title>
</head>
<body>
    <h1>Ordenar Números</h1>
    
    <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
        <label for="numeros">Introduce números separados por espacios:</label>
        <input type="text" name="numeros" id="numeros">
        <input type="submit" value="Ordenar">
    </form>
    
    <?php
    function ordenarNumeros($cadenaNumeros) {

        $numeros = explode(" ", $cadenaNumeros);
        

        usort($numeros, function($a, $b) {
            if ($a % 2 == 1 && $b % 2 == 0) {
                return -1; // $a es impar y $b es par, $a va antes
            } elseif ($a % 2 == 0 && $b % 2 == 1) {
                return 1; // $a es par y $b es impar, $b va antes
            } else {
                return $a - $b; // Ambos son pares o ambos son impares
            }
        });
        
        return $numeros;
    }
    
    if (isset($_POST['numeros'])) {
        $cadenaNumeros = $_POST["numeros"];

        $numerosOrdenados = ordenarNumeros($cadenaNumeros);
        
        echo "<h2>Números ordenados:</h2>";
        foreach ($numerosOrdenados as $numero) {
            echo $numero . "<br>";
        }
    }
    ?>
</body>
</html>
