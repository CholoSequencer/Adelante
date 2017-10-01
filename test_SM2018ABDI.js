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

        if (chosen[i] ==    questions[pos].Correct) {
            score++;
        }
    }
    
    //document.write("Hola");
    if (pos == test.length) {
        document.write(score + "<br>");
        document.write(qNum + "<br>");
        document.write(numOfQs);
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
            qNum.push(1)
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
    if (!(questions[num].prompt.includes("-"))) {
        text += "<p>" + questions[num].prompt + "</p>";
    }
    text += "<p>" + questions[num].question + "</p>";
    text += "<input type='radio' name=" + choices + " value='A'>" + questions[num].A + "<br>";
    text += "<input type='radio' name=" + choices + " value='B'>" + questions[num].B + "<br>";
    text += "<input type='radio' name=" + choices + " value='C'>" + questions[num].C + "<br>";
    text += "<input type='radio' name=" + choices + " value='D'>" + questions[num].D + "<br>";
    text += "<input type='radio' name=" + choices + " value='E'>" + questions[num].E + "<br>";
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
        name: "2018iADF1-5",
        prompt: "Este año, la educación superior entra a una nueva etapa, pues la oferta está dejando de dominar, y estudiantes y padres tienen mayor capacidad de decisión. Eso es bueno para todos, excepto para las instituciones que no se preocuparon por la calidad de su producto. Veamos.<br>La, primera etapa de la educación superior en América Latina, que llamaremos de demanda insatisfecha, duró desde la fundación de las primeras universidades en el siglo XVI hasta hace unos años. Allí, las pocas instituciones existentes no se preocupaban en atraer alumnos, porque ingresar a ellas era «una cosa de locos». La fuerza de esas instituciones declinó hace unos 20 años, con la explosión de la oferta, etapa en que se liberalizó el sector y aparecieron decenas de nuevas instituciones de todo tipo. Allí surgió una nueva locura, pues todas las universidades, pequeñas o grandes, precarias o bien financiadas, y tanto las “fáciles” como las que cuidaban la calidad, crecieron explosivamente. Pero hoy empieza a pasar esa locura y aparece una etapa de empoderamiento de la demanda, donde la oferta se acerca a lo demandado y los estudiantes pueden escoger a qué institución ingresar. Pero más importante aún, ya se puede ver si la inversión que hicieron las primeras familias dio los frutos esperados; es decir, mejorar la vida de sus egresados. Hoy los padres ya saben si el título que obtuvieron sus hijos o los hijos de sus conocidos, en tal o cual institución, les sirvió para progresar o si es un cartón que cuelgan en un taxi.<br>En esta nueva etapa se inicia entonces una competencia, mayor entre instituciones, pues empiezan a ser escogidas, o rechazadas, por la calidad de sus profesores, la utilidad de sus programas, la pertinencia de su investigación o sus facilidades de infraestructura. Y así, mientras las que buscaron ganancias inmediatas y no se preocuparon por la calidad de su trabajo empiezan a perder alumnos, las buenas universidades, sin importar si son privadas o públicas, con o sin fines de lucro, ven un ligero crecimiento. Hoy ya se puede aplicar la esencia del marketing, que dice que in a competitive market, the future of an enterprise is determined by how many customers remain and are able to recommend it to others, but not by how many customers it has. ¿Eso significa que desaparecerán las malas universidades? No, pero les será más dificil ser rentables, y se favorecerán las buenas y preparadas. Y por cierto, ahora que entrar a la universidad ya no es cosa de locos, será más fácil para los entes rectores controlar la calidad de la educación brindada, pues tendrán la colaboración de padres y estudiantes, y de las reglas del mercado",
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
        name: "2018iADF2",
        prompt:"2018iADF1-5",
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
        name: "2018iADF3",
        prompt: "2018iADF1-5" ,
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
        name: "2018iADF4",
        prompt: "2018iADF1-5",
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
        name: "2018iADF5",
        prompt: "2018iADF1-5",
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
        name: "2018iADF6-10",
        prompt: "El Centro de Estudios de Problemas Económicos y Sociales de la Juventud (CEPESJU) dio a conocer una preocupante realidad: el embarazo en adolescentes continúa en aumento. Según la Encuesta Demográfica y de Salud Familiar (ENDES) del año 2014 realizado por el INEI, el 14,6 % de mujeres entre 15 y 19 años están embarazadas o han tenido hijos, lo que representa un aumento en comparación con la misma encuesta del año anterior, en la que la cifra llegó a 13,9 %. Es decir, que en nuestro país, de cada 100 adolescentes, 14 se encuentran embarazadas o han tenido un hijo. Algo preocupante si se le añade que el 59 % de estos embarazos son no deseados o no planificados. En Lima, el aumento es notorio si se compara con la encuesta del año 1991/92, cuando el porcentaje fue de 4,4 % mientras que en el 2013 llegó a 10,6 %. Este incremento tiene una clara relación con la poca o nula información sobre métodos anticonceptivos. ENDES también compara la variable educación con un resultado llamativo aunque ya conocido: el 34,1 % de las mujeres con solo educación primaria, en el rango de edad de 15 a 19 años, ya son madres o se encuentran en estado, lo que contrasta con el 14,2 % de mujeres que llegaron a la secundaria y el 6,4 % a educación superior. Por último, el estudio de ENDES señala que el porcentaje de adolescentes entre 15 y 19 años sexualmente activas, pero que no tienen una pareja estable y que usan métodos anticonceptivos modernos, es de 62,6 %, lo que representa una ligera disminución con el 63,7 % del año pasado; por su parte, las adolescentes con pareja o conviviente que utilizan estos métodos pasó de 46,9 % a 42,9 %.",
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
        name: "2018iADF7",
        prompt: "2018iADF6-10" ,
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
        name: "2018iADF8",
        prompt: "2018iADF6-10",
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
        name: "2018iADF9",
        prompt: "2018iADF6-10",
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
        name: "2018iADF10",
        prompt: "2018iADF6-10",
        image: false,
        question: "Según los estudios referidos, ¿cuáles de los siguientes enunciados son medidas adecuadas para reducir los embarazos adolescentes?<br>I. Brindar información sobre métodos anticonceptivos <br>II. Comprar métodos anticonceptivos modernos<br>III. Elevar el nivel educativo de las mujeres adolescentes <br>IV. Promover la sexualidad activa después de los 19 años",
        A: "I y III",
        B: "I y II",
        C: "III y IV",
        D: "I y IV",
        E: "II y IV",
        Correct: "A"
    }
    /*NO need for coma in the last question*/
];