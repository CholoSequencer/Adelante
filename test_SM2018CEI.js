// questions array (below) is numbered 0-end
// but exam questions are numbered 1 - (end - 1)        
function checkAnswer() {
    
    var numOfQs = 0;
    
    var choices = [];
    var chosen = [];
    
    for (var i = 0; i < pos; i++ ) {
        numOfQs += qNum[i];
    }
    
    firstQ = numOfQs - qNum[pos - 1];
    //document.write(questions[pos].Correct);
    for (var j = firstQ; j < numOfQs; j++) {
    choices.push(document.getElementsByName("choices" + j));
    for (var i=0; i < choices[j -firstQ].length; i++) {
        if (choices[j - firstQ][i].checked) {
            chosen.push(choices[j - firstQ][i].value);
            //document.write("if");
        }
    }
    }
        
    //document.write(questions[pos].Correct);
    //document.write(choices.length);
    //document.write("Holass");
    for (var i=0; i < chosen.length; i++) {

        if (chosen[i] == questions[pos].Correct) {
            score++;
        }
    }
    
    //document.write("Hola");
    if (pos == test.length) {
        document.write("<h1>Te sacaste " + score + " de " + numOfQs + " preguntas</h1><br>");
        document.write(qNum);
    } else {
    renderQuestion();
    }
}


// will create array of htmls that make up
// ONE/SINGLE test
function testIntegrator() {
    var len = questions.length;
    var num = 0;
    var test = [];
    while (num < len) {
        
        var text = '<html lang="en">\
        <head></head>\
        <body>';
        if (questions[num].name.includes("-")) {
            var index = questions[num].name.indexOf("-");
            var z = parseInt(questions[num].name.substring(index+1));
            qNum.push(parseInt(z - num));
            for (; num < z; num++) {
                text += display(num+1);
            }
            text += '</body>\
            </html>'
            test.push(text);
        } else {
            text += '</body>\
            </html>'
            test.push(display(num+1));
            qNum.push(1);
            num++;
        }
    }
    
    return test;
}

// Like distill but w/ a test
function testtill(num) {
    num = num - 1;
    if (questions[num].name.includes("-")) {
        var i = questions[num].name.indexOf("-");
        document.write(i);
        var a = parseInt(questions[num].name[i-1]);
        document.write("<br>" +a);
        var z = parseInt(questions[num].name.substring(i+1));
        var text = "";
        for (j = a; j <= z; j++) {
            text += display(j);
        }
        return text;
    }
    else {
        return display(num + 1);
    }
}

//displays individual question (from array object below)
// display INPUT: # of Question
function display(num) {
    num = num - 1;
    choices = "'choices" + num + "'";
    var text = "";
    if (questions[num].prompt && questions[num].prompt.includes(" ")) {
        text += "<p>" + questions[num].prompt + "</p>";
    }
    text += "<p><b>" + questions[num].question + "</b></p>";
    text += "<input type='radio' name=" + choices + " value='A'>\t" + questions[num].A + "<br>";
    text += "<input type='radio' name=" + choices + " value='B'> " + questions[num].B + "<br>";
    text += "<input type='radio' name=" + choices + " value='C'> " + questions[num].C + "<br>";
    text += "<input type='radio' name=" + choices + " value='D'> " + questions[num].D + "<br>";
    text += "<input type='radio' name=" + choices + " value='E'> " + questions[num].E + "<br>";
    /*
    text += "<input type='radio' name='choices1' value='A'>" + questions[num].A + "<br>";
    text += "<input type='radio' name='choices' value='B'>" + questions[num].B + "<br>";
    text += "<input type='radio' name='choices' value='C'>" + questions[num].C + "<br>";
    text += "<input type='radio' name='choices' value='D'>" + questions[num].D + "<br>";
    text += "<input type='radio' name='choices' value='E'>" + questions[num].E + "<br>";
    */
    return text;  
}

var questions = [
    {
        name: "2018iCE1-5",
        prompt: "A diferencia de hace unos años, el consumidor de hoy no se mantiene fiel a una marca. Hay tanta variedad y tantas maneras de enterarse de las novedades, que no vale la pena cerrarse a la posibilidad de una nueva experiencia.<br>El Índice de Satisfacción del Consumidor Peruano, presentado el último año por Indecopi, Centrum Católica y Arellano Marketing, reveló que los consumidores no se encuentran fidelizados. Esto lo comprueba un estudio del 2014 aplicado por Arellano Marketing, que indica que el 62 % de los peruanos usa diferentes marcas, 7 % más que en el 2007. Además, el 64 % de los consultados sostiene  que reclama más. Sobre este último punto, Carla Bernuy, docente de la carrera de Administración y Marketing de la Universidad ESAN, explica que el comprador de hoy conoce todos sus derechos y, al usar las redes sociales, las aprovecha para hacer reclamos. El consumidor de hoy «trata de que la mayor cantidad de personas conozca su mala experiencia con determinada marca, dependiendo del nivel de indignación o malestar que tenga».<br>Sobre el perfil del comprador peruano a través del e-comercio, otro estudio proporciona la siguiente información:IMAGE HEREEEE<br>De los datos presentados, se concluye que las formas de compra están modificándose, que en el perfil del nuevo consumidor está emplear la nueva tecnología ya sea para exigir una mejor atención, proponer una demanda o comprar un determinado artículo. No tomar en cuenta estas nuevas características podría ocasionar un severo <b>revés<b> a cualquier empresa. <br>Recuperado de http://larepublica.pe/impresa/economia/887669-ecommerce-perfil-del-consumidor-peruano<br>",
        image: false,
        question:"El propósito central del texto es",
        A:"señalar las nuevas características del comprador peruano y la necesidad de tomarlas en consideración.",
        B:"delimitar las características del nuevo comprador, así como la urgencia de satisfacerlas en el más corto tiempo.",
        C:"explicar los motivos por los cuales los compradores peruanos modifican sus formas de consumo",
        D:"difundir el perfil del nuevo comprador peruano, extraído de dos estudios económicos independientes.",
        E:"comparar las características del comprador tradicional con las del nuevo consumidor en línea",
        Correct:"A" 
    },
    {
        name: "2018iCE2",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE1-5",
        image: false,
        question: "El término REVÉS se emplea en el sentido de",
        A: "preocupación.",
        B: "golpe.",
        C: "contratiempo.",
        D: "imprevisto.",
        E: "azar.",
        Correct: "C"
    },
    {
        name: "2018iCE3",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE1-5", 
        image: false,
        question: "A partir de la información proporcionada por el texto, es lógico sostener que buena parte del 15,7 % de navegadores expertos",
        A: "hace compras entre una y ocho veces a lo largo del año.",
        B: "emplea las redes sociales para hacer algún reclamo.",
        C: "representa al consumidor más satisfecho de todos.",
        D: "viaja más que el consumidor tradicionalista y el explorador.",
        E: "ha tenido malas experiencias en sus compras en línea.",
        Correct: "B"
    },
    {
        name: "2018iCE4",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE1-5",
        image: false,
        question: "Del texto se deduce que la infidelidad del nuevo consumidor está asociada",
        A: "exclusivamente con la rapidez para conocer otras ofertas.",
        B: "básicamente con las campañas publicitarias de las empresas.",
        C: "con un apetito creciente por nuevas experiencias empresariales.",
        D: "con la diversificación del mercado y el acceso a la información.",
        E: "con su necesidad de informar sobre sus malas experiencias.",
        Correct: "D"
    },
    {
        name: "2018iCE5",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE1-5",
        image: false,
        question: "A partir de los dos estudios sobre el perfil del consumidor peruano, se puede concluir que",
        A: "el consumo electrónico tendrá un incremento muy significativo en los próximos años.",
        B: "la posición tradicionalista, en ambos, todavía representa un porcentaje mayoritario.",
        C: " las tecnologías cumplen un rol relevante en las características que este posee.",
        D: "los estudios conceden gran importancia a la compra de determinados productos",
        E: "el porcentaje de satisfacción va en aumento debido a la queja en las redes sociales.",
        Correct: "C"
    },
    {
        name: "2018iCE6-10",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "En 1913, apareció, en la Psychological Review, la monografía «Psychology as the Behaviorist Views it», el llamado «Manifiesto Conductista», firmado por John Broadus Watson (1878-1958), fundador del conductismo. Allí, Watson redefinió a la psicología como la ciencia del comportamiento. Escribió lo siguiente: «The time seems to have come when psychology must discard all reference to consciousness; when it need no longer delude itself into thinking that it is making mental states the object of observation».<br>Si hubiesen reparado en esta afirmación, no se habría perdido tiempo acusando a Watson de haber negado la existencia de la conciencia: él solo señalaba que hasta esa época los psicólogos se estaban engañando al creer que su objeto de observación son los estados de conciencia. Era más una objeción metodológica que una tesis metafísica u ontológica acerca de la existencia real de la conciencia. Como fuese, su proyecto resultó muy restrictivo. Se distinguió, por ello, entre un conductismo radical o metafísico y un conductismo metodológico.<br>Los problemas filosóficos que sobrevinieron se explicarían siguiendo lo que dice Ortega y Gasset sobre las condiciones que propician su aparición: «La filosofía nace y renace cuando el hombre pierde su fe o sistema de creencias tradicionales, y por tanto cae en la duda al tiempo que se cree en posesión de una nueva vía o método para salir de esta» (Ortega, 1958: 349).<br>Puede decirse que Watson, aunque influyó en el positivismo lógico, no se propuso plantear los problemas epistemológicos de la psicología. Él siguió cursos de filosofía, y escribió: «Aprobé mis exámenes, pero la chispa no estaba ahí. Saqué algo de la escuela de filósofos británicos, principalmente de Hume, un poco de Kant y, es extraño decirlo, mucho menos de John Dewey: nunca me enteré de lo que hablaba y, por desgracia para mí, aún no lo sé».",
        image: false,
        question: "El propósito central del autor del texto es",
        A: "analizar las diferencias entre el conductismo radical y el conductismo metodológico.",
        B: "justificar por qué es que en la historia de la ciencia surgen los problemas filosóficos.",
        C: "explicar por qué en la historia de la psicología juzgaron equivocadamente a Watson.",
        D: "demostrar que John Watson postuló el conductismo sobre bases metodológicas.",
        E: "mostrar que Watson modificó el concepto de psicología como ciencia conductual.",
        Correct: "D"
    },
    {
        name: "2018iCE7",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE6-10",
        image: false,
        question: "El sentido contextual del término REPARADO en el texto es",
        A: "restaurado.",
        B: "arreglado.",
        C: "compuesto.",
        D: "atendido.",
        E: "corregido.",
        Correct: "D"
    },
    {
        name: "2018iCE8",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE6-10",
        image: false,
        question: "Determine el enunciado incompatible con el texto.",
        A: "El conductismo watsoniano se caracteriza por su posición metodológica en psicología.",
        B: "Para John Watson, los psicólogos habían estado engañados con su objeto de estudio.",
        C: "Una de las desventajas de la posición de Watson fue que su crítica devino restrictiva.",
        D: "La filosofía, según Ortega y Gasset, surge cuando ciertas creencias entran en crisis.",
        E: "Los problemas epistemológicos de la psicología fueron planteados por John Watson",
        Correct: "E"
    },
    {
        name: "2018iCE9",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE6-10",
        image: false,
        question: "Lo que interesa destacar de la cita en inglés de Watson es",
        A: "su tajante objeción a la existencia de la conciencia.",
        B: "la distinción entre dos clases de conductismo",
        C: "su propuesta de estudiar a los seres humanos.",
        D: "el papel protagónico que le concede a la conciencia.",
        E: "la radicalidad de su propuesta para la psicología.",
        Correct: "E"
    },
    {
        name: "2018iCE9",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE6-10",
        image: false,
        question: "De la lectura puede deducirse que John Watson",
        A: "se inspiró en el positivismo lógico",
        B: "comprendía la filosofía de John Dewey",
        C: "solo había leído a los filósofos británicos",
        D: "tenía fe en la noción de conciencia.",
        E: "se interesaba más por lo procedimental.",
        Correct: "E"
    },
    {
        name: "2018iCE11-12",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "Es corriente llamar «inductiva» a una inferencia cuando pasa de enunciados singulares (llamados, a veces, enunciados «particulares»), tales como descripciones de los resultados de observaciones o experimentos, a enunciados universales, tales como hipótesis o teorías.<br>Ahora bien, desde un punto de vista lógico, dista mucho de ser obvio que esté justificado inferir enunciados universales partiendo de enunciados singulares, por elevado que sea su número; pues cualquier conclusión que saquemos de este modo corre siempre el riesgo de resultar un día falsa. Así, cualquiera que sea el número de ejemplares de cisnes blancos que hayamos observado, no está justificada la conclusión de que todos los cisnes sean blancos (...).<br>El problema de la inducción puede formularse, asimismo, como la cuestión sobre cómo establecer la verdad de los enunciados universales basados en la experiencia —como son las hipótesis y los sistemas teóricos de las ciencias empíricas—. Pues muchos creen que la verdad de estos enunciados se «sabe por experiencia»; sin embargo, es claro que todo informe en que se da cuenta de un suceso reiterado —o de una observación, o de un resultado de un experimento— no puede ser originariamente un enunciado universal, sino solo un enunciado singular.<br>Popper, K. (1971). La lógica de la investigación científica. Madrid: Tecnos.<br><b>Texto B</b><br>El maestro inglés Williarn Whewell advierte que familiarmente se habla de inducción como un proceso por el que obtenemos una proposición general a partir de un número de casos particulares, y que parece que se imagina frecuentemente que la proposición general resulta de una yuxtaposición de casos o, todo lo más, de unirlos y extenderlos meramente. Pero si consideramos el proceso más de cerca, percibiremos que esta es una exposición inadecuada del tema. Los hechos particulares no son simplemente puestos juntos, sino que hay un elemento nuevo añadido a la combinación de hechos por el propio acto de pensamiento mediante el cual son combinados. Hay una concepción del entendimiento introducida en la proposición general, que no existía en ninguno de los hechos observados (...). Los fenómenos se conocen, pero permanecen aislados y desconectados hasta que el descubridor proporciona de sus propios <b>fondos</b> un principio de conexión (...). Así pues, en cada inferencia realizada por inducción se introduce alguna concepción general que es dada, no por los fenómenos, sino por el entendimiento. La conclusión no está contenida en las premisas, sino que las incluye por la introducción de una nueva generalidad.<br>Martínez, P. (1978). Filosofía de la ciencia empírica. Madrid: Paraninfo",
        image: false,
        question: "Tanto el texto A como el B giran en torno a la idea",
        A: "de la perfectibilidad de la inducción.",
        B: "de la relación premisa-conclusión.",
        C: "del carácter de la conclusión universal.",
        D: "de la falibilidad de las premisas.",
        E: "de la justificación de la inducción",
        Correct: "E"
    },
    {
        name: "2018iCE12",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE11-15",
        image: false,
        question: "En el texto B, la palabra FONDOS remite a",
        A: "capacidad.",
        B: "entendimiento.",
        C: "experiencia.",
        D: "habilidad.",
        E: "teoría.",
        Correct: "B"
    },
    {
        name: "2018iCE13",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE11-15",
        image: false,
        question: "Desde el punto de vista de Popper, la falsedad de una conclusión es establecida, en última instancia, por la",
        A: "lógica.",
        B: "teoría.",
        C: "intuición.",
        D: "experiencia.",
        E: "universalidad.",
        Correct: "D"
    },
    {
        name: "2018iCE14",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE11-15",
        image: false,
        question: "Es incompatible sostener que ambos autores están preocupados en",
        A: "la utilidad manifiesta en el proceso de la inferencia inductiva.",
        B: "analizar las conexiones entre los enunciados de la inferencia",
        C: "reflexionar sobre la estructura de la inferencia inductiva.",
        D: "establecer la relación entre enunciados singulares y universales.",
        E: "precisar cómo se daría el nexo entre dos tipos de enunciados.",
        Correct: "A"
    },
    {
        name: "2018iCE15",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: "2018iCE11-15",
        image: false,
        question: "Si un día encontráramos un cisne negro, entonces",
        A: "anularíamos la sutil propuesta defendida por el autor del texto B.",
        B: "quedaría por fin demostrada la importante utilidad de la inducción.",
        C: "se manifestaría lo acertado de la posición del autor del texto A.",
        D: "la lógica sería asumida, al fin, como un criterio universal válido.",
        E: "se demostraría la falsedad de todos los enunciados singulares.",
        Correct: "C"
    },
    {
        name: "2018iCE16",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Mónica, Niisa y Patricia tienen diferentes profesiones: pediatra, ginecóloga y odontóloga, aunque no necesariamente en ese orden. Si Mónica es amiga de la ginecóloga, quien es la mayor de las tres, y si Patricia es amiga de la pediatra y la menor de las tres, ¿cuál de las siguientes afirmaciones es verdadera?",
        A: "Nilsa es la mayor.",
        B: "Mónica es odontóloga.",
        C: "Patricia es ginecóloga. ",
        D: "Nilsa es odontóloga.",
        E: "Mónica es la menor",
        Correct: "A"
    },
    {
        name: "2018iCE17",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: true,
        question: "Siguiendo la secuencia de figuras, ¿cuántos círculos sombreados habrá en la figura 25?",
        A: "326",
        B: "325",
        C: "324",
        D: "320",
        E: "327",
        Correct: "B"
    },
    {
        name: "2018iCE18",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "En una caja hay 15 bolas blancas, 16 negras, 14 azules, 10 rojas y 11 amarillas. ¿Cuál es el menor número de bolas que se debe extraer al azar para tener la seguridad de haber extraído 2 bolas rojas y 4 amarillas?",
        A: "58",
        B: "59",
        C: "60",
        D: "57",
        E: "61",
        Correct: "B"
    },
    {
        name: "2018iCE19",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: true,
        question: "La figura mostrada representa una rejilla hecha de alambre. Desplazándose solo por la rejilla, ¿de cuántas maneras diferentes podrá trasladarse una hormiga que se encuentra en el punto A hasta el punto M siguiendo las direcciones indicadas?",
        A: "28",
        B: "30",
        C: "26",
        D: "24",
        E: "32",
        Correct: "A"
    },
    {
        name: "2018iCE20",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "En una caja se tiene diez fichas numeradas del 1 al 10, todas con numeración distinta. Cuatro personas extraen dos fichas cada una y cada una de ellas obtiene el mismo número par al sumar los números de sus dos fichas. Si una de estas personas sacó la ficha con el número 10, ¿que números tienen las fichas que quedaron en la caja?",
        A: "4 y 9",
        B: "1 y 7",
        C: "2 y 6",
        D: "1 y 6",
        E: "3 y 8",
        Correct: "D"
    },
    {
        name: "2018iCE21",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "A una señora le preguntan la hora y ella responde: «Dentro de 15 minutos mi reloj marcará 9 h 45 min». Si el reloj de la señora está adelantado 10 minutos respecto de la hora real, ¿cuál fue la hora real hace 25 minutos?",
        A: "8 h 55 min",
        B: "9 h 5 min",
        C: "8 h 45 min",
        D: "8 h 35 min",
        E: "9 h 55 min",
        Correct: "A"
    },
    {
        name: "2018iCE22",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "En las casillas vacías de la siguiente gráfica, escriba los dígitos 1, 2, 3, 4, 5 y 7, sin repetir ningún dígito, de modo que la diferencia positiva de cualquiera de los dígitos que aparecen (incluidos los ya escritos) en casillas contiguas siempre sea mayor o igual que cuatro.<br>IMAGE HERE<br>Halle el producto de los dígitos escritos en lascasillas sombreadas.",
        A: "10",
        B: "18",
        C: "12",
        D: "20",
        E: "15",
        Correct: "E"
    },
    {
        name: "2018iCE23",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Rafael acude al médico por una lesión en la cervical y este le indica reposo absoluto durante una semana exacta; además, le prescribe una pastilla cada tres horas, que empieza a tomar desde el momento que inicia el reposo. Si una caja contiene 20 pastillas y cuesta S/ 30, y estas pastillas solo se venden por caja y no por unidad, ¿cuál debe ser el menor gasto necesario para poder cumplir con su prescripción?",
        A: "S/ 30",
        B: "S/ 90",
        C: "S/ 60",
        D: "S/ 120",
        E: "S/ 150",
        Correct: "B"
    },
    {
        name: "2018iCE24",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Si en un determinado mes del año, el primer y último día de dicho mes es lunes, ¿qué día será el 25 de agosto del mismo año?",
        A: "Lunes",
        B: "Miércoles",
        C: "Jueves",
        D: "Martes",
        E: "Sábado",
        Correct: "C"
    },
    {
        name: "2018iCE25",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Para cercar con mallas un terreno de forma cuadrada que tiene 1600 m2 de área, se colocan postes (verticalmente) en todo el perímetro a una distancia de 4 m uno del otro. Si el costo por colocar un poste es S/ 15, ¿cuál será el costo total por la colocación de todos los postes?",
        A: "S/ 810",
        B: "S/ 450",
        C: "S/ 600",
        D: "S/ 1200",
        E: "S/ 900",
        Correct: "C"
    },
    {
        name: "2018iCE26",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Se tiene tres recipientes vacíos no graduados de 3, 5 y 11 litros de capacidad y un recipiente lleno con 30 litros de agua también sin graduar. ¿Cuántas veces, como mínimo, se tendrá que trasladar el agua de un recipiente a otro, sin desperdiciar el líquido, para obtener en un recipiente 4 litros de agua?",
        A: "9",
        B: "8",
        C: "6",
        D: "7",
        E: "5",
        Correct: "C"
    },
    {
        name: "2018iCE27",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: true,
        question: "En la figura, los radios de las ruedas A, B, C, D y E miden 17, 20, 60, 15 y 30 cm respectivamente. Si la rueda A da 12 vueltas, ¿cuántas vueltas dará la rueda E?",
        A: "4",
        B: "1",
        C: "3",
        D: "2",
        E: "5",
        Correct: "2"
    },
    {
        name: "2018iCE28",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Una señora tiene ahorrados en una caja quince billetes de S/ 20, veinte billetes de S/ 50 y diez billetes de S/ 100, todos en forma desordenada. ¿Cuál es el mínimo número de billetes que la señora debe extraer al azar de la caja para tener la certeza de haber sacado S/ 500 en billetes de S/ 20 y S/ 100?",
        A: "36",
        B: "38",
        C: "35",
        D: "37",
        E: "39",
        Correct: "D" 
    },
    {
        name: "2018iCE29",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: true,
        question: "Un trozo de cartón tiene la forma de la figura mostrada (las regiones m, n, p, q y r son cuadrados) y se dobla a lo largo de las líneas punteadas para formar una caja abierta. Si la caja se coloca en una mesa de manera que la parte abierta queda hacia arriba, ¿qué región constituye la base de la caja?",
        A: "n",
        B: "p",
        C: "m",
        D: "r",
        E: "q",
        Correct: "B"
    },
    {
        name: "2018iCE30",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Escriba en cada recuadro uno de los números primos 3, 5, 7, 11, 13 de manera que ninguno se repita y que, al efectuar las operaciones indicadas, P sea un número entero. ¿Cuál es el máximo valor de P? MISSING EQUATION",
        A: "65",
        B: "39",
        C: "52",
        D: "44",
        E: "55",
        Correct: "E" 
    },
    {
        name: "2018iCE31",
        subject: "Mathematics",
        sub_subject: "Arithmetic",
        prompt: false,
        image: true,
        question: "En la figura, se muestra una pieza fija formada con cubitos pegados. ¿Cuál es la mínima cantidad de cubitos que se requieren para completar esta pieza y formar un cubo, si todos los cubitos usados y por usar son de igual dimensión?",
        A: "157",
        B: "192",
        C: "178",
        D: "177",
        E: "189",
        Correct: "E" 
    },
    {
        name: "2018iCE32",
        subject: "Mathematics",
        sub_subject: "Arithmetic",
        prompt: false,
        image: false,
        question: "Un peregrino camina a una velocidad que varía entre 5 km/h y 7 km/h. Si el peregrino caminó 8 h diarias durante dos días, la distancia que recorrió se encuentra entre",
        A: "40 km y 56 km.",
        B: "80 km y 112 km.",
        C: "114 km y 160 km",
        D: "60 km y 78 km.",
        E: "120 km y 138 km.",
        Correct: "B"
    },
    {
        name: "2018iCE33",
        subject: "Mathematics",
        sub_subject: "Geometry",
        prompt: false,
        image: false,
        question: ,
        A: "4 m",
        B: "3 m",
        C: "2 m",
        D: "5 m",
        E: "6 m",
        Correct: "D"
    },
    {
        name: "2018iCE34",
        subject: "Mathematics",
        sub_subject: "Geometry",
        prompt: false,
        image: false,
        question: "Como se muestra en la figura, una ruleta tiene un radio de 6 m y cuenta con 12 vagones iguales. En un instante dado, el punto A sobre la ruleta es el más próximo a la base y dista de esta 3 m. Si la ruleta tarda 2 minutos en dar una vuelta completa, ¿a qué distancia se encontrará el punto A respecto de su posición inicial después de 30 segundos?",
        A: "MISISNG",
        B: "MISSING",
        C: "MISSING",
        D: "MISSING",
        E: "MISIING",
        Correct: "B"
    },
    {
        name: "2018iCE35",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: false,
        image: false,
        question: "En un cultivo de bacterias, el número T de horas transcurridas y el número N de bacterias al cabo de T horas están relacionados por log(N) = log(4)+Tlog(5). Si han transcurrido seis horas, ¿cuántas bacterias habrá en el cultivo?",
        A: "12 500",
        B: "312 500",
        C: "62 500",
        D: "72 500",
        E: "52 500",
        Correct: "A"
    },
    {
        name: "2018iCE36",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: false,
        image: false,
        question: "En su viaje a Madrid, Ramiro va al supermercado y paga un total de 156 euros por 24 litros de leche, 6 kg de jamón y 12 litros de aceite. Él necesita saber el precio de cada artículo para organizar su presupuesto. Sabe que 1 litro de aceite cuesta el triple de 1 litro de leche, y 1 kg de jamón cuesta igual que 4 litros de aceite más 4 litros de leche. Si luego decide comprar 1 kg de jamón, 1 litro de aceite y 1 litro de leche, entonces gastará ___ euros.",
        A: "20",
        B: "24",
        C: "30",
        D: "18",
        E: "22",
        Correct: "A" 
    },
    {
        name: "2018iCE37",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Determine el valor de verdad (V o F) de los siguientes enunciados relativos a la lengua estándar.<br>I. Frente a las variedades regionales, la lengua estándar es la única que tiene una gramática constituida.<br>II. La pureza lingüística es una cualidad inherente a toda lengua estándar de alcance verdaderamente nacional.<br>III. El progreso social está garantizado cuando la lengua estándar sustituye a las lenguas originarias.",
        A: "FVF",
        B: "FFF",
        C: "FFV",
        D: "FVV",
        E: "VFF",
        Correct: "E"
    },
    {
        name: "2018iCE38",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "¿En cuál de las siguientes opciones hay uso adecuado de las letras mayúsculas?",
        A: "Fue en la Biblioteca del Museo británico donde escribió una obra de valor monumental.",
        B: "El Canciller Mora, consejero del Rey Enrique VIII, fue un estudioso del filósofo Erasmo.",
        C: "Uno de los grandes autores del renacimiento fue De Montaigne, natural de Burdeos.",
        D: "Copérnico estableció que el centro de nuestro sistema planetario es el Sol y no la Tierra.",
        E: "Hemos logrado hacer una travesía extraordinaria por la telúrica Cordillera de los Andes.",
        Correct: "D"
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Lea el siguiente texto y precise la cantidad de palabras que deben llevar tilde.<br>Una persona que conozca diversas lenguas no tiene por que ser un eximio lingüista. Lo que si es seguro es que quien disponga de un saber lingüístico estara en condiciones de comprender mucho mejor los habitos de un pais.",
        A: "Seis",
        B: "Cinco",
        C: "Cuatro",
        D: "Tres",
        E: "Siete",
        Correct: "D"
    },
    {
        name: "2018iCE40",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Se puede determinar que las preposiciones tienen un sentido ____________, pues ponen en contacto dos elementos: el elemento del que depende el grupo y el término de la preposición. Ello se ve nítidamente en el siguiente ejemplo: El abuelo juega con su adorado nieto.",
        A: "vacuo",
        B: "inmutable",
        C: "relacional",
        D: "categorical",
        E: "concreto",
        Correct: "C"
    },
    {
        name: "2018iCE41",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "En el título vallejiano <i>España, aparta de mí este cáliz</i>, la coma se justifica por ser de tipo≤≤",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE42",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE43",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE44",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE45",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE46",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE47",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE48",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE49",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE50",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE51",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE52",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE53",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE54",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE55",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE56",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE57",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE58",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE59",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE60",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE61",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE62",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE63",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE64",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE65",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE66",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE67",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE68",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE69",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE70",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE71",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE72",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE73",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE74",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE75",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE76",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE77",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE78",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE79",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE80",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE81",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE82",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE83",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE84",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE85",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE86",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE87",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE88",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE89",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE90",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE91",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE92",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE93",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE94",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE95",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE96",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE97",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE98",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE99",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE100",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    }/*,
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    },
    {
        name: "2018iCE39",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "",
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        Correct: ""
    }*/
    /*NO need for coma in the last question*/
]