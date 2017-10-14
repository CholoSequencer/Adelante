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
        name: "2018iABD1-5",
        prompt: "Este año, la educación superior entra a una nueva etapa, pues la oferta está dejando de dominar, y estudiantes y padres tienen mayor capacidad de decisión. Eso es bueno para todos, excepto para las instituciones que no se preocuparon por la calidad de su producto. Veamos.<br><br>La, primera etapa de la educación superior en América Latina, que llamaremos de demanda insatisfecha, duró desde la fundación de las primeras universidades en el siglo XVI hasta hace unos años. Allí, las pocas instituciones existentes no se preocupaban en atraer alumnos, porque ingresar a ellas era «una cosa de locos». La fuerza de esas instituciones declinó hace unos 20 años, con la explosión de la oferta, etapa en que se liberalizó el sector y aparecieron decenas de nuevas instituciones de todo tipo. Allí surgió una nueva locura, pues todas las universidades, pequeñas o grandes, precarias o bien financiadas, y tanto las “fáciles” como las que cuidaban la calidad, crecieron explosivamente. Pero hoy empieza a pasar esa locura y aparece una etapa de empoderamiento de la demanda, donde la oferta se acerca a lo demandado y los estudiantes pueden escoger a qué institución ingresar. Pero más importante aún, ya se puede ver si la inversión que hicieron las primeras familias dio los frutos esperados; es decir, mejorar la vida de sus egresados. Hoy los padres ya saben si el título que obtuvieron sus hijos o los hijos de sus conocidos, en tal o cual institución, les sirvió para progresar o si es un cartón que cuelgan en un taxi.<br><br>En esta nueva etapa se inicia entonces una competencia, mayor entre instituciones, pues empiezan a ser escogidas, o rechazadas, por la calidad de sus profesores, la utilidad de sus programas, la pertinencia de su investigación o sus facilidades de infraestructura. Y así, mientras las que buscaron ganancias inmediatas y no se preocuparon por la calidad de su trabajo empiezan a perder alumnos, las buenas universidades, sin importar si son privadas o públicas, con o sin fines de lucro, ven un ligero crecimiento. Hoy ya se puede aplicar la esencia del marketing, que dice que in a competitive market, the future of an enterprise is determined by how many customers remain and are able to recommend it to others, but not by how many customers it has. ¿Eso significa que desaparecerán las malas universidades? No, pero les será más dificil ser rentables, y se favorecerán las buenas y preparadas. Y por cierto, ahora que entrar a la universidad ya no es cosa de locos, será más fácil para los entes rectores controlar la calidad de la educación brindada, pues tendrán la colaboración de padres y estudiantes, y de las reglas del mercado.<br><br>Recuperado de http://www.elcomercio.pe/opinion/rincon-del-autor/",
        image: "FALSE",
        question:"El autor se refiere, principalmente,",
        A:"a la dinámica de la oferta y la demanda universitarias.",
        B:"al rol de estudiantes y padres de familia en la universidad.",
        C:"al papel desempeñado por la universidad en el tiempo.",
        D:"a los indicadores del éxito de la gestión universitaria.",
        E:"al rol del marketing universitario a través de los siglos.",
        Correct:"A" 
    },
    {
        name: "2018iABD2",
        prompt:"2018iABD1-5",
        image: "FALSE",
        question: "¿Cuál de los siguientes enunciados resulta incompatible con el texto?",
        A: "Los postulantes, en la actualidad, pueden evaluar una amplia oferta.",
        B: "El incremento de universidades se debe a un marco jurídico propicio.",
        C: "Las nuevas universidades son evaluadas considerando el mercado laboral.",
        D: "Se recomienda una universidad porque se la considera de calidad.",
        E: "La primera etapa de la educación superior fue gobernada por la demanda.",
        Correct: "E" 
    },
    {
        name: "2018iABD3",
        prompt: "2018iABD1-5",
        image: "FALSE" ,
        question: "En el texto, la expresión UNA COSA DE LOCOS implica que",
        A: "el estudio enajenaba al futuro universitario.",
        B: "el ingreso a la universidad era muy difícil.",
        C: "la universidad era una pérdida de tiempo.",
        D: "el universitario tenía algo de extravagante.",
        E: "la universidad estaba distante de la realidad.",
        Correct: "B"
    },
    {
        name: "2018iABD4",
        prompt: "2018iABD1-5",
        image: "FALSE",
        question: "De la expresión en inglés se desprende que, para el autor, la calidad de una institución se mide fundamentalmente en una actitud de _________ de sus clientes.",
        A: "aproximación",
        B: "persistencia",
        C: "encomio",
        D: "lealtad",
        E: "objetividad",
        Correct: "C" 
    },
    {
        name: "2018iABD5",
        prompt: "2018iABD1-5",
        image: "FALSE",
        question: "Respecto del mercado universitario reseñado en el tercer párrafo, se infiere que",
        A: "la demanda continuará estando insatisfecha.",
        B: "la oferta seguirá superando a la demanda.",
        C: "la rentabilidad estará determinada por la calidad.",
        D: "desaparecerán las universidades más recientes.",
        E: "solo quedarán las universidades más antiguas.",
        Correct: "C"
    },
    {
        name: "2018iABD6-10",
        prompt: "El Centro de Estudios de Problemas Económicos y Sociales de la Juventud (CEPESJU) dio a conocer una preocupante realidad: el embarazo en adolescentes continúa en aumento. Según la Encuesta Demográfica y de Salud Familiar (ENDES) del año 2014 realizado por el INEI, el 14,6 % de mujeres entre 15 y 19 años están embarazadas o han tenido hijos, lo que representa un aumento en comparación con la misma encuesta del año anterior, en la que la cifra llegó a 13,9 %. Es decir, que en nuestro país, de cada 100 adolescentes, 14 se encuentran embarazadas o han tenido un hijo.<br><br>Algo preocupante si se le añade que el 59 % de estos embarazos son no deseados o no planificados. En Lima, el aumento es notorio si se compara con la encuesta del año 1991/92, cuando el porcentaje fue de 4,4 % mientras que en el 2013 llegó a 10,6 %. Este incremento tiene una clara relación con la poca o nula información sobre métodos anticonceptivos. ENDES también compara la variable educación con un resultado llamativo aunque ya conocido: el 34,1 % de las mujeres con solo educación primaria, en el rango de edad de 15 a 19 años, ya son madres o se encuentran en estado, lo que contrasta con el 14,2 % de mujeres que llegaron a la secundaria y el 6,4 % a educación superior. Por último, el estudio de ENDES señala que el porcentaje de adolescentes entre 15 y 19 años sexualmente activas, pero que no tienen una pareja estable y que usan métodos anticonceptivos modernos, es de 62,6 %, lo que representa una ligera disminución con el 63,7 % del año pasado; por su parte, las adolescentes con pareja o conviviente que utilizan estos métodos pasó de 46,9 % a 42,9 %.<br><br>Ministerio de Salud del Perú (2009). Balance político normativo sobre el acceso de las y los adolescentes a los servicios de salud sexual, salud reproductiva y prevención del VIH-SIDA. Lima: Ministerio de Salud del ",
        image: true,
        question: "Básicamente, el autor da cuenta",
        A: "del porqué de los embarazos no deseados en adolescentes.",
        B: "del embarazo en adolescentes y sus posibles causas.",
        C: "de la oferta y la demanda en el uso de métodos anticonceptivos.",
        D: "de la relación entre embarazo adolescente y nivel educativo.",
        E: "de la falta de información sobre métodos anticonceptivos.",
        Correct: "B"
    },
    {
        name: "2018iABD7",
        prompt: "2018iABD6-10" ,
        image: false,
        question: "En el texto, el verbo CONTRASTAR connota",
        A: "refuerzo de prejuicio.",
        B: "simple comparación.",
        C: "comprobación de hipótesis.",
        D: "marcada diferencia.",
        E: "notoria oposición.",
        Correct: "D"
    },
    {
        name: "2018iABD8",
        prompt: "2018iABD6-10",
        image: false,
        question: "A partir de las curvas expuestas en el cuadro, cabe inferir que el índice de las adolescentes alguna vez embarazadas,",
        A: "aumentó ligeramente hacia el año 2014 en el área rural.",
        B: "disminuyó algo entre 2000-2009 en el área urbana.",
        C: "careció de incremento de 2013 a 2014 en el área rural.",
        D: "disminuyó ligeramente de 2013 a 2014 en el Perú.",
        E: "se mantuvo constante entre 2012-2014 en el área urbana.",
        Correct: "A"
    },
    {
        name: "2018iABD9",
        prompt: "2018iABD6-10",
        image: false,
        question: "Si el Gobierno desarrollase una eficaz campaña de difusión sobre métodos anticonceptivos entre las adolescentes en las zonas rurales, entonces sería posible que",
        A: "ya no hubiera, al fin, embarazos no deseados en todo el territorio nacional.",
        B: "disminuyera el porcentaje de embarazos adolescentes en las zonas urbanas.",
        C: "las mujeres que tienen educación primaria dejaran de quedar embarazadas.",
        D: "los porcentajes de adolescentes embarazadas en ambas zonas sean iguales.",
        E: "se produjera un descenso significativo en la tasa de embarazos adolescentes.",
        Correct: "E"
    },
    {
        name: "2018iABD10",
        prompt: "2018iABD6-10",
        image: false,
        question: "Según los estudios referidos, ¿cuáles de los siguientes enunciados son medidas adecuadas para reducir los embarazos adolescentes?<br><br>I. Brindar información sobre métodos anticonceptivos <br><br>II. Comprar métodos anticonceptivos modernos<br><br>III. Elevar el nivel educativo de las mujeres adolescentes <br><br>IV. Promover la sexualidad activa después de los 19 años",
        A: "I y III",
        B: "I y II",
        C: "III y IV",
        D: "I y IV",
        E: "II y IV",
        Correct: "A"
    },
    {
        name: "2018iABD11-15",
        prompt: "Me gustaría comentar brevemente el desacuerdo entre Karl Popper y Thomas Kuhn sobre la naturaleza esencial de la ciencia y sobre la génesis de las revoluciones científicas. Si entiendo bien a Popper, la ciencia está potencialmente al borde de la revolución de manera básica y constante. Una refutación, al menos si es lo bastante grande, constituye una de esas revoluciones. Por su parte, Kuhn da argumentos en favor de que la mayor parte del tiempo dedicado al trabajo científico es lo que él llama ciencia «normal», y consiste en la resolución de problemas; de modo que, para Kuhn, una revolución científica es una construcción a largo plazo y ocurre solo raramente porque la mayoría de los científicos no está intentando refutar las teorías vigentes. Ambas partes han presentado sus posiciones con considerable detalle, pero me parece que hay una fisura importante en ambas teorías. Se trata simplemente de ¿cómo sabemos de qué trata la ciencia?<br><br>Realmente, tanto Popper como Kuhn basan en la historia de la ciencia sus puntos de vista sobre la naturaleza y estructura de la ciencia, y mi punto principal es que la historia de la ciencia no puede en la actualidad llevar esa carga. Simplemente, no sabernos lo bastante como para permitir que una estructura filosófica sea erigida sobre una fundamentación histórica. Por ejemplo, no podría haber mejor ilustración de lo que es la ciencia «normal» que las investigaciones experimentales que Faraday hizo sobre la electricidad en la década de 1830. Esta es la opinión tradicional que se tiene de Faraday, maestro de la experimentación que jamás en su vida tuvo una idea teórica. Sin embargo, cuando se lee sus apuntes personales, aparece un Faraday extraño. Desde 1821 en adelante, estuvo contrastando hipótesis fundamentales acerca de la naturaleza de la materia y de la fuerza.<br><br>Como historiador, pues, debo mirar a Popper y a Kuhn con una mirada recelosa. Ambos han suscitado asuntos de fundamental importancia; ambos han hecho profundas observaciones sobre la naturaleza de la ciencia; pero ninguno ha compilado y aducido hechos suficientemente fuertes como para llevarme a creer que alguno de ellos haya captado la esencia de la investigación científica.<br><br>Pearce Williams, I. “La Ciencia Normal, las revoluciones científicas y la historia de la ciencia”. I. Lakatos y A. Musgrave (eds.) (1975), La crítica y el desarrollo del conocimiento. México: Grijalbo.",
        image: false,
        question: "¿Cuál es el tema central del texto?",
        A: "Consideraciones filosóficas sobre el desacuerdo entre Popper y Kuhn en torno a los descubrimientos",
        B: "Las ideas de Popper y de Kuhn acerca de la experimentación científica a partir de los trabajos de Faraday",
        C: "Las diferentes concepciones de Popper y de Kuhn sobre el desenlace de las revoluciones en las ciencias",
        D: "Las diferentes nociones históricas de ciencia «normal» en los trabajos filosóficos de Popper y de Kuhn",
        E: "Análisis del debate entre Popper y Kuhn sobre la naturaleza de la ciencia desde un enfoque histórico",
        Correct: "E" 
    },
    {
        name: "2018iABD12",
        prompt: "2018iABD11-15",
        image: false,
        question: "De acuerdo con el análisis desarrollado en el texto, Popper considera que las revoluciones científicas podrían ser ______, mientras que Kuhn sostiene que son ________.",
        A: "discontinuas — continuas",
        B: "permanentes — esporádicas",
        C: "efímeras — duraderas",
        D: "reiterativas — espontáneas",
        E: "eventuales — persistentes",
        Correct: "B"
    },
    {
        name: "2018iABD13",
        prompt: "2018iABD11-15",
        image: false,
        question: "El sentido contextual del término PUNTO es",
        A: "caso.",
        B: "noción.",
        C: "problema.",
        D: "objeción.",
        E: "hecho.",
        Correct: "D"
    },
    {
        name: "2018iABD14",
        prompt: "2018iABD11-15",
        image: false,
        question: "Resulta incompatible con el texto señalar que, al leer los apuntes personales de Faraday",
        A: "se desdibuja la idea de este como la de un mero experimentalista.",
        B: "habría una base para establecer que la ciencia es una actividad teórica.",
        C: "hallamos una clara ilustración del funcionamiento de la ciencia «normal».",
        D: "se erosiona la concepción de la ciencia como resolución de problemas.",
        E: "se cuestiona la perspectiva kuhniana sobre la historia de la ciencia.",
        Correct: "C"
    },
    {
        name: "2018iABD15",
        prompt: "2018iABD11-15",
        image: false,
        question: "¿Cuál de los siguientes enunciados expresa adecuadamente la conclusión del autor sobre el debate entre Popper y Kuhn?",
        A: "Finalmente, el caso de Faraday es un claro ejemplo de que Popper tiene razón sobre las revoluciones en la ciencia.",
        B: "En principio, la historia de la ciencia no puede ser empleada para formular argumentos sobre la estructura de la ciencia.",
        C: "Se necesita más indagación histórica para comprender la naturaleza de la ciencia y de las revoluciones científicas.",
        D: "Debido a sus investigaciones históricas, la idea de Kuhn está más cerca de la verdad que la concepción popperiana",
        E: "En ciencia, hay que dar más importancia a uno de los aspectos de la investigación: las hipótesis y los experimentos.",
        Correct: "C"
    },
    {
        name: "2018iABD16",
        prompt: false,
        image: false,
        question: "Aldo, Juan y Raúl tienen profesiones diferentes: ingeniero, físico y profesor, no necesariamente en ese orden. Cada uno tiene un hijo que ejerce una de esas profesiones, pero distinta a la de su padre. Además, cada hijo tiene diferente profesión a la de los otros hijos. Si el ingeniero es Aldo y el hijo de Juan es profesor, ¿qué profesiones tienen Juan y el hijo de Raúl, respectivamente?",
        A: "Profesor e ingeniero",
        B: "Profesor y físico",
        C: "Físico e ingeniero",
        D: "Físico y físico",
        E: "Físico y profesor",
        Correct: "C" 
    },
    {
        name: "2018iABD17",
        prompt: false,
        image: false,
        question: "Ana, Belén, Carla y Débora obtuvieron las calificaciones 13, 14, 15 y 16 en un examen, pero no necesariamente en ese orden. Se sabe que todas obtuvieron distintas calificaciones, que Ana no obtuvo el menor ni el mayor de estos puntajes, que Belén no obtuvo una calificación par, que la calificación de Ana no es menor que la de Belén y que la calificación de Débora es mayor que la de Ana y Belén, pero no es mayor que la de Carla. ¿Cuánto suman las calificaciones de Ana y Belén?",
        A: "28",
        B: "27",
        C: "29",
        D: "30",
        E: "31",
        Correct: "B"
    },
    {
        name: "2018iABD18",
        prompt: false,
        image: false,
        question: "En una caja hay 25 bolas blancas, 19 negras, 14 azules, 12 rojas y 11 amarillas. ¿Cuál es el menor número de bolas que se deben extraer al azar para tener la seguridad de haber extraído 15 bolas de un mismo color?",
        A: "66",
        B: "65",
        C: "52",
        D: "64",
        E: "67",
        Correct: "A" 
    },
    {
        name: "2018iABD19",
        prompt: false,
        image: false,
        question: "Una balanza de dos platillos se encuentra equilibrada. En uno de los platillos hay tres dados y una canica; en el otro platillo hay dos dados, dos canicas y un borrador que pesa 30 g. Los cinco dados tienen el mismo peso y las tres canicas también pesan lo mismo. Además, los nueve objetos pesan, juntos, medio kilo. ¿Cuántos gramos pesan todos los dados juntos?",
        A: "350 g",
        B: "160 g",
        C: "200 g",
        D: "400 g",
        E: "500 g",
        Correct: "A"
    },
    {
        name: "2018iABD20",
        prompt: false,
        image: false,
        question: "La figura mostrada representa un trozo de cartón formado por seis cuadrados congruentes. Al construir un cubo con dicho trozo doblándolo por las líneas punteadas",
        A: "IMAGE",
        B: "IMAGE",
        C: "IMAGE",
        D: "IMAGE",
        E: "IMAGE",
        Correct: "B"
    },
    {
        name: "2018iABD21",
        prompt: false,
        image: false,
        question: "Se dispone de una balanza de dos platillos y dos pesas, una de 250 g y otra de 500 g. Determine el menor número de pesadas que se debe realizar para repartir los 5 kg de arroz de una bolsa en otras dos bolsas, una con 2,625 kg y otra con 2,375 kg.",
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        Correct: "A" 
    },
    {
        name: "2018iABD22",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Un barco navegó durante cinco días. El reporte de navegación señala que el primer día navegó en la dirección este, el segundo día navegó 40,12 km en la dirección N45°E, el tercer día navegó 150 km en la dirección oeste y el cuarto día navegó 100 km en la dirección S30°E. Si el quinto día retornó al puerto de partida navegando hacia el norte a una velocidad de 15 km/h, ¿qué distancia recorrió el quinto día?",
        A: "60 km",
        B: "",
        C: "50 km",
        D: "",
        E: "",
        Correct: "B" 
    },
    {
        name: "2018iABD23",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: true,
        question: "La siguiente figura está formada por segmentos horizontales y verticales, y las medidas de los tramos están en centímetros. Si se empieza en el punto M, ¿cuál es la menor longitud que debe recorrer la punta de un lápiz, sin separarla del papel, para dibujar dicha figura?",
        A: "920 cm",
        B: "900 cm",
        C: "880 cm",
        D: "840 cm",
        E: "860 cm",
        Correct: "E"
    },
    {
        name: "2018iABD24",
        subject:"Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Los amigos Ricardo, Saúl, Teodoro, Ulises y Víctor viven en un edificio de cinco pisos, cada uno en un piso diferente. Ricardo y Teodoro siempre usan el ascensor cuando suben a visitar a sus amigos, y Seúl vive en un piso adyacente a los de Ulises y Víctor. ¿Quién vive en el cuarto piso?",
        A: "Saúl",
        B: "Víctor",
        C: "Ricardo",
        D: "Ulises",
        E: "Teodoro",
        Correct: "A" 
    },
    {
        name: "2018iABD25",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "¿Cuál es la cifra de unidades del resultado dela siguiente operación?<br>(3x5x7x9x...x101)^101+(2x4x6x8x10x...x98)^99",
        A: "2",
        B: "4",
        C: "3",
        D: "5",
        E: "1",
        Correct: "D"
    },
    {
        name: "2018iABD26",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Gisella le pregunta a Gabriela qué hora es y esta le responde: «Son más de las 4 de la tarde, pero aún no llegamos a las 5 de la tarde; además, dentro de 10 minutos faltará para las 5 de la tarde la cuarta parte del tiempo que ya transcurrió desde las 3 de la tarde hasta hace 25 minutos». ¿A qué hora se refiere Gabriela?",
        A: "16 h 33 min",
        B: "16 h 50 min",
        C: "16 h 25 min",
        D: "16 h 18 min",
        E: "16 h 38 min",
        Correct: "A"
    },
    {
        name: "2018iABD27",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Un cubo compacto de madera de 1 m de aristaes cortado totalmente y en forma exacta encubitos de 5 cm de arista. Todos los cubitos obtenidos son colocados sobre un plano horizontal en línea recta, uno a continuación de otro y unidos por una de sus caras, formando una fila. ¿Cuál es la longitud de dicha fila?",
        A: "440 m",
        B: "420 m",
        C: "400 m",
        D: "80 m",
        E: "390 m",
        Correct: "C"
    },
    {
        name: "2018iABD28",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: false,
        image: false,
        question: "Sobre los vértices consecutivos de un octágono regular, se colocan, respectivamente, fichas numeradas como se muestra en la figura. ¿Cuántas fichas deben cambiar de posición, como mínimo, para que el producto de los dos números que se encuentran en los extremos de las diagonales mayores sea el mismo?",
        A: "6",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        Correct: "D"
    },
    {
        name: "2018iABD29",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: "Cinco amigas vestidas del mismo modo son interrogadas por el agente de seguridad de un centro comercial, quien asegura haber visto a una de ellas romper el hilo de seguridad de uno de los relojes que están a la venta. Ellas respondieron lo siguiente: Ana: «Olga es quien lo rompió». Elisa: «Yo no lo hice». Irma: «Úrsula no lo hizo». Olga: «Ana miente». Úrsula: «Elisa dice la verdad».",
        image: false,
        question: "Si se sabe que solo dos de las amigas mienten, ¿quién rompió el hilo de seguridad del reloj?",
        A: "Irma",
        B: "Úrsula",
        C: "Elisa",
        D: "Ana",
        E: "Olga",
        Correct: "B"
    },
    {
        name: "2018iABD30",
        subject: "Mathematics",
        sub_subject: "Logic",
        prompt: "Los postes P, Q, R, S y T están ubicados en línea recta, en un mismo lado de una carretera, no necesariamente en ese orden, y las distancias entre ellos se muestran en el siguiente cuadro:",
        image: true,
        question: "¿Cuál es el orden de ubicación correcta deestos postes a lo largo de la carretera, a partirdel poste R?",
        A: "R - P - S - Q - T",
        B: "R - S - T - P - Q",
        C: "R - Q - S - P - T",
        D: "R - S - P - Q - T",
        E: "R - P - T - S - Q",
        Correct: "A"
    },
    {
        name: "2018iABD31",
        subject: "Mathematics",
        sub_subject: "Arithmetic",
        prompt: false,
        image: false,
        question: "La negación del enunciado «Si Inés está bien de salud, entonces ella sigue las indicaciones de su médico» es",
        A: "«Inés está bien de salud y no sigue las indicaciones de su médico».",
        B: "«Inés está bien de salud y sigue las indicaciones de su médico».",
        C: "«Inés no está bien de salud y no sigue las indicaciones de su médico».",
        D: "«Inés no está bien de salud y no sigue las indicaciones de su médico».",
        E: "«Inés sigue las indicaciones de su médico o está enferma».",
        Correct: "A"
    },  
    {
        name: "2018iABD32",
        subject: "Mathematics",
        sub_subject: "Arithmetic",
        prompt: false,
        image: false,
        question: "Si la diferencia de dos números positivos es 2 y la suma de sus cuadrados es 130, entonces la semidiferencia positiva de sus cubos es",
        A: "195",
        B: "185",
        C: "193",
        D: "173",
        E: "183",
        Correct: "C"
    },
    {
        name: "2018iABD33",
        subject: "Mathematics",
        sub_subject: "Arithmetic",
        prompt: false,
        image: false,
        question: "En un número N de tres cifras, la suma de ellas es 18 y la cifra de las unidades es el doble de la cifra de las decenas. La diferencia que se obtiene restando de N el número formado al invertir el orden de sus cifras es 297. Halle el producto de las cifras de N.",
        A: "192",
        B: "162",
        C: "234",
        D: "108",
        E: "236",
        Correct: "B"
    },
    {
        name: "2018iABD34",
        subject: "Mathematics",
        sub_subject: "Arithmetic",
        prompt: false,
        image: false,
        question: "El costo de alquiler de una máquina cortadora está dado por un costo fijo más un costo directamente proporcional con el tiempo del alquiler. Si 120 horas de alquiler tienen un costo total de 80 soles y por 240 horas, el costo total es de 140 soles. ¿Cuál es el costo total del alquiler por 400 horas?",
        A: "190 soles",
        B: "240 soles",
        C: "180 soles",
        D: "200 soles",
        E: "220 soles",
        Correct: "E"
    },
    {
        name: "2018iABD35",
        subject: "Mathematics",
        sub_subject: "Geometry",
        prompt: "Dos hermanos heredan un terreno que tiene la forma de un cuadrilátero ABCD, como se muestra en la figura. Para repartirse el terreno, ambos hermanos acuerdan dividirlo en dos partes triangulares y trazan una línea divisoria desde B hacia D, por lo que forman con los lados adyacentes a D un ángulo de 90° y otro ángulo de medida igual al del ángulo agudo que se opone a la línea divisoria.",
        image: false,
        question: "Dado que el hermano menor se quedará con la parte de mayor área, ¿qué área tiene la parte que le corresponderá al hermano mayor?",
        A: "10*3^0.5 m^2",
        B: "TODO",
        C: "TODO",
        D: "TODO",
        E: "TODO",
        Correct: "C"
    },
    {
        name: "2018iABD36",
        subject: "Mathematics",
        sub_subject: "Geometry",
        prompt: false,
        image: true,
        question: "En la figura, AM = MC, MN = 2AM y BN = BC. Halle x.",
        A: "30°",
        B: "60°",
        C: "45°",
        D: "36°",
        E: "72°",
        Correct: "B"
    },
    {
        name: "2018iABD37",
        subject: "Mathematics",
        sub_subject: "Geometry",
        prompt: false,
        image: true,
        question: "La gráfica muestra un parque que tiene forma rectangular. Si el perímetro de la región sombreada es 94 m, halle el área del parque.",
        A: "400 m^2",
        B: "420 m^2",
        C: "360 m^2",
        D: "480 m^2",
        E: "520 m^2",
        Correct: "D"
    },
    {
        name: "2018iABD38",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: "El número N de presas consumidas en un periodo de tiempo por cierta especie depredadora de una reserva ecológica está dado por<br>TODO<br>donde x es la densidad de presas, es decir, x es el número de presas por unidad de área.",
        image: false,
        question: "¿Cuál es la densidad de presas para un depredador de esta especie, si consume 20 presas en cada periodo de tiempo?",
        A: "45",
        B: "37",
        C: "52",
        D: "41",
        E: "39",
        Correct: "D" 
    },
    {
        name: "2018iABD39",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: false,
        image: false,
        question: "En un parque, usando una cuerda de 34 metros, un jardinero diseña un rectángulo cuya diagonal mide 13 metros. Si las longitudes de sus lados, en metros, son a y b, halle la diferencia positiva de los cuadrados de a y b.",
        A: "187",
        B: "105",
        C: "128",
        D: "255",
        E: "119",
        Correct: "E" 
    },
    {
        name: "2018iABD40",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: "La función f está definida para todos los números reales positivos y cumple<br><br>TODO",
        image: false,
        question: "Calcule f(5) ,",
        A: "-668",
        B: "368",
        C: "648",
        D: "-568",
        E: "-468",
        Correct: "E" 
    },
    {
        name: "2018iABD41",
        subject: "Mathematics",
        sub_subject: "Trigonometry",
        prompt: false,
        image: true,
        question: "El ángulo de elevación con que se observa la parte superior de un edificio es de 45°, como se muestra en la figura. Sobre el borde del edificio hay una antena, cuya parte superior se observa desde el mismo lugar, con un ángulo de elevación cuya tangente es 1,2. ¿Cuál es la longitud de la antena?",
        A: "12*2^(1/2 m)",
        B: "36 m",
        C: "18 m",
        D: "30 m",
        E: "24 m",
        Correct: "E" 
    },
    {
        name: "2018iABD42",
        subject: "Mathematics",
        sub_subject: "Trigonometry",
        prompt: false,
        image: false,
        question: "Al copiar de la pizarra la expresión sen40° – sen20°, un estudiante cometió un error y escribió cos40° – cos20o. Calcule la razón entre lo que estaba escrito en la pizarra y lo que copió el alumno.",
        A: "TODO",
        B: "TODO",
        C: "TODO",
        D: "TODO",
        E: "TODO",
        Correct: "D" 
    },
    {
        name: "2018iABD43",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "En el texto siguiente, indique las palabras que deben escribirse con mayúscula inicial por su condición: «Desde los inicios del imperio incaico hasta nuestros días, nuestro país representa una de las zonas con mayor diversidad lingüística en el continente. En la actualidad, se calcula que hay cerca de 47 lenguas indígenas. La mayoría de estas es hablada en la amazonía, mientras que un grupo reducido se emplea en los andes, como es el caso del quechua y del aimara».",
        A: "Andes – Quechua – Aimara",
        B: "Incaico – Andes – Continente",
        C: "Imperio – Incaico – Amazonía",
        D: "Imperio – Amazonía – Andes",
        E: "Amazonía – Quechua – Aimara",
        Correct: "D" 
    },
    {
        name: "2018iABD44",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Mientras que el diptongo es una secuencia de vocales que forma una misma sílaba, el hiato es una secuencia que desarrolla sílabas diferentes. En virtud de este criterio, en «La lingüística es una ciencia que se ocupa del estudio del lenguaje» aparecen",
        A: "cuatro diptongos y un hiato.",
        B: "cinco casos de diptongo.",
        C: "tres diptongos y dos hiatos.",
        D: "cinco diptongos y un hiato.",
        E: "seis casos de diptongo.",
        Correct: "B" 
    },
    {
        name: "2018iABD38",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "En la lengua española, hay secuencias de que apropiadas, según la gramática normativa. Luego de analizar las siguientes oraciones, determine la opción que contiene una secuencia de que incorrecta.",
        A: "Estoy convencido de que vamos a vencer.",
        B: "Me enteré de que habías llegado ayer.",
        C: "Confío de que estés diciendo la verdad.",
        D: "Existe la posibilidad de que suspendan las clases.",
        E: "No cabe duda de que en ese lugar se come bien.",
        Correct: "C" 
    },
    {
        name: "2018iABD38",
        subject: "Mathematics",
        sub_subject: "Algebra",
        prompt: false,
        image: false,
        question: "De acuerdo con la normativa general, las palabras monosilábicas no llevan tilde; sin embargo, debe emplearse la tilde diacrítica en ciertos monosílabos para precisar la función del vocablo dentro del mensaje. Teniendo en consideración lo anterior, en «No digas mas porque el que te vio si que nos dio su testimonio. ¡Y que testimonio!» faltan ______ tildes diacríticas.",
        A: "dos",
        B: "seis",
        C: "cuatro",
        D: "tres",
        E: "cinco",
        Correct: "D" 
    },
    {
        name: "2018iABD47",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "Luego de su primer día de clases, Anita entabla amistad con Manolo y Esteban. Al querer hacer un contraste entre ellos, y empleando una correcta puntuación, escribe la siguiente oración:",
        A: "Manolo es muy elocuente, Esteban demasiado parco.",
        B: "Manolo es muy elocuente; Esteban, demasiado parco.",
        C: "Manolo es muy elocuente: Esteban, demasiado parco.",
        D: "Manolo es muy elocuente; Esteban demasiado, parco.",
        E: "Manolo, es muy elocuente; Esteban, demasiado parco.",
        Correct: "B" 
    },
    {
        name: "2018iABD48",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "«Respetuosa, equilibrada y amorosa así debe ser una buena relación de pareja». En el texto anterior, los dos puntos (:) se deben colocar tras",
        A: "amorosa.",
        B: "equilibrada.",
        C: "así.",
        D: "ser.",
        E: "buena.",
        Correct: "A" 
    },
    {
        name: "2018iABD49",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "El sufijo -idad es una terminación de sustantivos abstractos como claridad, debilidad, habilidad. A partir de la explicación dada, se colige que tales sustantivos se derivan a partir de un",
        A: "adjetivo",
        B: "sustantivo",
        C: "adverbio",
        D: "pronombre",
        E: "verbo",
        Correct: "A" 
    },
    {
        name: "2018iABD50",
        subject: "Literature",
        sub_subject: "Language",
        prompt: false,
        image: false,
        question: "En ciertos contextos, se puede emplear un hiperónimo para hacer referencia a una palabra mencionada antes en el enunciado. ¿En cuál de las siguientes opciones, la referencia se fija mediante un hiperonimo resaltado en negritas?",
        A: "El hombre nacido en nuestra tierra piensa siempre en la naturaleza. Como <b>peruano</b>, considera la historia de los paisajes naturales.",
        B: "Mi tío siempre va a ese lugar donde conoció a la mujer de su vida. En efecto, esa hermosa <b>alameda</b> le trae gratos recuerdos.",
        C: "El biólogo de la universidad hace experimentos en el laboratorio. El <b>científico</b> espera hallar algo relevante para la teoría genética.",
        D: "Ese individuo suele ser cordial, respetuoso y algo solemne. Las damas mayores dirían de él que es un verdadero <b>caballero</b>.",
        E: "Se ha comprado un automóvil muy funcional y de aspecto elegante. Cuando lo veas, felicítalo por su nuevo <b>carro</b>.",
        Correct: "C" 
    },
    {
        name: "2018iABD51",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "«El padre de Héctor suplica a Aquiles». «La hermosa Calipso retiene a su bienamado Odiseo». «Yocasta, su mujer, reconoce la terrible verdad y se suicida en el palacio». Estos enunciados se refieren secuencialmente a las siguientes obras de la literatura griega:",
        A: "<i>Ilíada, Odisea y Edipo rey</i>",
        B: "<i>Orestíada, Ilíada y Edipo rey</i>",
        C: "<i>Edipo rey, Odisea e Ilíada</i>",
        D: "<i>Odisea, Ilíada y Edipo rey</i>",
        E: "<i>Edipo rey, Ilíada y Orestíada</i>",
        Correct: "A" 
    },
    {
        name: "2018iABD52",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: "El número N de presas consumidas en un periodo de tiempo por cierta especie depredadora de una reserva ecológica está dado por<br><br>TODO<br><br>donde x es la densidad de presas, es decir, x es el número de presas por unidad de área. ",
        image: false,
        question: "¿Qué figura literaria se percibe en la estructura general de la estrofa del poema «La niña de la lámpara azul», de José María Eguren, que a continuación se presenta?<br><i>En el pasadizo nebuloso<br>Cual mágico sueño de Estambul,<br>Su perfil presenta destellos<br>La niña de la lámpara azul.</i>",
        A: "Epíteto",
        B: "Hipérbole",
        C: "Hipérbaton",
        D: "Anáfora",
        E: "Metáfora",
        Correct: "E" 
    },
    {
        name: "2018iABD53",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "En la literatura peruana, surgen diversos movimientos o tendencias; uno de ellos rechaza el tono intimista y opta por una representación verosímil de la condición humana y de la sociedad. Nos referimos al",
        A: "arielismo",
        B: "realismo",
        C: "vanguardismo",
        D: "modernismo",
        E: "costumbrismo",
        Correct: "B" 
    },
    {
        name: "2018iABD54",
        subject: "Literature",
        sub_subject: "Literature",
        prompt: false,
        image: false,
        question: "¿Cuál de las siguientes alternativas se corresponde con uno de los rasgos de la narrativa de Julio Ramón Ribeyro?",
        A: "Describe las acciones de sus personajes como una búsqueda entusiasta del sentido vital.",
        B: "Manifiesta una actitud escéptica como efecto del examen del entorno social.",
        C: "Representa exclusivamente el aspecto marginal y degradado de la vida urbana.",
        D: "El universo representado es el de las regiones campesinas sin contacto con la urbe.",
        E: "El tema de la relación entre la violencia social y la formación individual es recurrente.",
        Correct: "B" 
    },
    {
        name: "2018iABD55",
        subject: "Social Sciences",
        sub_subject: "Pscyhology",
        prompt: false,
        image: false,
        question: "Pepito, un bebé de cinco meses de edad, vive con sus padres, pero ellos por razones laborales salen de casa desde las seis de la mañana hasta las nueve de la noche. Durante ese tiempo, el niño queda bajo el cuidado de la empleada del hogar. Cuando regresa, la madre quiere cargar a su hijo para acariciarlo, pero el niño llora y no quiere separarse de su cuidadora. El vínculo emocional que tiene el bebé con la empleada del hogar se denomina",
        A: "contacto.",
        B: "amor.",
        C: "apego.",
        D: "empatía.",
        E: "cariño.",
        Correct: "C" 
    },
        {
        name: "2018iABD56",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Esther y su esposo viajan en compañía de sus hijos en un vehículo de transporte público. Cuando ella paga los pasajes con un billete de veinte soles, el cobrador le dice que lo espere unos minutos porque no tiene cambio. De pronto, comienza a amenazarlo, diciéndole que se va a quejar a la empresa por tener trabajadores ineficientes, y lo insulta con fuertes palabras. En esta situación, Esther emplea un estilo de comunicación",
        A: "asertivo.",
        B: "pasivo",
        C: "agresivo",
        D: "pasivo agresivo",
        E: "eficaz asertivo",
        Correct: "C"
    },
    {
        name: "2018iABD57",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Manuel atraviesa una época de cambios en la que forma su propia identidad, así como su autonomía. En el aspecto emocional, tiene una eclosión de la capacidad afectiva para sentir y desarrollar emociones que se identifican con el amor. En el nivel cognitivo, presenta un pensamiento abstracto que le permite desarrollar su capacidad para relativizar. Todavía, en algunas ocasiones, tiene una forma de manifestar sus deseos mediante una emotividad exacerbada o con la espontaneidad propia de la infancia; pero, en otras ocasiones, ya empieza a actuar de una manera sutil en las interacciones, o con una cierta represión relativa de sus emociones. Se puede inferir que Manuel se encuentra en la etapa denominada",
        A: "segunda infancia.",
        B: "adultez tardía.",
        C: "adultez temprana.",
        D: "adolescencia.",
        E: "adultez intermedia.",
        Correct: "D"
    },
    {
        name: "2018iABD58",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Ricardo asiste a un ensayo musical y, al escuchar las primeras notas, reconoce que forman parte de una melodía en particular. Lo experimentado por Ricardo es un proceso denominado",
        A: "motivación",
        B: "sensación",
        C: "memoria",
        D: "atención",
        E: "percepción",
        Correct: "C"
    },    
    {
        name: "2018iABD59",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "¿Cuáles de los siguientes enunciados caracterizan el aprendizaje cognitivo?<br>I. Crea la capacidad para aprender y modificar el propio comportamiento.<br>II. Perfecciona las coordinaciones psicomotoras finas.<br>III. Desarrolla las habilidades para procesar lo aprendido, almacenarlo en la memoria de largo plazo y recuperarlo eficazmente.<br>IV. Perfecciona el pensamiento analítico y reflexivo.",
        A: "II y IV",
        B: "II, III y IV",
        C: "III y IV",
        D: "I, II y IV",
        E: "I, III y IV",
        Correct: "E"
    },    
    {
        name: "2018iABD60",
        subject: "Social Sciences",
        sub_subject: "Psychology",
        prompt: false,
        image: false,
        question: "Los estudios sobre la memoria han brindado, hasta la fecha, interesantes datos sobre los procesos de control en el recuerdo de la información. Determine el valor de verdad (V o F) de los siguientes enunciados referidos a la memoria.<br>I. La corteza cerebral frontal influye en la organización, búsqueda, selección y verificación del recuerdo de la información almacenada.<br>II. Un tipo de memoria es la de trabajo, definida como un sistema atencional operativo que procesa contenidos de la memoria de largo plazo.<br>III. La memoria es un sistema unitario que recepciona información del medio externo para almacenarla preferentemente en el lóbulo prefrontal.<br>IV. Conforme los años pasan, la memoria humana se perfecciona; por ello, los adultos mayores recuperan con mayor facilidad sus experiencias infantiles.",
        A: "VVFF",
        B: "VFVF",
        C: "FFVF",
        D: "FVFV",
        E: "FVFF",
        Correct: "B" 
    },
    {
        name: "2018iABD61",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Un candidato que postula a la presidencia de la república alega ser víctima de graves vulneraciones a sus derechos políticos de parte de las autoridades electorales, afectaciones que le impiden desarrollar su campaña electoral en igualdad de condiciones respecto de sus competidores. Ante tal situación, decide presentar una denuncia ante la Corte Interamericana de Derechos Humanos. ¿Es correcta la decisión del referido candidato?",
        A: "No, la denuncia debe presentarse ante la Organización de Estados Americanos (OEA).",
        B: "Sí, cualquiera tiene derecho a someter un caso a la decisión de la Corte.",
        C: "Sí, pero previamente la denuncia debe presentarse en la Defensoria del Pueblo.",
        D: "No, la denuncia debe presentarse en forma previa ante la Corte Suprema de Justicia.",
        E: "No, la denuncia se presenta ante la Comisión Interamericana de Derechos Humanos.",
        Correct: "E" 
    },
    {
        name: "2018iABD62",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Una madre de familia concurre a uno de los grandes centros comerciales de la ciudad con sus dos hijos, vestidos con trajes típicos de su lugar de origen (Puno). Deciden ver una película, compran las entradas y, si bien los dejan ingresar, son ubicados en la última fila de la sala de cine. Ante ello, la madre reclama airadamente, pues había asientos más cercanos a la pantalla que estaban desocupados. En este caso, se está violando el derecho",
        A: "al libre tránsito.",
        B: "a la no discriminación.",
        C: "al honor.",
        D: "a la intimidad.",
        E: "a la preferencia personal.",
        Correct: "B"
    },
    {
        name: "2018iABD63",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Tratando de cumplir con las promesas ofrecidas en su campaña electoral para fomentar el deporte, el alcalde distrital de Corocochay decide construir un estadio de gran capacidad. A estos efectos, favorece en la licitación correspondiente a una empresa constructora a cambio de una importante suma de dinero. La empresa comenzó la construcción del referido estadio, pero, luego de avanzada 30%, la abandonó. ¿Existe alguna responsabilidad del alcalde?",
        A: "No, porque se llevó a cabo una licitación de carácter público y la empresa constructora obtuvo la buena pro.",
        B: "No, porque el alcalde no ha tenido participación en la construcción, ya que ello es responsabilidad de la empresa constructora.",
        C: "No, porque la construcción de un estadio estaba en su programa de oferta electoral y él cumplió al poner en licitación dicha obra.",
        D: "Sí, hay responsabilidad por haber favorecido a la empresa constructora en la licitación a cambio de una importante suma de dinero.",
        E: "Sí, hay responsabilidad porque toda obra de construcción realizada con el dinero de los contribuyentes debe ser concluida.",
        Correct: "D"
    },
    {
        name: "2018iABD64",
        subject: "Social Sciences",
        sub_subject: "Civic Education",
        prompt: false,
        image: false,
        question: "Tres dirigentes awajún, entre 20 y 23 años de edad, han organizado una eficiente red de promoción y protección de los derechos económicos, sociales y culturales de su comunidad. Por este meritorio trabajo, un conjunto de organizaciones sociales pertenecientes a esa etnia asentada en las regiones de San Martín y Ucayalí decide postularlos como candidatos al Congreso de la República. Sin embargo, la postulación es observada por la autoridad electoral al no encontrarse los dirigentes inscritos en el registro electoral. Indique qué establece el sistema jurídico al respecto.",
        A: "Es suficiente que sus partidas de nacimiento los acrediten como mayores de 18 años.",
        B: "Para el ejercicio de la ciudadanía se requiere la inscripción electoral.",
        C: "Es suficiente con la acreditación del Consejo de su comunidad originaria.",
        D: "La postulación es factible con el respaldo del Gobierno regional respectivo.",
        E: "La postulación se dará si media la Adjuntía de Pueblos Indígenas de la Defensoría del Pueblo.",
        Correct: "B"
    },
    {
        name: "2018iABD65",
        subject: "Social Sciences",
        sub_subject: "History",
        prompt: false,
        image: false,
        question: "En relación con el poblamiento del continente americano, se han propuesto teorías que postulan diversas rutas por las que los seres humanos pudieron arribar a América. Aunque cada teoría se basa en sus propias evidencias, resulta claro que",
        A: "todas las propuestas son excluyentes entre sí.",
        B: "los primeros pobladores fueron europeos.",
        C: "estas rutas no se excluyen mutuamente.",
        D: "el estrecho de Bering es la única ruta válida.",
        E: "el poblamiento tuvo una sola ruta desde Asia.",
        Correct:  "C"
    },
    {
        name: "2018iABD66",
        subject: "Social Sciences",
        sub_subject: "History",
        prompt: false,
        image: false,
        question: "A inicios del siglo XVIII, la dinastía Habsburgo fue reemplazada por los Borbones en el gobierno de España y sus colonias. Las reformas fueron implementadas por la nueva dinastía principalmente con el fin de",
        A: "incrementar los ingresos de la Corona provenientes de sus colonias.",
        B: "combatir el avance del protestantismo en las colonias hispanoamericanas.",
        C: "defender a los indígenas de los abusos de las autoridades coloniales.",
        D: "dar mayor participación a los criollos y mestizos en el gobierno colonial.",
        E: "detener el avance de los ingleses en las colonias del Imperio español.",
        Correct: "A"
    },
    {
        name: "2018iABD67",
        subject: "Social Sciences",
        sub_subject: "History",
        prompt: false,
        image: false,
        question: "Identifique dos asuntos que correspondan al gobierno de Manuel Odría, conocido en la historia como el Ochenio (1948-1956).<br>I. Obtención del dominio marítimo del Perú<br>II. Persecución de apristas y comunistas<br>III. Alianza con la oligarquía agroexportadora<br>IV. Inversiónnorteamericanaencauchoypesca",
        A: "II y IV",
        B: "II y III",
        C: "I y III",
        D: "III y IV",
        E: "I y II",
        Correct: "B"
    },
    {
        name: "2018iABD68",
        subject: "Social Sciences",
        sub_subject: "History",
        prompt: false,
        image: false,
        question: "En el Neolítico, la domesticación de plantas y animales, el perfeccionamiento de los instrumentos de trabajo hechos de piedra y el inicio del Holoceno trajeron como consecuencia",
        A: "la organización de grupos humanos en bandas de cazadores especializados.",
        B: "la aparición de los primeros imperios orientales teocráticos y expansivos.",
        C: "la invención de la escritura alfabética y el papel en China, Fenicia y Egipto.",
        D: "el surgimiento de sitios con arquitectura temprana en el Creciente Fértil.",
        E: "el surgimiento de las ciudades estado griegas (polis) y su actividad comercial.",
        Correct: "D"
    },
    {
        name: "2018iABD69",
        subject: "Social Sciences",
        sub_subject: "History",
        prompt: false,
        image: false,
        question: "En el sistema feudal, las sociedades europeas medievales fueron concebidas como compuestas por tres grupos diferenciados: la nobleza, el clero y el campesinado. La nobleza guerrera cumplía la función de defender a los religiosos y campesinos de los ataques de pueblos extraños; el clero estaba encargado de orar por la salvación de las almas de los tres grupos; y, finalmente, los campesinos, con su trabajo, brindaban al clero y a la nobleza recursos para su manutención. Este tipo de organización social ha sido llamado sociedad",
        A: "estamental.",
        B: "semifeudal.",
        C: "absolutista.",
        D: "clasista.",
        E: "monárquica.",
        Correct: "A" 
    },
    {
        name: "2018iABD70",
        subject: "Social Sciences",
        sub_subject: "History",
        prompt: false,
        image: false,
        question: "Las trece colonias británicas en América del Norte declararon su independencia en el año 1776. Para los colonos, la independencia se justificaba en el derecho de rebelarse contra un gobierno británico que consideraban injusto, pues no protegía los derechos naturales e inalienables de los hombres. ¿Cuáles de las siguientes medidas británicas eran consideradas por los colonos como un atentado contra sus derechos?<br>I. La falta de representantes en el Parlamento<br>II. El cobro de altos impuestos sin consulta<br>III. La imposición obligatoria del anglicanismo<br>IV. La implementación del sistema esclavista",
        A: "II y III",
        B: "I y IV",
        C: "II y IV",
        D: "I y II",
        E: "III y IV",
        Correct: "D"
    },
    {
        name: "2018iABD71",
        subject: "Social Sciences",
        sub_subject: "Geography",
        prompt: false,
        image: false,
        question: "En la clase de Geografía, el profesor usa el mapa oficial del Perú para indicar que entre Lima y Trujillo existe una distancia de 565 km en el terreno. A partir de tal información, podemos determinar que la distancia que separa estos mismos puntos en el mapa es",
        A: "56,5 cm.",
        B: "38,0 cm.",
        C: "66,5 cm.",
        D: "46,0 cm.",
        E: "70,6 cm.",
        Correct: "A"
    },
    {
        name: "2018iABD72",
        subject: "Social Sciences",
        sub_subject: "Geography",
        prompt: false,
        image: false,
        question: "El litoral peruano, a orillas de la cuenca del Pacífico, integra el Cinturón de Fuego Circumpacífico, donde ocurren más del 80% de los sismos que afectan a nuestro planeta. En el borde del litoral llamado zona de subducción, la placa oceánica de Nasca se introduce bajo la placa continental Sudamericana a razón de 9 cm/año, lo que da lugar a procesos de formación de",
        A: "acantilados de paredes verticales.",
        B: "cordilleras continentales andinas.",
        C: "ríos de la vertiente del Pacífico.",
        D: "zonas hundidas debajo del nivel del mar.",
        E: "tablazos o terrazas marinas.",
        Correct: "B"
    },
    {
        name: "2018iABD73",
        subject: "Social Sciences",
        sub_subject: "Geography",
        prompt: false,
        image: false,
        question: "Las vicuñas y los pumas son animales silvestres que comparten el mismo hábitat o lugar de vida en los pajonales de la puna, en la alta cordillera andina; sin embargo, dentro de esta ecorregión cumplen diferentes papeles funcionales, dando lugar a lo que se conoce como",
        A: "bioma.",
        B: "nicho ecológico.",
        C: "medio ambiente.",
        D: "ecosistema",
        E: "biogénesis.",
        Correct: "B"
    },
    {
        name: "2018iABD74",
        subject: "Social Sciences",
        sub_subject: "Geography",
        prompt: false,
        image: false,
        question: "Los glaciares en el Perú se ubican por encima de los 5000 metros de altitud, representan el 71% de los glaciares tropicales y constituyen el principal origen de los ríos y lagunas en las diferentes vertientes hidrográficas del país. Sin embargo, sus enormes cornisas, que son salientes de varios cientos de metros, constituyen un peligro potencial de destrucción porque pueden desprenderse por gravedad y producir",
        A: "huaicos.",
        B: "aluviones.",
        C: "aludes.",
        D: "llocllas.",
        E: "avalanchas.",
        Correct: "C"
    },
    {
        name: "2018iABD75",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Claudia Mamani, una empresaria del sector turismo, paga cada año a la entidad recaudadora de impuestos por los siguientes conceptos: el cargo de gerente general, la propiedad inmobiliaria familiar y la renta generada por su empresa. En conjunto, los impuestos pagados son",
        A: "temporales.",
        B: "indirectos.",
        C: "intermedios.",
        D: "directos.",
        E: "de emergencia.",
        Correct: "D"
    },
    {
        name: "2018iABD76",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Cada fin de semana, Patty elabora su presupuesto de gasto, considerando el sueldo mensual recibido. La segunda semana de setiembre ella gastó dinero por lo siguiente: zapatos, corte de cabello, jabón, consulta médica, pan y leche. Así, los bienes que ella adquirió son",
        A: "tangibles e intangibles por igual.",
        B: "mayormente intangibles.",
        C: "mayormente tangibles.",
        D: "solamente tangibles.",
        E: "solamente intangibles.",
        Correct: "C"
    },
    {
        name: "2018iABD77",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Patricia Pérez labora en el sector público desde el 2013 y dedica su sueldo mensual recibido a cubrir su canasta de consumo. En enero de 2017, ella consigue un puesto de trabajo del sector privado, y aumenta en 60% su ingreso mensual respecto de su anterior remuneración. Esto implica que, como ella aumenta sus ingresos, entonces disminuirá",
        A: "el consumo de bienes de primera necesidad.",
        B: "el factor de su ingreso que gasta en bienes suntuarios.",
        C: "la proporción de su ingreso gastado en alimentos.",
        D: "la adquisición de bienes suntuarios o de lujo.",
        E: "el impuesto a la renta por su trabajo.",
        Correct: "C"
    },
    {
        name: "2018iABD78",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "El nivel del producto bruto interno (PBI) permite calificar una situación de crecimiento o recesión de una economía. Determine un rasgo económico contundente con el PBI en recesión.",
        A: "Descenso del sueldo promedio del empleado",
        B: "Incremento en el nivel promedio de producción",
        C: "Aumento del sueldo promedio del empleado",
        D: "Incremento en el nivel promedio del inventario",
        E: "Variabilidad del sueldo promedio del empleado",
        Correct: "A"
    },
    {
        name: "2018iABD79",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Desde hace dos años, el presidente de un país comunica a su nación las bondades del proteccionismo en el comercio internacional. Si es así, ¿cuál de las siguientes medidas económicas corrobora la prédica presidencial?",
        A: "Establecer acuerdos internacionales sobre comercio exterior",
        B: "Desarrollar una política exportadora mínima con los países",
        C: "Prohibir la exportación de alimentos y medicinas básicas",
        D: "Favorecer la importación de medicinas y alimentos esenciales",
        E: "Mantener altos derechos aduaneros a productos extranjeros",
        Correct: "E"
    },
    {
        name: "2018iABD80",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "La Oficina de Inversión Pública del Ministerio de Economía y Finanzas atiende al público de lunes a viernes y, por función, aprueba, según los parámetros técnicos, los proyectos remitidos por las entidades del sector público del país. Carmen, en cambio, trabaja todos los días de la semana y administra su cebichería, ubicada en Villa María del Triunfo. Rosa es gerente general de una de las cadenas de venta al menudeo más importantes de Lima. Ella, como Carmen, trabaja todos los días, ya sea en su oficina o supervisando los locales ubicados en los siguientes distritos: San Isidro, San Borja y La Molina.<br><br>Si se considera a los agentes económicos descritos, el rol de cada uno de ellos en la economía es, según el caso presentado, el siguiente:",
        A: "empresa, Estado y familia.",
        B: "Estado, familia y empresa.",
        C: "empresa, familia y Estado.",
        D: "familia, Estado y empresa.",
        E: "Estado, empresa y familia.",
        Correct: "E"
    },
    {
        name: "2018iABD81",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "En el Perú, entre los años 2008 y 2009, cinco cadenas de farmacias intercambiaron información para elevar el nivel de precio de algunas medicinas, según una investigación del INDECOPI. El acuerdo entre ellas se tradujo, por un lado, en un aumento de sus ganancias y, por otro lado, en un perjuicio monetario del cliente. Según su nivel de participación en la mala práctica económica, cada una de las distribuidoras fue multada con un monto determinado, En otras palabras, en este caso específico, INDECOPI penalizó",
        A: "el cártel.",
        B: "el monopolio.",
        C: "el monopsonio.",
        D: "el duopolio.",
        E: "la competencia.",
        Correct: "A"
    },
    {
        name: "2018iABD82",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "A propósito de la huelga magisterial de 2017, los estudiantes de una institución educativa pública de la región Puno debaten en clase sobre los derechos laborales del profesor. Al respecto, el estudiante Pedro Catari afirma correctamente que ___________ es el organismo rector del asunto en el planeta.",
        A: "la OMC",
        B: "la ONU",
        C: "el FMI",
        D: "la OIT",
        E: "el PNUD",
        Correct: "D"
    },
    {
        name: "2018iABD83",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Debido a las características geográficas del país, una provincia de la región Huancavelica tiene abundancia de un recurso natural, el agua. Al respecto, el alcalde provincial conoce la demanda por el líquido vital de otras regiones vecinas, las ubicadas en la costa. Por ello, él piensa generar un flujo de ingreso para la provincia sobre la base de una modificación de la política tributaria del país. Para lograr su objetivo, el funcionario debe saber que la política tributaria es diseñada y propuesta por el",
        A: "Banco Central de Reserva.",
        B: "Congreso de la República.",
        C: "Banco de la Nación.",
        D: "presidente de la República.",
        E: "Ministerio de Economía y Finanzas.",
        Correct: "E"
    },
    {
        name: "2018iABD84",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Perú es uno de los países exportadores más importantes de palta en el mundo. En este marco, entre las principales regiones productoras, La Libertad destina toda su producción a la exportación y Lima, aproximadamente, la mitad; en tanto que Junín y Áncash venden su producción total en el mercado peruano. En consecuencia, ¿qué región o regiones posee(n) una ventaja comparativa internacional en la producción de palta?",
        A: "Áncash y Junín",
        B: "Solamente La Libertad",
        C: "La Libertad y Lima",
        D: "Lima y Áncash",
        E: "Los cuatro departamentos",
        Correct: "C"
    },
    {
        name: "2018iABD85",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "El hombre es un animal raro. Biológicamente, el ser humano no tendría derecho a la existencia. A diferencia de otras especies animales, carece de armas naturales para sobrevivir, como garras o alas. Pero el hombre no solo parece tener más inteligencia que los otros animales, sino también otra especie de inteligencia, que le ha permitido dominar su entorno y el planeta entero.<br>Bochenski, J,M. (1971). Introducción al pensamiento filosófico.<br>Podemos deducir que Bochenski distingue al hombre de los demás animales debido a que lo considera, principalmente, un ser",
        A: "natural.",
        B: "carencial.",
        C: "libre.",
        D: "racional.",
        E: "metafísico.",
        Correct: "D"
    },
    {
        name: "2018iABD86",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "Uno de los aspectos más conocidos de la gnoseología de David Hume consistió en una crítica al concepto de inducción y su justificación epistémica. De acuerdo con ese enfoque, una de las conclusiones a la que llega es que",
        A: "podemos observar la conexión necesaria entre causa y efecto.",
        B: "la creencia en la causalidad solo es resultado de la costumbre.",
        C: "nuestra experiencia demuestra la uniformidad de la naturaleza.",
        D: "tenemos la capacidad de demostrar la evidencia de la causalidad.",
        E: "los filósofos escépticos han demostrado la inutilidad de la razón.",
        Correct: "B"
    },    
    {
        name: "2018iABD87",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "Al postular las vías para demostrar la existencia de Dios, Tomás de Aquino partió del hecho de que todas las cosas se mueven y de que una cosa se mueve porque recibió un impulso. Concluyó que debe de haber algo que sea el origen del impulso de todas las cosas, sin que ello sea a su vez impulsado por ninguna otra. Este impulso originario lo identificó con el concepto aristotélico de",
        A: "providencia divina.",
        B: "logos universal.",
        C: "motor inmóvil.",
        D: "causal material.",
        E: "espíritu absoluto.",
        Correct: "C"
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Philosophy",
        prompt: false,
        image: false,
        question: "La primera de las reglas metodológicas que Newton propone a la investigación exige que no se admitan más «causas» que las «verdaderas», es decir, aquellas que se manifiestan y se acreditan en la explicación de los fenómenos. Ahora bien, la existencia del espacio absoluto y del tiempo absoluto no constituyen una «verdadera causa» en el sentido que aquí se establece, pues ningún fenómeno natural podría darnos noticia segura de ellos; ninguna experiencia podría justificarlos o refutarlos. En esta contradicción reside la crisis de la teoría newtoniana de la experiencia y de allí surgen las principales objeciones de sus adversarios.<br>Cassirer, Ernst (1986). El problema del conocimiento.<br>A partir de la lectura, se infiere que el método de investigación newtoniano se contradecía, pues",
        A: "resulta demasiado difícil encontrar causas verdaderas como puntos de partida.",
        B: "era imposible justificar empíricamente el espacio y el tiempo absolutos.",
        C: "el concepto de experiencia empleado por Newton ya había sido cuestionado",
        D: "la tradición empirista propia del pensamiento británico era insostenible.",
        E: "la crítica racionalista exigía pruebas que desafiaban la física de Newton.",
        Correct: "B"
    },
    {
        name: "2018iABD89",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: true,
        question: "Un astronauta aluniza de emergencia sobre la superficie de una de las cinco lunas mayores del sistema joviano. Decide enviar el valor de la aceleración de la gravedad local de la luna con la esperanza de que entiendan el mensaje y lo ubiquen. Para calcular el valor de g, construye un péndulo con una cuerda (inextensible) de 1,8 m de longitud con periodo de 6,28 s para una pequeña amplitud de oscilación. Conociendo que el valor aproximado del periodo depende proporcionalmente del cociente entre la longitud del péndulo y el valor local de la aceleración de la gravedad, determine dónde se encuentra el astronauta.",
        A: "Europa",
        B: "Ío",
        C: "Ganímedes",
        D: "Amaltea",
        E: "Calisto",
        Correct: "B"
    },
    {
        name: "2018iABD90",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: false,
        question: "La resistividad y la conductividad de un material obedecen a una relación inversa con constante de proporcionalidad igual a la unidad. En la figura se muestra un resistor de 2 cm de longitud con un área de sección transversal de 6 cm2. La resistividad del material del cual está hecho el resistor es de 4, 6 × 10–1 Ω. m . Si la diferencia de potencial entre los extremos es de 2 V, determine la corriente que fluye por el resistor.",
        A: "2,76 A",
        B: "0,32 A",
        C: "0,13 A",
        D: "0,76 A",
        E: "2,6 A",
        Correct: "C"
    },
    {
        name: "2018iABD91",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: false,
        question: "Un tsunami se diferencia de una ola normal porque es generado por un movimiento del piso oceánico y no por la acción del viento. Consecuentemente, toda el agua se mueve, no solo la capa superficial. Un tsunami típico tiene una longitud de onda de 200 km y un periodo entre 15 y 20 minutos. Sobre la base de la información dada, el rango de la rapidez con que se mueve un tsunami es de",
        A: "600 km/h a 800 km/h.",
        B: "100 km/h a 133 km/h.",
        C: "10 km/h a 13 km/h.",
        D: "3000 km/h a 4000 km/h.",
        E: "200 km/h a 1200 km/h.",
        Correct: "A"
    },
    {
        name: "2018iABD92",
        subject: "Sciences",
        sub_subject: "Physics",
        prompt: false,
        image: false,
        question: "Cuando el astronauta Neil Armstrong descendió del módulo y pisó suelo lunar, el 20 de julio de 1969, su masa total, incluyendo su cuerpo, traje espacial y equipamiento de sobrevivencia era de aproximadamente 300 kg. El campo gravitacional de la Luna es, aproximadamente, 1/6 del campo gravitacional de la Tierra. Si la aceleración de la gravedad terrestre es aproximadamente 10,0 m/s2, podemos afirmar que",
        A: "en la Tierra, la masa total de Armstrong es de 50,0 kg y su peso es 3000 N.",
        B: "en la Tierra, la masa total de Armstrong es de 300 kg y su peso es 500 N.",
        C: "en la Luna, la masa total de Armstrong es de 300 kg y su peso es 500 N.",
        D: "en la Luna, la masa total de Armstrong es de 50,0 kg y su peso es 3000 N.",
        E: "el peso de Armstrong en la Luna y en la Tierra son exactamente Iguales.",
        Correct: "C"
    },
    {
        name: "2018iABD93",
        subject: "Sciences",
        sub_subject: "Chemistry",
        prompt: false,
        image: false,
        question: "El etanodiol, conocido como glicol de etileno, es poco volátil temperatura ambiente y se utiliza como anticongelante en los circuitos de refrigeración de motores de combustión interna. Es también ingrediente en líquidos para revelar fotografías, fluidos para frenos, etc. Respecto de la molécula de este compuesto, se puede afirmar que",
        A: "cumple con la regla del octeto.",
        B: "es un diol primario.",
        C: "tiene un –OH secundario.",
        D: "su fórmula global es C2H4O2 SUBSCRIPT NEEDED",
        E: "es ligeramente soluble en agua.",
        Correct: "B"
    },
    {
        name: "2018iABD94",
        subject: "Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Para procesar minerales de oro, se aplica el proceso de gravimetría-amalgamación a los minerales de alta ley en oro y el proceso de cianuración a los minerales de baja ley en oro. Si la reacción correspondiente a la cianuración es<br>4Au(s) + 8NaCN(ac) + O2(g) + 2H2O(l) -> 4NaAu(CN)2(ac) + 4NaOH(ac) determine el valor de verdad (V o F) respecto de lo que ocurre en esta reacción.<br>I. Se obtiene una solución básica.<br>II. El oro se oxida y el oxígeno se reduce.<br>III. La carga del ion cianuro es +1.",
        A: "VVV",
        B: "VFF",
        C: "FFF",
        D: "VFV",
        E: "VVF",
        Correct: "E"
    },
    {
        name: "2018iABD95",
        subject: "Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Si se sabe que el hidrógeno tiene tres isótopos (protio, deuterío y tritio), ¿cuántos valores diferentes tendrían las masas molares de las posibles moléculas que forma el hidrógeno entre sus isótopos?",
        A: "4",
        B: "3",
        C: "5",
        D: "2",
        E: "6",
        Correct: "C"
    },
    {
        name: "2018iABD96",
        subject: "Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: "Determine el valor de verdad (V o F) respecto del número de oxidación del oxígeno.<br>I. Es +2 al formar compuesto con el flúor.<br>II. Es –1 cuando forma el peróxido de hidrógeno.<br>III. Al formar los hidróxidos, su valor es –2.",
        A: "VVV",
        B: "VFV",
        C: "FFV",
        D: "FVF",
        E: "VVF",
        Correct: "A"
    },
    {
        name: "2018iABD97",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "Los vasos del floema están formados por células vivas, pero sin núcleo, y se encargan del transporte de la savia elaborada desde las hojas hacia el resto de la planta. Esta savia elaborada está formada por productos de la",
        A: "transpiración.",
        B: "respiración.",
        C: "evaporación.",
        D: "fotosíntesis.",
        E: "fotorrespiración.",
        Correct: "D"
    },
    {
        name: "2018iABD98",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "Las proteínas que van a formar los ribosomas ingresan al núcleo a través",
        A: "del retículo endoplasmático rugoso.",
        B: "de los centrosomas y microtúbulos.",
        C: "de vesículas del complejo de Golgi.",
        D: "de los poros en la envoltura nuclear.",
        E: "de proteínas transportadoras.",
        Correct: "D"
    },
    {
        name: "2018iABD99",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "Determine el valor de verdad (V o F) de los siguientes enunciados relativos a la clasificación de los organismos vivos.<br>I. El Dominio es una categoría superior al Reino.<br>II. El taxón Familia incluye varias Clases.<br>III. Los cinco reinos son Archae, Monera, Bacteria, Eukarya y Plantae.<br>IV. El taxón Clase incluye varios órdenes.",
        A: "VVFF",
        B: "FVFV",
        C: "VFVF",
        D: "FVVF",
        E: "VFFV",
        Correct: "E"
    },
    {
        name: "2018iABD100",
        subject: "Sciences",
        sub_subject: "Biology",
        prompt: false,
        image: false,
        question: "Existen varias evidencias en relación con la teoría de la evolución propuesta por Charles Darwin. La ciencia que utiliza fundamentos de filogenia para reconstruir la historia natural de la tierra y de los taxa se denomina",
        A: "bioquímica comparada.",
        B: "paleontología.",
        C: "embriología.",
        D: "biogeografía.",
        E: "citogenética comparada.",
        Correct: "D"
    }/*,
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    },
    {
        name: "2018iABD88",
        subject: "Social Sciences",
        sub_subject: "Economy",
        prompt: false,
        image: false,
        question: ,
        A: ,
        B: ,
        C: ,
        D: ,
        E: ,
        Correct: 
    }*/
    /*NO need for coma in the last question*/
];