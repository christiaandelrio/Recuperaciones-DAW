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