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
    text += "<p>" + questions[num].question +"</p>";
    text += "<input type='radio' name=" + choices + " value='A'> " + questions[num].A + "<br>";
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
/* Still need images for all questions. Math mostly done.*/
var questions = [
    {
        name: "2018iCE1-5",
        prompt: 'A diferencia de hace unos años, el consumidor de hoy no se mantiene fiel a una marca. Hay tanta variedad y tantas maneras de enterarse de las novedades, que no vale la pena cerrarse a la posibilidad de una nueva experiencia.<br>El Índice de Satisfacción del Consumidor Peruano, presentado el último año por Indecopi, Centrum Católica y Arellano Marketing, reveló que los consumidores no se encuentran fidelizados. Esto lo comprueba un estudio del 2014 aplicado por Arellano Marketing, que indica que el 62 % de los peruanos usa diferentes marcas, 7 % más que en el 2007. Además, el 64 % de los consultados sostiene  que reclama más. Sobre este último punto, Carla Bernuy, docente de la carrera de Administración y Marketing de la Universidad ESAN, explica que el comprador de hoy conoce todos sus derechos y, al usar las redes sociales, las aprovecha para hacer reclamos. El consumidor de hoy «trata de que la mayor cantidad de personas conozca su mala experiencia con determinada marca, dependiendo del nivel de indignación o malestar que tenga».<br>Sobre el perfil del comprador peruano a través del e-comercio, otro estudio proporciona la siguiente información:IMAGE HEREEEE<br>De los datos presentados, se concluye que las formas de compra están modificándose, que en el perfil del nuevo consumidor está emplear la nueva tecnología ya sea para exigir una mejor atención, proponer una demanda o comprar un determinado artículo. No tomar en cuenta estas nuevas características podría ocasionar un severo <b>revés</b> a cualquier empresa.<br>'+'<font size="2">'+'Recuperado de http://larepublica.pe/impresa/economia/887669-ecommerce-perfil-del-consumidor-peruano' + '</font>',
        image: false,
        question:"El propósito central del texto es",
        A:"señalar las nuevas características del comprador peruano y la necesidad de tomarlas en consideración.",
        B:"delimitar las características del nuevo comprador, así como la urgencia de satisfacerlas en el más corto tiempo.",
        C:"explicar los motivos por los cuales los compradores peruanos modifican sus formas de consumo.",
        D:"difundir el perfil del nuevo comprador peruano, extraído de dos estudios económicos independientes.",
        E:"comparar las características del comprador tradicional con las del nuevo consumidor en línea.",
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
        name: "2018iCE10",
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
        name: "2018iCE11-15",
        subject: "Literature",
        sub_subject: "Reading Comprehension",
        prompt: 'Es corriente llamar «inductiva» a una inferencia cuando pasa de enunciados singulares (llamados, a veces, enunciados «particulares»), tales como descripciones de los resultados de observaciones o experimentos, a enunciados universales, tales como hipótesis o teorías.<br>Ahora bien, desde un punto de vista lógico, dista mucho de ser obvio que esté justificado inferir enunciados universales partiendo de enunciados singulares, por elevado que sea su número; pues cualquier conclusión que saquemos de este modo corre siempre el riesgo de resultar un día falsa. Así, cualquiera que sea el número de ejemplares de cisnes blancos que hayamos observado, no está justificada la conclusión de que todos los cisnes sean blancos (...).<br>El problema de la inducción puede formularse, asimismo, como la cuestión sobre cómo establecer la verdad de los enunciados universales basados en la experiencia —como son las hipótesis y los sistemas teóricos de las ciencias empíricas—. Pues muchos creen que la verdad de estos enunciados se «sabe por experiencia»; sin embargo, es claro que todo informe en que se da cuenta de un suceso reiterado —o de una observación, o de un resultado de un experimento— no puede ser originariamente un enunciado universal, sino solo un enunciado singular.<br><font size="2">Popper, K. (1971). La lógica de la investigación científica. Madrid: Tecnos.</font><br><b>Texto B</b><br>El maestro inglés Williarn Whewell advierte que familiarmente se habla de inducción como un proceso por el que obtenemos una proposición general a partir de un número de casos particulares, y que parece que se imagina frecuentemente que la proposición general resulta de una yuxtaposición de casos o, todo lo más, de unirlos y extenderlos meramente. Pero si consideramos el proceso más de cerca, percibiremos que esta es una exposición inadecuada del tema. Los hechos particulares no son simplemente puestos juntos, sino que hay un elemento nuevo añadido a la combinación de hechos por el propio acto de pensamiento mediante el cual son combinados. Hay una concepción del entendimiento introducida en la proposición general, que no existía en ninguno de los hechos observados (...). Los fenómenos se conocen, pero permanecen aislados y desconectados hasta que el descubridor proporciona de sus propios <b>fondos</b> un principio de conexión (...). Así pues, en cada inferencia realizada por inducción se introduce alguna concepción general que es dada, no por los fenómenos, sino por el entendimiento. La conclusión no está contenida en las premisas, sino que las incluye por la introducción de una nueva generalidad.<br><font size="2">Martínez, P. (1978). Filosofía de la ciencia empírica. Madrid: Paraninfo</font>',
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
        question: "Para cercar con mallas un terreno de forma cuadrada que tiene 1600 \\(m^2\\) de área, se colocan postes (verticalmente) en todo el perímetro a una distancia de 4 m uno del otro. Si el costo por colocar un poste es S/ 15, ¿cuál será el costo total por la colocación de todos los postes?",
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
        question: "Escriba en cada recuadro uno de los números primos 3, 5, 7, 11, 13 de manera que ninguno se repita y que, al efectuar las operaciones indicadas, P sea un número entero. ¿Cuál es el máximo valor de P? $$\\Bigl(\\bigl((\\square + \\square) - \\square\\bigr) × \\square\\Bigr) ÷ \\square$$",
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
        question: "En el gráfico, las rectas (\\L_1\\) y (\\L_2\\) son paralelas y la medida del segmento AB es 5 m. Si \\(\\overrightarrow{MA}\\) y \\(\\overrightarrow{PB}\\) son bisectrices, halle \\(MN+NP\\).",
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
        A: "\\(6\\sqrt 3\\)",
        B: "\\(6\\sqrt 2\\) m",
        C: "\\(4\\sqrt 2\\) m",
        D: "\\(4\\sqrt 3\\) m",
        E: "12 m",
        Correct: "B"
    },
    {
        name: "2018iCE35",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: false,
        image: false,
        question: "En un cultivo de bacterias, el número T de horas transcurridas y el número N de bacterias al cabo de T horas están relacionados por log(N) = log(4)+Tlog(5).<br>Si han transcurrido seis horas, ¿cuántas bacterias habrá en el cultivo?",
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
        A: "vocativo.",
        B: "incidental.",
        C: "apositivo.",
        D: "elíptico.",
        E: "yuxtapositivo.",
        Correct: "C"
    },
    {
        name: "2018iCE42",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Lea el siguiente texto: «La teoría triangular del amor del psicólogo norteamericano Robert Sternberg caracteriza el amor como una relación interpersonal basada en tres componentes: intimidad, pasión y compromiso. Los distintos tipos de amor pueden ser explicados, por ende, como las diferentes combinaciones de estos elementos». Se puede determinar que el conector resaltado es de índole",
        A: "aditiva.",
        B: "causal.",
        C: "ilativa.",
        D: "concesiva.",
        E: "adversativa.",
        Correct: "B"
    },
    {
        name: "2018iCE43",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "En la lengua española, la preposición a se puede emplear como marca de objeto directo cuando acompaña a sustantivos de persona. Analice los siguientes enunciados y determine la oración en la que la secuencia a María cumple con la función de objeto directo.",
        A: "Carlos escribe una carta a María.",
        B: "Carlos ama verdaderamente a María.",
        C: "Carlos vive feliz junto a María.",
        D: "Carlos lleva un regalo a María.",
        E: "Carlos compuso un poema a María.",
        Correct: "C"
    },
    {
        name: "2018iCE44",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Una oración subordinada expresa una idea que complementa o modifica la oración principal y puede cumplir distintas funciones. En ese sentido, en el enunciado La CIA conjeturó que Rusia intervino en las elecciones estadounidenses a favor de Donald Trump, la oración subordinada desempeña la función de",
        A: "conjunción.",
        B: "adjetivo.",
        C: "adverbio.",
        D: "sustantivo.",
        E: "preposición.",
        Correct: "D"
    },
    {
        name: "2018iCE45",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "Los primeros versos de un famoso soneto de Luis de Góngora y Argote son los siguientes:<br><i>Mientras por competir con tu cabello oro bruñido el sol relumbra en vano [...].</i><br>En la relación entre «cabello» y «oro» se observa la figura literaria conocida como",
        A: "anáfora.",
        B: "hipérbaton.",
        C: "metáfora.",
        D: "hipérbole.",
        E: "epíteto.",
        Correct: "C"
    },
    {
        name: "2018iCE46",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "Los siguientes versos pertenecen al poeta arequipeño Mariano Melgar:<br><i>¿Por qué a verte volví, Silvia querida? ¡Ay triste! ¿Para qué? ¡Para trocarse mi dolor en más triste despedida!...</i><br>En ellos se expresa",
        A: "un rechazo clerical por lo femenino.",
        B: "una dolida sensibilidad romántica.",
        C: "el desinterés por las relaciones de pareja.",
        D: "la nostalgia por la muerte de la amada.",
        E: "una mezcla de formas quechuas y latinas.",
        Correct: "B"
    },
    {
        name: "2018iCE47",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "En Crimen y castigo, de Fedor Dostoievski, el personaje Rodión Raskólnikov se halla sumido en un profundo conflicto interior, que posee características",
        A: "sociales y políticas.",
        B: "culturales y económicas.",
        C: "políticas y psicológicas.",
        D: "psicológicas y éticas.",
        E: "éticas y culturales.",
        Correct: "D"
    },
    {
        name: "2018iCE48",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "La siguiente cita: «¡Solo tu nombre es mi enemigo! ¡Porque tú eres tú mismo, seas o no Montesco! ¿Qué es Montesco? No es ni mano, ni pie, ni brazo, ni rostro, ni parte alguna que pertenezca a un hombre. ¡Oh, sea otro tu nombre!», pertenece a la obra",
        A: "<i>Romeo y Julieta</i>.",
        B: "<i>Las cuitas del joven Werther</i>.",
        C: "<i>Divina comedia</i>.",
        D: "<i>Poema de mio Cid</i>.",
        E: "<i>La vida es sueño</i>.",
        Correct: "A"
    },
    {
        name: "2018iCE49",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "<i>El olímpico cisne de nieve, con el ágata rosa del pico, lustra el ala eucarística y breve que abre al sol como un casto abanico.<br>En estos versos de «Blasón», poema de Rubén Darío, ¿qué característica del modernismo se manifiesta?</i>",
        A: "El sincretismo entre el mundo cristiano y helénico",
        B: "El recurso estilístico de la sinestesia simbólica",
        C: "La recreación de la realidad a través de imágenes",
        D: "La metáfora vanguardista como recurso cognitivo",
        E: "La elección de un lenguaje rítmico y melódico",
        Correct: "E"
    },
    {
        name: "2018iCE50",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "La producción poética de César Vallejo ha pasado por diversos momentos. Luego de leer los versos que a continuación se presentan, diga a qué período pertenecen.<br><i>Cual mi explicación. Esto me lacera la tempranía. Esa manera de caminar por los trapecios. Esos corajosos brutos como postizos.</i>",
        A: "Surrealista",
        B: "Modernista",
        C: "Simbolista",
        D: "Experimental",
        E: "Vanguardista",
        Correct: "E"
    },
    {
        name: "2018iCE51",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Cuando Jesús tenía cinco años, sus padres tomaron la decisión de divorciarse, asumiendo la responsabilidad de velar por el bienestar de su hijo, situación que el menor fue asimilando. Actualmente, el niño tiene nueve años y hace ocho meses vive con su mamá y la nueva pareja de ella. El tipo de familia que integra Jesús se denomina",
        A: "fusionada.",
        B: "monoparental.",
        C: "nuclear.",
        D: "extensa.",
        E: "tradicional.",
        Correct: "A"
    },
    {
        name: "2018iCE52",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Luis es un jefe de personal que, al interactuar con sus empleados, se expresa adecuadamente, con honestidad, sin ofensas y con claridad al exponer sus directivas, opiniones y sentimientos. Cabe inferir que Luis emplea un estilo de comunicación",
        A: "pasivo.",
        B: "agresivo.",
        C: "asertivo.",
        D: "inhibido.",
        E: "directivo.",
        Correct: "C"
    },
    {
        name: "2018iCE53",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "En una evaluación oral de la asignatura de Historia del Perú, el profesor le pregunta a Raúl cuáles fueron las causas de la guerra con Chile. Si Raúl responde correctamente, señalando las determinantes de dicha confrontación bélica, lo hace porque conserva conocimientos sobre el tema en su",
        A: "almacenamiento a corto plazo.",
        B: "memoria semántica.",
        C: "información sensorial.",
        D: "aprendizaje procedimental.",
        E: "memoria episódica.",
        Correct: "B"
    },
    {
        name: "2018iCE54",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Mariella refiere lo siguiente: «Cuando llevé por primera vez el curso de Psicología, me gustó mucho, entendía todo lo que me explicaban, lo relacionaba con mi vida y la vida de los demás. Me agradaba escuchar los problemas de mis amigas, ellas decían que era buena consejera. Cuando terminé el colegio, mis padres no me dejaron postular a Psicología, me inscribieron en otra carrera a la cual ingresé, pero nunca me gustó. No terminé de estudiar, desaprobaba los cursos, luego me puse a vender ropa en un mercado y no quise saber nada de los estudios». A partir del relato, se puede decir que el comportamiento de los padres de Mariella influyó principalmente en",
        A: "sus habilidades ocupacionales.",
        B: "sus relaciones sociales.",
        C: "su vocación laboral.",
        D: "su proyecto de vida.",
        E: "su interés vocacional.",
        Correct: "D"
    },
    {
        name: "2018iCE55",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Jorge ha visto que, si cede ante los caprichos de su pequeño hijo y le compra el juguete que está pidiendo a gritos en la tienda, el niño deja de gritar. Al comprarle el juguete a su hijo, Jorge aplica el principio conductual conocido como",
        A: "castigo positivo.",
        B: "reforzamiento positivo.",
        C: "reforzamiento negativo.",
        D: "castigo negativo.",
        E: "extinción operante.",
        Correct: "C"
    },
    {
        name: "2018iCE56",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "¿Cuáles de estos enunciados indican funciones de la corteza del lóbulo frontal?<br>I. Organiza, planifica, controla y regula el proyecto de vida de una persona.<br>II. Identifica las fragancias de las flores y las melodías de los instrumentos musicales.<br>III. Planifica y ordena armoniosamente los pasos de danza del bailarín.<br>IV. Coordina el movimiento de un futbolista para meter el gol en un partido.",
        A: "III y IV",
        B: "II y III",
        C: "I y III",
        D: "II y IV",
        E: "I y II",
        Correct: "A"
    },
    {
        name: "2018iCE57",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "César es un nigeriano que se encuentra en el Perú. Como carece de dinero y pasaporte, y ha contraído una gran deuda con un ciudadano chino, vive prácticamente en estado de esclavitud. ¿Contra qué reconocimiento de derechos consagrado universalmente atenta esta situación?",
        A: "La Convención Americana sobre Derechos Humanos",
        B: "El Protocolo Facultativo del Pacto Internacional de Derechos Civiles y Políticos",
        C: "La Declaración de los Derechos del Niño",
        D: "La Declaración Universal de los Derechos Humanos",
        E: "El Acuerdo de la Santa Sede y la República del Perú",
        Correct: "D"
    },
    {
        name: "2018iCE58",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Roque Zambrano fue acusado y sentenciado por delito contra el patrimonio en agravio del Estado a la pena privativa de la libertad por 10 años. Estando en prisión, solicita se le permita votar en las elecciones presidenciales que se realizarán dentro de un mes, pero el director del establecimiento penal le niega esa posibilidad. ¿Tiene Roque Zambrano derecho a votar en dichas elecciones?",
        A: "Sí, tiene derecho, por lo que la decisión del director del centro penitenciario es equivocada, además de arbitraria.",
        B: "Sí, porque todos los ciudadanos tienen derecho a elegir y ser elegidos, sin restricción alguna y de ningún tipo.",
        C: "No tiene derecho ni a votar ni a ningún otro beneficio por el simple hecho de haber dejado de ser ciudadano.",
        D: "Si, tiene derecho, ya que es nulo todo acto que limite o prohíba el ejercicio del derecho de todo ciudadano.",
        E: "No tiene derecho porque ha sido condenado a 10 años de prisión y sus derechos ciudadanos han sido suspendidos.",
        Correct: "E"
    },
    {
        name: "2018iCE59",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Alfonso López, ciudadano de la provincia de Angaraes, pretende postular como alcalde provincial, por lo que consulta al Jurado Nacional de Elecciones la forma cómo debe ser elegido. De acuerdo con la ley, deberá ser elegido por",
        A: "referéndum, por un periodo de circo años.",
        B: "los regidores de Angaraes, por un periodo de cinco años.",
        C: "el Concejo Municipal, por un periodo de tres años.",
        D: "el Gobierno Regional, por un periodo de cuatro años.",
        E: "sufragio directo, por un periodo de cuatro años.",
        Correct: "E"
    },
    {
        name: "2018iCE60",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Johnny Vilcachagua es miembro de la Policía Nacional en el grado de suboficial brigadier. Ante la desatención de la salud y educación de los niños de su distrito, organiza un movimiento regional para acceder al gobierno de su región mediante elección popular. Sobre su decisión de participar en política, ¿qué establece la Constitución Política del Perú?",
        A: "Puede postular porque tiene derecho a voto.",
        B: "Puede postular porque tiene derecho a la participación ciudadana.",
        C: "Los derechos políticos son irrenunciables.",
        D: "Ningún policía puede ejercer alguna vez la ciudadanía.",
        E: "Puede postular solo si pasa a la situación de retiro.",
        Correct: "E"
    },
    {
        name: "2018iCE61",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "Lítico, Arcaico y Formativo son nombres que los arqueólogos han dado a las primeras etapas de la historia andina. Identifique dos características de los grupos humanos que vivieron en el periodo Lítico.<br>I. Domesticación inicial de camélidos<br>II. Aparición de aldeas primigenias<br>III. Desconocimiento de la cerámica<br>IV. Arte rupestre con escenas de caza",
        A: "I y IV",
        B: "I y III",
        C: "II y III",
        D: "I y II",
        E: "III y IV",
        Correct: "E"
    },
    {
        name: "2018iCE62",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "El Tawantinsuyo logró extenderse sobre una vasta región de la cordillera andina, incorporando diversos pueblos con culturas regionales propias. El dominio que ejercieron los incas sobre estos pueblos se debió, primordialmente,",
        A: "al uso de los recursos humanos y naturales conquistados para construir un efectivo sistema burocrático y militar.",
        B: "a la colaboración de los líderes de los pueblos conquistados, a quienes se les convirtió en nobles de sangre.",
        C: "a la prohibición de los cultos locales y la imposición de una religión oficial que justificaba la supremacía inca.",
        D: "a la imposición de la cultura inca, a través del uso del quechua y la adoración obligatoria del Inti como dios único.",
        E: "al establecimiento de su sistema económico que generó la dependencia de los bienes producidos en el Cusco.",
        Correct: "A"
    },
    {
        name: "2018iCE63",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "En el periodo virreinal de la historia peruana, el siglo XVIII es el tiempo de las reformas borbónicas y los movimientos sociales, entre los que destaca la figura de José Gabriel Condorcanqui, Túpac Amaru II. Su movimiento conmocionó la sierra sur e impactó en varias regiones de Sudamérica. Aunque finalmente fue derrotada, esta rebelión fue la mayor lucha anticolonial indígena. Acerca del levantamiento tupacamarista, se puede afirmar que",
        A: "forjó la unión entre indígenas quechuas y aimaras.",
        B: "se inició con la alianza del rebelde con los criollos.",
        C: "tuvo el apoyo de toda la alta nobleza indígena.",
        D: "provocó cambios administrativos en el Virreinato.",
        E: "fue coordinado con los patriotas rioplatenses.",
        Correct: "D"
    },
    {
        name: "2018iCE64",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "La derrota en la guerra del Pacífico (1879- 1883) fue un acontecimiento devastador para el Perú. Una de sus consecuencias políticas inmediatas más importantes fue",
        A: "la firma del polémico contrato Dreyfus.",
        B: "el retorno del caudillismo militar.",
        C: "el regreso del Partido Civil al gobierno.",
        D: "la firma del acuerdo con la Casa Grace.",
        E: "la Coalición Nacional liderada por Piérola.",
        Correct: "E"
    },
    {
        name: "2018iCE65",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "Establezca relaciones correctas entre los periodos republicanos y sus características económicas.<br>I. La Patria Nueva&nbsp;&nbsp;&nbsp;&nbsp;a. Exportaciones favorecidas por la guerra de Corea<br>II. Ochenio de Odría&nbsp;&nbsp;&nbsp;&nbsp;b. Penetración del capital norteamericano<br>III. Década del 60&nbsp;&nbsp;&nbsp;&nbsp;c. Boom de la exportación del<br>IV. República Aristocrática caucho amazónico&nbsp;&nbsp;&nbsp;&nbsp;d. Apogeo de la pesca industrial en el mar peruano",
        A: "Id, Ila, IIIc, IVb",
        B: "Ia, IId, IIIb, IVc",
        C: "Ib, IIa, IIId, IVc",
        D: "Ic, IIa, IIId, IVb",
        E: "Ia, IIc, IIId, IVb",
        Correct: "C"
    },
    {
        name: "2018iCE66",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "Se define como proceso de hominización la serie de transformaciones físicas y psíquicas que permitieron la evolución de los homínidos a la especie de Homo sapiens. ¿Qué atributo del Homo sapiens engloban, al mismo tiempo, las transformaciones físicas y psíquicas?",
        A: "La gran capacidad de locomoción, como se aprecia en las huellas de Laetoli",
        B: "El descubrimiento del uso del fuego controlado para cocinar los alimentos",
        C: " El desarrollo de sus pulgares oponibles y los primeros artefactos hechos de piedra",
        D: "La comunicación mediante el lenguaje simbólico, como es el caso del arte rupestre",
        E: "La adaptación temprana a una postura erecta y el abandono de la vida arbórea",
        Correct: "D"
    },
    {
        name: "2018iCE67",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "En el siglo IV a. C., destaca la figura de Alejandro Magno, gobernante de Macedonia y Grecia, quien fue célebre por sus conquistas militares. En ese contexto, la fundación de Alejandría en Egipto facilitó",
        A: "el declive de la cultura helenística.",
        B: "la expansión de la cultura griega.",
        C: "la formalización de las ligas griegas aliadas.",
        D: "el predominio del Imperio medo-persa.",
        E: "el inicio del Imperio romano occidental.",
        Correct: "B"
    },
    {
        name: "2018iCE68",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "En los siglos XV y XVI, la cultura europea fue transformada por el movimiento renacentista, que se manifestó en las costumbres, la ciencia, la poesía y las artes plásticas. El cambio cultural se inició en Italia, tierra natal de Leonardo, Miguel Ángel y Rafael. Si se considera las influencias, podemos afirmar que el arte renacentista estuvo inspirado en",
        A: "la exageración y dramatismo del gusto barroco.",
        B: "la arquitectura antigua de Egipto y Mesopotamia.",
        C: "el arte sacro románico, gótico y bizantino.",
        D: "los ideales libertarios de la filosofía francesa.",
        E: "los valores estéticos de la Antigüedad Clásica.",
        Correct: "E"
    },
    {
        name: "2018iCE69",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "En los siglos XV y XVI se produjo la expansión europea hacia África, Asia y América. Los portugueses y los españoles desempeñaron roles fundamentales en esta empresa. Una de las consecuencias de este proceso fue",
        A: "la crisis demográfica que afectó al Nuevo Mundo.",
        B: "el desarrollo de una revolución industrial en Portugal.",
        C: "el colapso político de los imperios del Lejano Oriente.",
        D: "el confinamiento del Islam al Medio Oriente.",
        E: "la difusión de las ideas ilustradas en España.",
        Correct: "A"
    },
    {
        name: "2018iCE70",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "En el Tratado de Versalles, las condiciones impuestas a los países perdedores de la Primera Guerra Mundial fueron muy drásticas: perdieron territorios, colonias, poderío militar y se les exigió una importante reparación monetaria. Una de las consecuencias inmediatas de estas condiciones fue",
        A: "la irrupción de Francia como potencia mundial.",
        B: "la desaparición paulatina del partido nazi.",
        C: "la crisis económica alemana de los años veinte.",
        D: "la descolonización de África, Asia y Oceanía.",
        E: "la decadencia geopolítica del Imperio británico.",
        Correct: "C"
    },
    {
        name: "2018iCE71",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "La región de la selva o región amazónica corresponde al sector oriental de nuestro territorio caracterizado por su densa vegetación, propia de latitudes ecuatoriales. Su extensa llanura corresponde al área de selva __________, que es la parte oriental más joven del territorio peruano, y, edáficamente, presenta suelos de origen __________.",
        A: "baja - aluvial",
        B: "alta - aluvial",
        C: "alta - glaciar",
        D: "baja - eólico",
        E: "alta - tectónico",
        Correct: "A"
    },
    {
        name: "2018iCE72",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "Muchos de los valles de la llanura costera tienen forma cónica, por lo que se les conoce también como conos de deyección, cuyo vértice se pierde en el inicio de los Andes y cuya base –solo de algunos– llega hasta el litoral. De esta manera, constituyen áreas de sedimentos de materiales arrastrados por los ríos desde la zona andina, y sus suelos, de gran fertilidad, son conocidos como",
        A: "coluviales.",
        B: "aluviales.",
        C: "fluviosoles.",
        D: "litosólicos.",
        E: "cambisólicos.",
        Correct: "C"
    },
    {
        name: "2018iCE73",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "El esquema de las ocho regiones naturales de Javier Pulgar Vidal es una buena herramienta para entender las diversidades del Perú, pero existen dos grandes regiones olvidadas: el Mar de Grau y la ceja de selva. Esta última, localizada en las vertientes andinas del este y cubierta por bosques tropicales, alcanza altitudes entre 3500 y 3900 ms.n.m.; en tanto, su límite inferior se sitúa a 1000 metros. ¿Cuáles de las siguientes características la definen?<br>I. Clima subtropical con temperaturas diurnas superiores a 20 °C todo el año<br>II. Humedad atmosférica muy baja la mayor parte del año y precipitaciones escasas<br>III. Subescurrimiento por gravedad que llega al fondo de los valles, ríos y quebradas<br>IV. Relieve poco accidentado carente de cañones estrechos y laderas pronunciadas",
        A: "II y IV",
        B: "I y II",
        C: "I y IV",
        D: "II y III",
        E: "I y III",
        Correct: "E"
    },
    {
        name: "2018iCE74",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: false,
        question: "En la actualidad, Lima Metropolitana alberga casi el 30% de la población total del país. Esta concentración se debe a las migraciones internas constantes de población, iniciadas con mayor intensidad desde la década de los cuarenta del siglo pasado. Este movimiento alcanza un máximo en los setenta y se mantiene hasta el momento actual, con altos flujos de población migrante cercanos al 20% de la población total. Una de las consecuencias directas que ha generado este proceso es",
        A: "la aparición de cinturones urbano- marginales en la capital.",
        B: "la arborización en las estribaciones andinas que bordean Lima.",
        C: "el caos vehicular en las principales arterias de la capital.",
        D: "el déficit de mano de obra calificada en la metrópoli.",
        E: "la aparición de grandes emporios comerciales en la capital.",
        Correct: "E"
    },
    {
        name: "2018iCE75",
        subject: "Social Sciences",
        sub_subject: "Peruvian History",
        prompt: false,
        image: true,
        question: "El cuadro presenta la red de ciudades de 20 mil y más habitantes por condición de migración neta y migración intrasistema de ciudades, 2002-2007. Analice los datos de la tabla y determine cuáles de los siguientes enunciados son adecuados.<br>I. La migración neta total muestra que solo un poco más del tercio del total de ciudades (35%) registra un saldo migratorio positivo.<br>II. En la migración intrasistema de ciudades, una de cada siete ciudades (14%) pierde población de manera acentuada.<br>III. En las ciudades intermedias mayores, intermedias menores y pequeñas, predominan las ciudades que pierden población en las dos condiciones de análisis de la migración.<br>IV. En la mayor parte de las ciudades del Perú, la realidad no es de expulsión, sino de atracción, especialmente en la migración neta total.",
        A: "II y IV",
        B: "I y II",
        C: "I y IV",
        D: "I y III",
        E: "II y III",
        Correct: "D"
    },
    {
        name: "2018iCE76",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "En el Perú, un grupo de economistas analiza la realidad, empleando los conceptos de positivo y normativo. ¿Cuál de las siguientes afirmaciones debería calificarse como un análisis positivo?",
        A: "El Gobierno debería privatizar las empresas estatales existentes.",
        B: "El Gobierno debería privatizar las empresas estatales existentes.",
        C: "Todas las personas y los negocios deberían pagar sus impuestos.",
        D: "Una mayor demanda por el pan genera un aumento en su precio.",
        E: "Es mejor que el Gobierno gaste en educación que en armamentos.",
        Correct: "D"
    },
    {
        name: "2018iCE77",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Cada fin de mes, el jefe del Instituto Nacional de Estadística e Informática del Perú debe informar a la ciudadanía sobre las variaciones más notables de los precios de bienes y servicios de consumo de las familias representativas del país. Al cumplir el mandato, el responsable del ente rector del sistema estadístico informa sobre un indicador __________, conocido como __________.",
        A: "microeconómico - deflactor del producto bruto interno",
        B: "macroeconómico - ratio de escasez material",
        C: "macroeconómico - índice de precios al consumidor",
        D: "microeconómico - valor de la canasta de consumo",
        E: "microeconómico - índice de precio al por mayor",
        Correct: "C"
    },
    {
        name: "2018iCE78",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "El distrito de San Borja, ubicado en la ciudad de Lima, es uno de los más organizados del país; sin duda, destaca por su orden y limpieza. Para conseguir un buen funcionamiento, el municipio recauda y administra significativos recursos monetarios que la ciudadanía avala por los resultados. Al ser un gobierno local, el tributo administrado es el impuesto",
        A: "a las importaciones.",
        B: "general a las ventas.",
        C: "selectivo al consumo.",
        D: "a los ingresos.",
        E: "al valor del predio.",
        Correct: "E"
    },
    {
        name: "2018iCE79",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "En el sector público del Perú, el ingreso recaudado es, casi siempre, menor al gasto ejecutado. Para cerrar la brecha, los responsables de las diversas entidades públicas aceptan «obligaciones» ante instituciones nacionales o extranjeras. La suma de los compromisos es conocida como",
        A: "deuda interna.",
        B: "deuda pública.",
        C: "deuda externa.",
        D: "acreencia nacional.",
        E: "déficit público.",
        Correct: "E"
    },
    {
        name: "2018iCE80",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Desde 1990, la Organización de las Naciones Unidas realiza esfuerzos entre los países miembros para extender y mantener un conjunto de datos que permita la comparación entre ellos. La tarea desplegada por el organismo supranacional se sintetiza en el indicador del desarrollo humano. Al emplear este indicador, los países se comparan, básicamente, en términos",
        A: "del crecimiento económico.",
        B: "del avance tecnológico.",
        C: "de la calidad de vida.",
        D: "de la inversión ejecutada.",
        E: "de los resultados educativos.",
        Correct: "C"
    },
    {
        name: "2018iCE81",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "San Agustín, en su obra autobiográfica Confesiones, discutió —entre otros tópicos— el problema del tiempo, el cual guarda relación con su preocupación como cristiano por el tema de la",
        A: "salvación del hombre.",
        B: "dignidad humana.",
        C: "primacía de la Iglesia.",
        D: "importancia de la fe.",
        E: "negación de los placeres.",
        Correct: "D"
    },
    {
        name: "2018iCE82",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "Tales de Mileto consideraba que el agua era el principio constitutivo material de toda la naturaleza viva y que todo estaba lleno de dioses. De acuerdo con esta idea, se puede inferir que, para el primer filósofo, esta sustancia expresaba mejor que cualquier otra, por sus características,",
        A: "el incesante cambio de las fuerzas naturales.",
        B: "la permanencia e inmutabilidad del universo.",
        C: "la lucha y armonía existente en el universo.",
        D: "el carácter empírico de la naturaleza.",
        E: "la vida y lo misterioso que resulta explicarla.",
        Correct: "B"
    },
    {
        name: "2018iCE83",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "Santo Tomás de Aquino, debido a la influencia de las obras de Aristóteles, se convenció del papel activo del intelecto en el proceso del conocimiento y acabó afirmando que el intelecto está vacío al inicio, como una tabula rasa en la que hay que empezar a escribir. De acuerdo con esta convicción, se infiere que",
        A: "las ideas se construyen por un método <i>a priori</i>.",
        B: "las nociones se formulaban por proceso de inducción.",
        C: "la deducción es un proceso complejo y abstracto.",
        D: "la imaginación permite la formulación de las nociones.",
        E: "a partir de la deducción se formulan los conceptos.",
        Correct: "B"
    },
    {
        name: "2018iCE84",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: 'La denominación griega filosofía denota amor a la sabiduría, y es a la vez indicación de la esencia más íntima de la filosofía, esa esencia que durante mucho tiempo no se entendió en su función central, a saber, en su finitud. Y esta no queda entendida porque en una actitud de aparente modestia y con una cierta emoción se confiese finalmente que nuestro saber es al cabo fragmentario. Lo decisivo no es querer recorrer hasta el fin, pese a su infinitud, los caminos que supuestamente hayamos podido abrirnos, sino emprender en cada caso un camino nuevo y distinto.<br><font size="2">Heidegger, Martin (2001). <i>Introducción a la filosofía</i>.</font><br>A partir de la argumentación de Heidegger, se infiere que la esencia de la filosofía consiste en una.',
        A: "incesante búsqueda del saber.",
        B: "sabiduría finita y fragmentaria.",
        C: "fragmentación del saber.",
        D: "actitud de modestia ante la sabiduría.",
        E: "búsqueda de la exactitud.",
        Correct: "A"
    },
    {
        name: "2018iCE85-86",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: '<b>Lea con atención el siguiente texto y a continuación responda las preguntas 85 y 86.</b><br>Los filósofos griegos creyeron que existen principios lógicos privilegiados que son esenciales al pensamiento racional. Estos principios, famosos bajo los nombres de principios de identidad, no contradicción y tercio excluso, han sido aceptados por la totalidad de la tradición filosófica y científica desde los griegos hasta nuestros días [...].<br>La lógica matemática clásica los ha incluido entre sus principios, y la moderna filosofía de las matemáticas está sumamente involucrada con su significado, su validez y su crítica. Así, pensamos que la lógica clásica puede ser concebida como una lógica que incluye los tres principios griegos.<br>Miró Quesada, Francisco (1978).<br><font size="2">«Las lógicas heterodoxas y el problema de la unidad de la lógica», Rosales, Diógenes (ed.).<i>Lógica. Aspectos formales y filosóficos</i></font>.',
        image: false,
        question: "Según Francisco Miró Quesada, la lógica matemática es un sistema que",
        A: "ha sido abandonado por la tradición filosófica occidental.",
        B: "excluye totalmente las formas del pensamiento racional.",
        C: "posee un lenguaje formal que admite los tres principios clásicos.",
        D: "carece de sentido y validez para el uso científico actual.",
        E: "privilegia el principio de no contradicción sobre los otros dos.",
        Correct: "C"
    },
    {
        name: "2018iCE86",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: "2018iCE85-86",
        image: false,
        question: "Del texto se infiere que, para Miró Quesada, entre la lógica tradicional y la moderna hay una",
        A: "radical incompatibilidad.",
        B: "conexión profunda.",
        C: "esencial inconmensurabilidad.",
        D: "relación isomorfa.",
        E: "vinculación subalterna.",
        Correct: "B"
    },
    {
        name: "2018iCE87-88",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: '<b>Después de leer atentamente el siguiente texto, responda las preguntas 87 y 88.</b><br>Cuando Popper se arriesga a hacer observaciones fortuitas sobre la falsabilidad de las más grandes teorías científicas, distorsiona la historia para acomodarla a su propia teoría de la racionalidad. Si la metodología de un historiador proporciona una reconstrucción racional pobre, este puede o bien hacer una mala lectura de la historia de modo que aquella coincida con su reconstrucción racional, o se encontrará con que la historia de la ciencia es enormemente irracional. El gran respeto de Popper por la ciencia le hizo elegir la primera opción, mientras que el irrespetuoso Feyerabend eligió la segunda.<br><font size="2">Lakatos, Imre (2008). <i>Historia de la ciencia y sus reconstrucciones racionales</i></font>.',
        image: false,
        question: "De acuerdo con lo afirmado por el autor, se infiere que",
        A: "Popper defiende una versión irracional de la historia de la ciencia.",
        B: "solo hay teorías científicas cuando hacemos observaciones fortuitas.",
        C: "el método de Popper cuestiona la falsabilidad de las teorías.",
        D: "la metodología de la historia de la ciencia de Popper distorsiona los hechos.",
        E: "el método de la historia de la ciencia de Feyerabend se ajusta a los hechos.",
        Correct: "D"
    },
    {
        name: "2018iCE88",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "Si las observaciones históricas de Popper son una muestra de su respeto por la racionalidad de la ciencia, entonces es falso afirmar que",
        A: "una reconstrucción racional pobre conlleva a una mala lectura de la historia.",
        B: "el método de Popper haya priorizado la reconstrucción racional sobre la historia.",
        C: "Feyerabend haya defendido la racionalidad de la ciencia a través de la historia.",
        D: "Popper se interesó por explicar la falsabilidad de las teorías científicas.",
        E: "Popper acomode los hechos históricos a su teoría de la racionalidad.",
        Correct: "C"
    },
    {
        name: "2018iCE89",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: true,
        question: "El flujo magnético expresa una relación entre el campo magnético y el área que es atravesada por este campo. Este flujo se expresa matemáticamente como el producto escalar del vector campo magnético y el vector área. El vector área es un vector perpendicular a la superficie cuya magnitud es justamente el área de la superficie. La dirección del vector área es siempre saliente de la superficie. Si tenemos una superficie triangular de a metros de lado sobre la cual incide un campo magnético de 4 T de intensidad que forma un ángulo de 60° con la vertical que pasa por el centro del triángulo, ¿cuál será el flujo magnético?",
        A: "\\(\\frac{a^2}{2}\\) Wb",
        B: "\\(a^2\\sqrt 3\\) Wb",
        C: "\\(\\frac{a^2\sqrt 3}{4}\\) Wb",
        D: "\\(-\\frac{a^2\\sqrt 3}{4}\\) Wb",
        E: "\\(-\\frac{a^2\\sqrt 3}{2}\\) Wb",
        Correct: "E"
    },
    {
        name: "2018iCE90",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: false,
        question: "Las ondas primaria y secundaria, P y S, parten simultáneamente desde el hipocentro de un sismo. El hipocentro es el lugar debajo de la superficie terrestre donde se genera el sismo. Las ondas P viajan aproximadamente 1,73 veces más rápido que las S. Ahora bien, en cierto lugar de la costa peruana tiene lugar un sismo y es registrado por un sismógrafo ubicado sobre la superficie terrestre. El sismógrafo registra que las ondas S y P llegan con una diferencia de 14,6 s. Si se sabe, además, que la onda S tiene una rapidez de 5 km/s, determine la distancia del hipocentro al sismógrafo.",
        A: "299,29 km",
        B: "100 km",
        C: "34,6 km",
        D: "173 km",
        E: "73 km",
        Correct: "D"
    },
    {
        name: "2018iCE91",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: false,
        question: "El teorema del trabajo y la energía expresa una relación entre el trabajo realizado por una fuerza conservativa y la variación de la energía cinética del sistema. Con 650 N de peso, Lilya busca desesperadamente a Rosa. Corre y corre sin cesar desde un punto a otro de la universidad. En la Clínica Universitaria, Lilya tiene una energía cinética de 850 J y en la Oficina Central de Admisión (OCA) registra una rapidez de 6 m/s. Al ir de la Clínica Universitaria a la Oficina Central de Admisión, Lilya realiza un trabajo de<br>" + "(Dato: g = 10 \\(\\frac{m}{s^2}\\))",
        A: "650 J",
        B: "1170 J",
        C: "2020 J",
        D: "850 J",
        E: "320 J",
        Correct: "E"
    },
    {
        name: "2018iCE92",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: false,
        question: "Un átomo puede pasar a un nivel de mayor energía si colisiona, por ejemplo, con un electrón. Luego de ello, el átomo vuelve a su estado de menor energía emitiendo un fotón. En un experimento, un gas de átomos de mercurio es bombardeado con electrones. Se observa que una luz con longitud de onda de \\(2,5 × 10^{–7}\\) m es emitida desde un átomo de mercurio en estado excitado y luego decae a su nivel energético más bajo. Determine la energía del fotón emitido.<br>Considere \\(hc \\approx 1,24 ×10^{-6}\\) eV⋅m.",
        A: "\\(9,9 × 10^{–7}\\) eV",
        B: "\\(3,1 × 10^{–13}\\) eV",
        C: "\\(20\\) eV",
        D: "\\(14,9 × 10^{–7}\\) eV",
        E: "\\(49×10^{–1}\\) eV",
        Correct: "E"
    },
    {
        name: "2018iCE93",
        subject: "Sciences",
        sub_subject: "Chemistry",
        prompt: false,
        image: false,
        question: "Si el número atómico (Z) de un halógeno que se encuentra en el periodo n es 9, el valor de Z perteneciente a un elemento de la misma familia y que se halla en el periodo (n+ 2) es",
        A: "25",
        B: "18",
        C: "37",
        D: "35",
        E: "33",
        Correct: "D"
    },
    {
        name: "2018iCE94",
        subject: "Sciences",
        sub_subject: "Chemistry",
        prompt: false,
        image: false,
        question: "¿Cuántos iones calcio tendrá una muestra de dibromuro de calcio que contiene 1,62 × 1024 iones bromuro?",
        A: "\\(1,62 × 10^{24}\\)",
        B: "\\(8,10 × 10^{23}\\)",
        C: "\\(3,24 × 10^{24}\\)",
        D: "\\(8,10 × 10^{25}\\)",
        E: "\\(5,40 × 10^{23}\\)",
        Correct: "B"
    },
    {
        name: "2018iCE95",
        subject: "Sciences",
        sub_subject: "Chemistry",
        prompt: false,
        image: false,
        question: "En muchos casos, en solo una ecuación química balanceada se representa la suma de varías etapas elementales, es decir, una serie de reacciones sencillas que, a nivel molecular, representa el avance de la reacción global. A la secuencia de etapas elementales que conduce a la formación de productos se le denomina",
        A: "molecularidad de la reacción.",
        B: "estados de transición.",
        C: "mecanismo de reacción.",
        D: "complejos activados.",
        E: "evolución de intermediarios.",
        Correct: "C"
    },
    {
        name: "2018iCE96",
        subject: "Sciences",
        sub_subject: "Chemistry",
        prompt: false,
        image: false,
        question: "De acuerdo con el principio de Aufbau, la configuración electrónica del carbono (6C) indica que debería ser divalente; sin embargo, es tetravalente. Significa, entonces, que los átomos de carbono",
        A: "se autosaturan enlazándose a otros átomos.",
        B: "e hidrógeno cumplen con la regla del octeto.",
        C: "con hibridización sp3 forman solo cadenas abiertas.",
        D: "tienen capacidad de formar enlaces iónicos.",
        E: "forman solo cadenas carbonadas cíclicas.",
        Correct: "A"
    },
    {
        name: "2018iCE97",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "¿Cuál de las siguientes aserciones expresa la idea central de la teoría de la panspermia sobre el origen de la vida?",
        A: "Es posible la generación espontánea.",
        B: "La vida no se originó en nuestro planeta.",
        C: "La vida terrestre se originó en los mares.",
        D: "La atmósfera originaria era reductora.",
        E: "La vida se originó por quimiosíntesis.",
        Correct: "B"
    },
    {
        name: "2018iCE98",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "¿Cómo se denomina a los glóbulos blancos más numerosos de la sangre cuya función es la fagocitosis de bacterias que invaden los tejidos?",
        A: "Eosinófilos",
        B: "Linfocitos",
        C: "Neutrófilos",
        D: "Monocitos",
        E: "Basófilos",
        Correct: "C"
    },
    {
        name: "2018iCE99",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "Ante el incremento de muertes y casos de enfermedad, el Ministerio de Salud (Minsa) declaró en alerta epidemiológica al departamento de La Libertad. El estado de mortandad y morbidez fue causado por agentes infecciosos, ultramicroscópicos y acelulares que afectan a todo tipo de organismos y no pueden realizar ninguna función fuera de la célula hospedera. ¿A qué patógenos corresponde la anterior descripción?",
        A: "Virus",
        B: "Bacterias",
        C: "Hongos",
        D: "Bacteriófagos",
        E: "Parásitos",
        Correct: "A"
    },
    {
        name: "2018iCE100",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "Las vitaminas son compuestos orgánicos que los animales requieren ingerir en pequeñas cantidades porque no pueden sintetizarlos. Estos compuestos participan en las reacciones químicas para obtener energía o sintetizar moléculas biológicas, y pueden ser solubles en agua o en lípidos. Si la vitamina C se necesita para la síntesis de colágeno, ¿con qué proceso estará directamente relacionada?",
        A: "Transmisión de impulso nervioso",
        B: "Regeneración de neuronas",
        C: "Síntesis de pigmentos visuales",
        D: "Mantenimiento de cartílagos",
        E: "Síntesis de proteínas contráctiles",
        Correct: "D"
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