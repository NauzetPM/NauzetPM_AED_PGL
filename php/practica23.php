<?php
echo "<table border='1'>";
echo "<tr><th>Variable</th><th>Valor</th></tr>";
foreach ($_SERVER as $key => $value) {
    echo "<tr><td>$key</td><td>$value</td></tr>";
}
echo "</table>";
?>