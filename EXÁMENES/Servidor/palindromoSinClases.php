<?php 
    session_start(); //Iniciamos una sesión en la que se guardarán los palíndromos inicialmente

    //Primero comprobamos si se ha enviado algo
    if(isset($_GET['frase'])){
        $cadena = $_GET['frase'];
        $regex = '/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/u';

        function esPalindromo($cadena){ //Cogemos la palabra y comprobamos si es palíndromo
            //Primero recibiremos la palabra, una vez la tengamos le quitaremos los espacios 
            //Después de quitarle los espacios, la guardaremos del revés en una variable
            //Si la variable al revés coincide con la normal, es palíndromo
            $cadenaSinEspacios = str_replace(' ','',$cadena); //La función str_replace recibe como primer parámetro lo que queremos sustituir, como segundo porqué y tercero la cadena

            $cadenaAlReves = strrev($cadenaSinEspacios); //La función strrev devuelve una cadena dada vuelta

            if($cadenaAlReves == $cadenaSinEspacios){
                return true;
            }else{
                return  false;
            }
            
        }
        //Ahora, si la cadena es palíndromo
        if(esPalindromo(($cadena)) && preg_match($regex, $cadena)){
            if(!isset($_SESSION['palindromos'])){
                //Si no hay ningún palindromo aún
                $_SESSION['palindromos'][] = $cadena; //Guardamos el primero
            }else{
                //En caso de que ya haya uno primero comprobamos si ya está en la lista
                if(!in_array($cadena,$_SESSION['palindromos'])){
                    $_SESSION['palindromos'][] = $cadena; 
                }
            }
        }
    }else{
        $_SESSION['palindromos'] = array();
    }

?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script defer src="script.js"></script>
    </head>
    <body>
        <form action="" method="GET">
            <label for="frase">Introduce una frase con letras minúsculas y sin acentuar:</label>
            <input type="text" id="frase" name="frase" placeholder="Introduce una frase" required>   

            <label for="enviar"></label>
            <input type="submit" name="Enviar" id="enviar"/>
        </form>

        <!--A partir de aquí imprimiremos los palíndromos almacenados en la sesión -->
        <?php 
            foreach($_SESSION['palindromos'] as $palindromo){
                echo $palindromo."<br>";
            }
        ?>
    </body>
</html>
  