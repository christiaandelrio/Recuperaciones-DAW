<?php
//Previamente debemos crear una sesion
//Una sesion nueva crea una sesion vacía , cada vez que hacemos submit se creara una sesion nueva y vacia.
//Y se borraran los datos.
session_start();

//CREAMOS UNA CLASE

use Random\Engine\Secure;

class Frase
{
    public $palindromo;
    public $frase;

    public function __construct($palindromo, $frase)
    {

        $this->palindromo = $palindromo;
        $this->frase = $frase;
    }
}


function check_frase($frase)
{
    $regex = '/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/u';

    if (preg_match($regex,$_POST["frase"])) {
        echo "La cadena contiene solo caracteres del abecedario español.";
        return true;
    } else {
        echo "La cadena contiene caracteres no permitidos.";
        echo '<script language="javascript">alert("LO SIENTO, La frase contiene caracteres no permitidos");</script>';
        return false;
    }
}


function check_palindromo($frase)
{

    //Generamos un array reverse para invertir la frase
    $fraseInvertida = array_reverse(str_split(str_replace(" ","",strtolower($frase))));

    //Comparamos un array con el otro con un if para ver si coinciden.

    if (str_split(str_replace(" ","",strtolower($frase))) == $fraseInvertida) 
    {
        echo "El array 'frase' es igual al array invertido.";
        return true;
    } else 
    {
        echo "El array 'frase' no coincide con el array invertido.";
        return false;
    }
}

//HACEMOS COMPROBACION DE SESION Y TAMBIEN NOS SIRVE COMO UN "PREVENT_DEFAULT"
//Creamos un array de sesion para guardar la sesion
//En la sesion del servidor crea una variable nueva que se llama frases y le asigna un array vacio.
if (session_status() === PHP_SESSION_NONE) {
    echo ("Compruebo sesion");
    session_start();
    //SE ASIGNA UN ARRAY VACIO EN CASO DE QUE SEA UNA SESION NUEVA.
    $_SESSION['frases'] = array();
}

//ESTO COMPRUEBA QUE SI EL OBJETO REQUEST METHOD RECIBE UN POST 
if ($_SERVER['REQUEST_METHOD'] == "POST") {

    if (isset($_POST["frase"])) {
        //VAMOS A COMPROBAR SI ES VALIDA O NO LA FRASE
        $isFraseValida = check_frase($_POST["frase"]);
        if ($isFraseValida) {

            $isFrasePalindromo = check_palindromo($_POST["frase"]);
            if ($isFrasePalindromo) 
            {
                //ESTO COMPRUEBA QUE SEA PALINDROMO
                $_SESSION["frases"][] = new Frase("si", $_POST["frase"]);
               
                
            }
            else
            {
                $_SESSION["frases"][] = new Frase("no", $_POST["frase"]);
        

            }
            var_dump($_SESSION["frases"]);
        }
    }
}


$counter=0;
$count=count($_SESSION["frases"]);

//Debemos realizar una web con un formulario que reciba una frase que solo tenga letras minusculas 
//sin acentuar y sin signos de puntuacion ni caracteres extranhos.

//A)Si la frase no cumple se le indicará al usuario porqué y se le solicitará de nuevo su introducción

//Vamos con el codigo de comprobación de la expresión regular:




//B) Si la frase no cumple con lo anterior: se le indicará al usuario porque


?>

<body>
    <form method="POST" action="pagina1.php">
        <label for="frase">Frase a introducir</label>
        <input id="frase" name="frase" />
        <button type="submit" id="enviar">Enviar</button>
    </form>



    <table id="tabla" name="tabla" border=1>
        <thead>
            <tr>
                <th>Palindromo</th>
                <th>Frase</th>
            </tr>
        </thead>
        <tbody>
            <?php
                while ($counter < $count) {
                    $frase = $_SESSION["frases"][$counter]->frase;
                    $palindromo = $frase->palindromo;
                    echo "<tr>
                                <td>$palindromo</td>
                                <td>$frase</td>
                        </tr>";
                };

            ?>
            <tr>
                <td>Palindromo</td>
                <td>Frase</td>
            </tr>
        </tbody>
    </table>

</body>