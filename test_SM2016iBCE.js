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

var questions =  [
	{
		name: "SM2016iBCE1-2",
		subject: "VA",
		sub_subject: "Series",
		prompt: "Sobre la base de la relación existente entre los vocablos del enunciado, señale el término que continúa coherentemente la serie",
		image: false,
		question: "Congoja, aflicción, angustia,",
		A: "enfado",
		B: "espasmo",
		C: "temor",
		D: "inquietud",
		E: "tribulación",
		Correct: "E"
	},
	{
		name: "SM2016iBCE2",
		subject: "VA",
		sub_subject: "Series",
		prompt: "SM2016iBCE1-2",
		image: false,
		question: "Inconsistencia, discordancia, contradicción,",
		A: "incoherencia",
		B: "hesitación",
		C: "falencia",
		D: "ambigüedad",
		E: "conflagración",
		Correct: "A"
	},
	{
		name: "SM2016iBCE3-5",
		subject: "VA",
		sub_subject: "Sentence Elimination",
		prompt: "Lea atentamente cada conjunto oracional y determine el enunciado que debe eliminarse por no corresponder al tema o por ser de índole tangencial",
		image: false,
		question: "(I) El 4 de noviembre de 1780, don José Gabriel Túpac Amaru apresó a don Antonio de Arriaga, corregidor de Tinta. (II) Túpac Amaru obligó al corregidor a pedir armas y dinero para que él y sus seguidores estuvieran bien apertrechados. (III) Túpac Amaru sometió al corregidor Antonio de Arriaga a un juicio público y luego ordenó que lo ahorcaran. (IV) Por línea materna, José Gabriel Túpac Amaru descendía del último inca del siglo XVI, por lo que gozaba de reconocimiento entre los indígenas. (V) Túpac Amaru y sus tropas marcharon hacia el norte, bajando por el valle de Vilcanota y, en el camino, saquearon el obraje de Pumacanchis",
		A: "III",
		B: "II",
		C: "IV",
		D: "V",
		E: "I",
		Correct: "C"
	},
	{
		name: "SM2016iBCE4",
		subject: "VA",
		sub_subject: "Sentence Elimination",
		prompt: "SM2016iBCE3-5",
		image: false,
		question: "(I) Las orquídeas suelen adaptarse a todo tipo de clima sin dificultad, aunque se las encuentra en entornos cálidos. (II) Para que florezcan en mayor cantidad, las orquídeas necesitan amplitud de temperatura durante el día y la noche. (III) Las orquídeas requieren un ambiente bien ventilado, de esta forma pueden refrescar al bajar la temperatura, además de renovar el oxígeno y prevenir el posible ataque de los hongos y bacterias al disminuir la humedad. (IV) Las orquídeas soportan mejor la falta de agua que el riego abundante; por eso, en caso de duda, es mejor regarlas poco. (V) En los viveros de la ciudad, se vende abonos especiales para orquídeas y para plantas de interiores",
		A: "II",
		B: "III",
		C: "IV",
		D: "V",
		E: "I",
		Correct: "D"
	},
	{
		name: "SM2016iBCE5",
		subject: "VA",
		sub_subject: "Sentence Elimination",
		prompt: "SM2016iBCE3-5",
		image: false,
		question: "(I) Las relaciones sociales de las mujeres y los hombres andinos resaltaban el género como el armazón alrededor del cual organizaban la vida. (II) Cadenas de mujeres paralelas a cadenas de hombres constituían los canales del parentesco a lo largo de los cuales fluían los derechos del uso de los recursos comunales. (III) Las mujeres y los hombres actuaban e interpretaban el mundo que les rodeaba como si este estuviera dividido en dos esferas genéricas interdependientes. (IV) Las mujeres y hombres de los Andes conceptualizaban el funcionamiento de la sociedad en términos de relaciones complejas entre sujetos agrupados en dominios sexualmente diferenciados. (V) En los pueblos andinos, los cielos estaban poblados con deidades que tomaban un aspecto masculino cuando se contraponían a las imágenes femeninas de la regeneración terrestre",
		A: "IV",
		B: "V",
		C: "I",
		D: "III",
		E: "II",
		Correct: "B"
	},
	{
		name: "SM2016iBCE6-10",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: '<b>Texto 1</b><br>Nuevos riesgos del exterior propiciaron que se reduzca la expectativa de crecimiento del producto bruto interno (PBI) nacional. Entre ellos, un mayor deterioro en el desempeño económico de Brasil así como el deterioro de las expectativas de inversión y consumo de los agentes económicos en Latinoamérica, señaló el ministro de Economía, Alonso Segura. Recordó que la devaluación de la moneda china y la significativa reducción de su producción, a lo que se suma la baja del precio de los productos de exportación (principalmente cobre, oro y petróleo), considerada la más severa y persistente de los últimos 65 años, son otros factores que ya se tenían en cuenta. <br> Sin embargo, el ministro dijo que para el próximo año se espera una aceleración del crecimiento del PBI, como consecuencia de una mayor producción minera y un mayor impulso a la inversión pública, lo que le permitirá al Perú seguir liderando el crecimiento en América Latina. <br>Durante su presentación en la Comisión de Presupuesto del Congreso, el ministro advirtió que la mayor tarea del Gobierno es enfrentar las imprevisibles consecuencias del fenómeno El Niño, por tal motivo se ha destinado S/. 3000 millones. <br>Indicó que el crecimiento del PBI 2015 <b>se ha revisado</b> de 4,2% a 3,0%, para lo cual se ha considerado, además, la baja inversión pública, principalmente en los gobiernos regionales (–31,5%) y gobiernos locales (–32,3%). <br>Por el contrario, para el 2016 se espera que la minería contribuya con 0,8 puntos porcentuales al crecimiento del PBI, con la producción estimada de los proyectos mineros de Las Bambas (Apurímac), Toromocho (Junín) y Constancia (Cusco), y la ampliación de los yacimientos de Cerro Verde (Arequipa) y Antamina (Áncash). En tanto que la inversión pública aportaría 0,8 puntos porcentuales, es decir, 0,7 más que en el presente año. <br><font size="2">La República, 5 de setiembre de 2015 (Adaptado)</font>',
		image: false,
		question: "En el texto, el verbo REVISAR se usa como",
		A: "consideración.",
		B: "objeción.",
		C: "reajuste.",
		D: "observación.",
		E: "repaso.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE7",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE6-10",
		image: false,
		question: "La finalidad central del texto es",
		A: "dar cuenta del deterioro de la economía brasileña y su impacto.",
		B: "explicar las razones por las cuales se recalcula el PBI nacional.",
		C: "demostrar por qué los factores externos determinan nuestra economía.",
		D: "comparar el desempeño de las economías china y brasileña con la peruana.",
		E: "explicitar la relevancia de los factores externos en la economía.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE8",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE6-10",
		image: false,
		question: "Resulta incompatible con lo mostrado en el gráfico comparativo de la evolución de los PBI de Perú China, pretender que",
		A: "ambos países alcanzan en el 2007 los picos de sus correspondientes PBI.",
		B: "a lo largo de todo un lustro, el crecimiento de ambos PBI fue sostenido.",
		C: "en líneas generales, las fluctuaciones de ambos PBI son bastante similares.",
		D: "los dos han visto descender sostenidamente sus PBI por más de un lustro.",
		E: "la caída de ambos PBI en los tres últimos años es prácticamente la misma.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE9",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE6-10",
		image: false,
		question: "Se infiere del texto que la inversión pública durante el presente año en el Perú se proyecta en el orden del _ puntos porcentuales debido principalmente a lo efectuado por _ .",
		A: "0,8 – la minería",
		B: "1,2 – el Ministerio de Economía",
		C: "0,1 – el Gobierno central",
		D: "67,3 – los gobiernos locales",
		E: "68,5 – los gobiernos regionales",
		Correct: "C"
	},
	{
		name: "SM2016iBCE10",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE6-10",
		image: false,
		question: "Si el porcentaje de los factores internos se incrementara hasta el 55%, se podría suponer que",
		A: "perdería relevancia la producción total de los proyectos mineros enlistados.",
		B: "el impulso en la producción minera y la inversión pública sería mucho menor.",
		C: "la inversión de los gobiernos locales y regionales seguiría siendo muy baja.",
		D: "ya no cabría esperar una aceleración del crecimiento del PBI para el 2016.",
		E: "las fluctuaciones económicas chinas afectarían menos el crecimiento nacional.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE11-15",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: '<b>Texto 2</b><br>Las actas de acusación contra la cultura de masas, cuando son formuladas y sostenidas por escritores agudos y atentos, tienen su función dialéctica en una discusión sobre el fenómeno. Los panfletos contra la cultura de masas deberán ser leídos y estudiados como documentos a incluir en una investigación equilibrada, teniendo en cuenta, no obstante, los equívocos en que con frecuencia se fundan. <br>En el fondo, la primera toma de posición ante el problema fue la de Friedrich Nietzsche con su identificación de la “enfermedad histórica” y de una de sus formas más ostentosas: el periodismo. Más aun, en el filósofo alemán existía ya en germen la tentación presente en toda polémica sobre este asunto: la desconfianza hacia el igualitarismo, el ascenso democrático de las multitudes, el razonamiento hecho por los débiles y para los débiles, el universo construido a la medida no del superhombre sino del hombre común. Idéntica raíz anima la polémica de José Ortega y Gasset. Y no carece ciertamente de motivos buscar en la base de todo acto de intolerancia hacia la cultura de masas una raíz aristocrática, un desprecio que solo aparentemente se dirige hacia la cultura de masas, pero que en realidad apunta a toda la masa. Un desprecio que solo aparentemente distingue entre masa como grupo gregario y comunidad de individuos autorresponsables, sustraídos a la masificación y a la <b>absorción gregaria</b>: porque en el fondo existe siempre la nostalgia por una época en que los valores culturales eran un privilegio de clase y no eran puestos a disposición de todos indiscriminadamente. <br>Pero no todos los críticos de la cultura de masas pueden adscribirse a este grupo. Dejando aparte a Teodoro Adorno, cuya postura es demasiado notoria para que necesite ser comentada aquí, recordemos toda la hueste de radicales americanos que sostienen una feroz polémica contra los elementos de masificación existentes en el cuerpo social de su país. Su crítica es indudablemente progresista en sus intenciones, y la desconfianza hacia la cultura de masas es desconfianza hacia una forma de poder intelectual capaz de conducir a los ciudadanos a un estado de <b>sujeción gregaria</b>, terreno fértil para cualquier aventura autoritaria.<br><font size="2">Umberto Eco, <i>Apocalípticos e integrados,</i> Bs. As, Sudamericana, 2013, pp. 59-60</font>', 
		image: false,
		question: "El autor se centra en",
		A: "la función dialéctica que cumplen las críticas contra la masificación.",
		B: "la raíz aristocrática de toda polémica sobre la masificación de la cultura.",
		C: "las diversas posturas críticas en torno al tema de la cultura de masas.",
		D: "las razones de fondo de las críticas que se oponen a las masas culturales.",
		E: "Nietzsche, Ortega y Gasset y otros analistas de la masificación cultural.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE12",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE11-15",
		image: false,
		question: "Las expresiones ABSORCIÓN GREGARIA y SUJECIÓN GREGARIA comportan para el autor el riesgo de",
		A: "autoritarismo.",
		B: "aristocratismo.",
		C: "igualitarismo.",
		D: "globalización.",
		E: "masificación.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE13",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE11-15",
		image: false,
		question: "Se desprende del texto que Ortega y Gasset y Nietzsche coincidirían en el interés por",
		A: "impulsar el ascenso social de las mayorías.",
		B: "ponderar una vasta cultura del igualitarismo.",
		C: "una sociedad pensada para débiles y excluidos.",
		D: "una crítica progresista contra el autoritarismo.",
		E: "una ética diseñada para un hombre superior.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE14",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE11-15",
		image: false,
		question: "Resulta incompatible con lo desarrollado por el autor suponer que una verdadera cultura de masas es viable para el",
		A: "criticismo.",
		B: "democratismo.",
		C: "aristocratismo.",
		D: "igualitarismo.",
		E: "progresismo.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE15",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE11-15",
		image: false,
		question: "Si la cultura de masas derivase en las antípodas del gregarismo, acaso cabría esperar, siguiendo al autor, la conformación de",
		A: "un comunitarismo responsable.",
		B: "un aristocratismo clasista.",
		C: "una aventura autoritaria.",
		D: "una comunidad intolerante.",
		E: "una sociedad anti-igualitarista,",
		Correct: "B"
	},
	{
		name: "SM2016iBCE16-20",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: '<b>Texto 3</b><br>Un grupo de investigadores analizó la actividad cerebral de un conjunto de 18 participantes con el objetivo de estudiar la interacción social entre ellos y cómo sus comportamientos se coordinan para lograr un objetivo común. Para ello, se les agrupó en parejas y fueron sentados uno a espaldas del otro. El experimento constaba de dos partes: en una tarea interactiva, los miembros del grupo experimental escuchaban una secuencia rítmica de golpes hecha por una computadora a razón de 120 golpes por minuto, para luego oír únicamente el golpeteo de los dedos realizado por su compañero; en cambio, los miembros del grupo de control no escuchaban al compañero, sino solo el ritmo de golpes producido por la computadora. En ambos casos, lo que debían realizar era seguir lo más precisamente posible el ritmo marcado, golpeando con su dedo índice derecho y, al mismo tiempo, sincronizarlo con lo que escuchaban. Mientras tanto, se recogía la actividad eléctrica cerebral de ambos miembros de cada pareja. <br>Los resultados mostraron que, a nivel neurofisiológico, en la condición interactiva (en pareja) se observaba una merma de los ritmos alfa y beta en las áreas frontales y motoras del cerebro mientras se incrementaban los relativos al planeamiento. Además, no todos los miembros de las parejas mostraban este patrón de la misma forma. Según los análisis, solo uno de los miembros mostró esa disminución de la actividad motora durante las tareas de anticipación y ejecución, y ello se correspondía con la persona que habla actuado como líder durante la tarea. <br>Según los autores, estos datos sugieren que los líderes dedican más recursos de procesamiento a la planificación y al control. Plantean, además, que, al parecer, el surgimiento de la figura del líder se produce de forma espontánea en las relaciones diádicas; pero podría predecirse utilizando la actividad electroencefalográfica cerebral.<br><font size="2">¿Líder o seguidor? Tu actividad cerebral te delata. Adaptación de articulo científico del portal virtual Muyinteresante http://www.muyinteresante.es/ciencia/ver/articulos (Consulta: 27 de enero del 2014) (http://www.muyinteresante.es/ciencia/articulo/lider-o-seguidor-tu-actividad-cerebral-te-delata-741422278529).</font>',
		image: false,
		question: "En el primer párrafo del texto, la palabra COORDINAN puede ser reemplazada por",
		A: "dedican.",
		B: "diferencian.",
		C: "desarrollan.",
		D: "dividen.",
		E: "organizan.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE17",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE16-20",
		image: false,
		question: "El experimento descrito se enfoca en el monitoreo, a nivel neurofisiológico, de lo que serían",
		A: "disminuciones de los ritmos alfa y beta en la corteza cerebral.",
		B: "recursos de procesamiento cortical de planificación y control.",
		C: "formas de comportamiento cerebral en relaciones de pareja.",
		D: "patrones de actividad cerebral característicos de los líderes.",
		E: "las actividades eléctrico-cerebrales de grupos de los seguidores.",
		Correct: "D"
	},
	{
		name: "SM2016iBCE18",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE16-20",
		image: false,
		question: "Se desprende del texto que los ritmos alfa y beta de las áreas frontales y motoras del cerebro se vinculan más a las actividades",
		A: "principalmente repetitivas.",
		B: "referidas a la planificación.",
		C: "relativas a la anticipación.",
		D: "de naturaleza diádica.",
		E: "de carácter espontáneo.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE19",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE16-20",
		image: false,
		question: "Se infiere que los sujetos con patrones de actividad cerebral asociables a la figura del líder",
		A: "conformaban el así llamado grupo de control.",
		B: "se ubicaban en el llamado grupo experimental.",
		C: "no podrían oír el golpeteo dactilar de sus parejas.",
		D: "solo escuchaban los golpes de la computadora.",
		E: "mostraban idéntica actividad a la de su pareja.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE20",
		subject: "VA",
		sub_subject: "Reading Comprehension",
		prompt: "SM2016iBCE16-20",
		image: false,
		question: "La disminución o aumento de ciertos patrones cerebrales por parte de los que actuaron como líderes estaría en función de privilegiar actos mentales de",
		A: "ejecución.",
		B: "realización.",
		C: "anticipación,",
		D: "reiteración.",
		E: "elaboración.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE21",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "El gráfico muestra cinco barriles de vino y uno de pisco, con su respectiva cantidad de litros y no necesariamente en ese orden. Un comerciante vende, el primer día, cierto número de litros de vino; el segundo día, el doble de litros de vino que el primer día, quedándose con todo el pisco y sin vino. ¿Cuántos litros tiene el barril de pisco?",
		A: "19",
		B: "18",
		C: "16",
		D: "20",
		E: "15",
		Correct: "D"
	},
	{
		name: "SM2016iBCE22",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En cada una de las casillas de la figura se escribe un número diferente. El producto de los números que están en las casillas a, b y c es 84; el producto de los números que están en las casillas b, c y d es 140; el producto de los números que están en las casillas c, d y e es 280; y el producto de los números que están en las casillas d, e y f es 600. Halle la suma de los números que deben ir en las casillas b y e.",
		A: "18",
		B: "12",
		C: "19",
		D: "15",
		E: "13",
		Correct: "B"
	},
	{
		name: "SM2016iBCE23",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el siguiente cuadro, escriba los números del 3 al 11, sin que alguno se repita, de tal manera que la suma de los tres números que forman filas, columnas y diagonales sea la misma. Halle el valor de “m”.",
		A: "6",
		B: "5",
		C: "8",
		D: "7",
		E: "9",
		Correct: "D"
	},
	{
		name: "SM2016iBCE24",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En la secuencia mostrada, ¿cuántas figuras geométricas de forma cuadrada hay en el gráfico N.°10?",
		A: "285",
		B: "383",
		C: "387",
		D: "389",
		E: "385",
		Correct: "E"
	},
	{
		name: "SM2016iBCE25",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La figura muestra tres frascos que contienen caramelos: uno tiene solo caramelos de limón, otro tiene solo de fresa y el restante los tiene de ambos sabores. Ningún frasco está correctamente rotulado. ¿Cuántos caramelos como mínimo y de qué frasco o frascos se deben sacar para poder rotularlos correctamente?",
		A: "1 caramelo del frasco rotulado limón",
		B: "1 caramelo del frasco rotulado fresa",
		C: "1 caramelo del frasco rotulado mezcla",
		D: "1 caramelo del frasco rotulado limón y otro del frasco rotulado fresa",
		E: "1 caramelo del frasco rotulado fresa y otro del frasco rotulado mezcla",
		Correct: "C"
	},
	{
		name: "SM2016iBCE26",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "De un total de 120 personas encuestadas, 25 personas hablan inglés y francés, 40 solo hablan francés y 20 no hablan ninguno de estos idiomas. Obtenga el número de personas que habla solo uno de estos idiomas.",
		A: "75",
		B: "65",
		C: "85",
		D: "80",
		E: "70",
		Correct: "A"
	},
	{
		name: "SM2016iBCE27",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La estatura promedio de todos los estudiantes en un salón del tercer grado es de 1 metro. Si la estatura promedio de los varones, que son en total 10, es de 1,15 m y la estatura promedio de todas las mujeres es 0,90 m, halle el número de estudiantes en el salón.",
		A: "15",
		B: "25",
		C: "28",
		D: "22",
		E: "14",
		Correct: "B"
	},
	{
		name: "SM2016iBCE28",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "A pedido de un supermercado, un banco envía 360 monedas de 10 céntimos, 648 monedas de 20 céntimos y 432 monedas de 50 céntimos. Dichas monedas se agruparon en varias bolsas, de modo tal que cada bolsa tenía el mismo número de monedas y de igual denominación. ¿Cuál es el mayor número de monedas que se colocaron en cada bolsa?",
		A: "108",
		B: "36",
		C: "18",
		D: "24",
		E: "72",
		Correct: "E"
	},
	{
		name: "SM2016iBCE29",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Para realizar un viaje al extranjero, una agencia de turismo ofrece: <br>− Pasajes de ida y vuelta a S/. 4250 por persona <br>− Alojamiento individual a S/. 85 por día <br>− Alimentación a S/. 115 por persona y por día <br>¿Cuál es el presupuesto necesario para 4 personas durante 5 días con el 10% de descuento en el rubro de pasajes?",
		A: "S/. 16100",
		B: "S/. 18300",
		C: "S/. 19300",
		D: "S/. 27000",
		E: "S/. 18800",
		Correct: "C"
	},
	{
		name: "SM2016iBCE30",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "A un paciente se le receta tornar una pastilla del tipo A cada 8 horas y dos pastillas del tipo B cada 7 horas. Si empieza su tratamiento tomando los dos tipos de pastillas simultáneamente, ¿en cuántas horas como mínimo habrá tomado 18 pastillas?",
		A: "35",
		B: "40",
		C: "42",
		D: "32",
		E: "56",
		Correct: "B"
	},
	{
		name: "SM2016iBCE31",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Janett, que dispone de una cantidad de dinero para comprar chocolates, les dijo a sus sobrinos: 'Si compro tres chocolates para cada uno de ustedes, me sobraría dinero exactamente para cuatro chocolates más, pero si quisiera comprar cuatro chocolates para cada uno de ustedes, me faltaría exactamente el dinero para tres chocolates más'. ¿Cuántos sobrinos tiene Janett?",
		A: "6",
		B: "5",
		C: "4",
		D: "8",
		E: "7",
		Correct: "E"
	},
	{
		name: "SM2016iBCE32",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Si f y g son funciones que verifican \\(\\mathrm{f(x) =} \\textrm{} (\\frac{x-1}{x+1}\\), x≠−1 y g(x+1)=f(f(x)), calcule g\\(\\frac{1}{2}\\).",
		A: "-2",
		B: "0",
		C: "2",
		D: "1",
		E: "-1",
		Correct: "C"
	},
	{
		name: "SM2016iBCE33",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Los precios de una pulsera y un reloj son, respectivamente, 20 y 15 nuevos soles. Si María gasta S/.250 en comprar 14 artículos entre pulseras y relojes, ¿cuál es la diferencia positiva del número de dichos artículos?",
		A: "8",
		B: "4",
		C: "6",
		D: "3",
		E: "2",
		Correct: "E"
	},
	{
		name: "SM2016iBCE34",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Cada fin de semana, Pedro viaja a Ica o a Piura. El pasaje de ida y vuelta a Piura cuesta S/. 240 y el de ida y vuelta a Ica cuesta la mitad. Si en las últimas 9 semanas ha gastado en pasajes S/.1200, ¿cuántas veces viajó y volvió de Ica?",
		A: "6",
		B: "4",
		C: "7",
		D: "8",
		E: "5",
		Correct: "D"
	},
	{
		name: "SM2016iBCE35",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Las edades de Ana y Juan hace x años eran 8 y 12 años respectivamente. Dentro de x años serán 28 y 32 años respectivamente. ¿Cuál es la edad actual de Juan?",
		A: "18 años",
		B: "22 años",
		C: "32 años",
		D: "20 años",
		E: "24 años",
		Correct: "B"
	},
	{
		name: "SM2016iBCE36",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Se desea cubrir toda la región sombreada conformada por dos rectángulos con losetas de 20 cm x 20 cm. Si cada loseta cuesta 10 nuevos soles, ¿cuál será el costo total de las losetas?",
		A: "S/. 4200",
		B: "S/. 3800",
		C: "S/. 4250",
		D: "S/. 4500",
		E: "S/. 4120",
		Correct: "C"
	},
	{
		name: "SM2016iBCE37",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Un agricultor tiene un campo para cultivar frutas que ha sido dividido en cinco parcelas, tal como muestra la figura. Las parcelas I, II, III y IV son regiones cuadradas. Además, las parcelas IV y V forman un cuadrado. Si el área de la parcela I es 25 \\(\\mathrm{m^2}\\), el área de la parcela II es 49 \\(\\mathrm{m^2}\\) y el área de la parcela IV es 81 \\(\\mathrm{m^2}\\), halle el área de la parcela V.",
		A: "360 \\(\\mathrm{m^2}\\)",
		B: "441 \\(\\mathrm{m^2}\\)",
		C: "333 \\(\\mathrm{m^2}\\)",
		D: "396 \\(\\mathrm{m^2}\\)",
		E: "400 \\(\\mathrm{m^2}\\)",
		Correct: "A"
	},
	{
		name: "SM2016iBCE38",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "De una lámina de 10 cm de ancho y 14 cm de largo se construye una caja abierta, cortando un cuadrado de 2 cm de lado en cada esquina. El volumen de la caja resultante es",
		A: "100 \\(\\mathrm{cm^3}\\)",
		B: "125 \\(\\mathrm{cm^3}\\)",
		C: "150 \\(\\mathrm{cm^3}\\)",
		D: "120 \\(\\mathrm{cm^3}\\)",
		E: "80 \\(\\mathrm{cm^3}\\)",
		Correct: "D"
	},
	{
		name: "SM2016iBCE39",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En la figura, D es punto medio de \\(\\mathrm{\\overline{AC}}\\). Halle el valor de x.",
		A: "30°",
		B: "45°",
		C: "15°",
		D: "20°",
		E: "25°",
		Correct: "A"
	},
	{
		name: "SM2016iBCE40",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En la figura, ABCD es un cuadrado inscrito en la circunferencia de centro O y radio igual a \\(\\sqrt{3}\\) cm; \\(\\mathrm{\\overline{AB}}\\), \\(\\mathrm{\\overline{BC}}\\), \\(\\mathrm{\\overline{CD}}\\) y \\(\\mathrm{\\overline{AD}}\\) son diámetros de las semicircunferencias \\(\\widehat{AB}\\) , \\(\\widehat{BC}\\), \\(\\widehat{CD}\\) y \\(\\widehat{AD}\\) respectivamente. Halle el área de la región sombreada.",
		A: "π \\(\\mathrm{cm^2}\\)",
		B: "6 \\(\\mathrm{cm^2}\\)",
		C: "2π \\(\\mathrm{cm^2}\\)",
		D: "4 \\(\\mathrm{cm^2}\\)",
		E: "\\(\\mathrm{\\frac{π}{4}}\\)",
		Correct: "B"
	},
	{
		name: "SM2016iBCE41",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La cantidad de naranjas que tiene un negociante es a la cantidad de peras como 3 es a 2; y la cantidad de peras es a la cantidad de duraznos que tiene como 3 es a 5. Sabiendo que las cantidades de naranjas y duraznos suman 95, ¿cuántas peras tiene el negociante?",
		A: "35",
		B: "45",
		C: "25",
		D: "30",
		E: "40",
		Correct: "D"
	},
	{
		name: "SM2016iBCE42",
		subject: "",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Se tienen n datos de tiempo en minutos, cuya media aritmética es 3,75 minutos. Si a cada uno de los n datos se les resta 15 segundos, ¿cuál es la media aritmética, en segundos, de estos n datos resultantes?",
		A: "216",
		B: "210",
		C: "225",
		D: "230",
		E: "245",
		Correct: "B"
	},
	{
		name: "SM2016iBCE43",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Nancy fue al mercado con cierta cantidad de dinero que es un número impar de nuevos soles. Ella solo compró S/. 5 de fresa, quedándole una cantidad mayor o igual a S/. 9. De regreso, Nancy se encontró con María, quien le pagó los S/. 8 que le debía y ahora tiene una cantidad menor o igual que S/. 23. ¿Cuál es la mayor cantidad posible de dinero con la cual Nancy fue al mercado?",
		A: "S/. 19",
		B: "S/. 17",
		C: "S/. 15",
		D: "S/. 21",
		E: "S/. 13",
		Correct: "A"
	},
	{
		name: "SM2016iBCE44",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: 'Se requiere hacer un falso techo con piezas de <i>drywall</i>, todas de igual dimensión, para una habitación rectangular de 8 m de largo por 6 m de ancho. ¿Cuál es la mínima cantidad de piezas de <i>drywall</i> que se deberán usar de',
		A: "8",
		B: "12",
		C: "10",
		D: "16",
		E: "14",
		Correct: "B"
	},
	{
		name: "SM2016iBCE45",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Halle la suma de los cuadrados de las soluciones de la ecuación <br> \\(\\mathrm{log_2}({x^2} -4x+7)= {log_2}\\)(x-2)+2; x>2",
		A: "25",
		B: "41",
		C: "34",
		D: "29",
		E: "20",
		Correct: "C"
	},
	{
		name: "SM2016iBCE46",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "¿A cuál de las siguientes funciones corresponde el siguiente cuadro de valores? REDO",
		A: "\\(\\mathrm{F(x)=x^3+1}\\)",
		B: "\\(\\mathrm{F(x)=x^2+3}\\)",
		C: "\\(\\mathrm{F(x)=-3x+6}\\)",
		D: "\\(\\mathrm{F(x)=3x+3}\\)",
		E: "\\(\\mathrm{F(x)=x^2-7}\\)",
		Correct: "D"
	},
	{
		name: "SM2016iBCE47",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Dos números naturales impares consecutivos cumplen que la diferencia positiva de sus cuadrados es menor que 129. Halle el mayor valor que puede tomar la suma de esos dos números naturales impares.",
		A: "60",
		B: "64",
		C: "56",
		D: "52",
		E: "68",
		Correct: "B"
	},
	{
		name: "SM2016iBCE48",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Dos cuerpos se mueven sobre el mismo camino en función del tiempo de acuerdo a las relaciones <br> \\(\\mathrm{P_1 (t)=} {3 t^5}+{3 t^3}+{2 t^2}-t+2}\\) <br> \\(\\mathrm{P_2 (t)=} {3 t^5}+{2 t^3}+{7 t^2}-8t+5}\\) <br> , t \in [0,3] <br> Sabiendo \\(\\mathrm{p_1}\\)(t) y \\(\\mathrm{p_2}\\)(t) los espacios recorridos en el tiempo t (en metros y segundos respectivamente). Si al cabo de cierto tiempo recorren la misma distancia, halle esta distancia.",
		A: "9 m",
		B: "7 m",
		C: "8,5 m",
		D: "6 m",
		E: "11 m",
		Correct: "A"
	},
	{
		name: "SM2016iBCE49",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Un alambre de 48 m se corta en tres partes; la segunda pieza mide tres veces la longitud de la primera y la tercera mide cuatro veces la longitud de segunda. ¿Cuánto mide la tercera pieza?",
		A: "38 m",
		B: "32 m",
		C: "42 m",
		D: "36 m",
		E: "34 m",
		Correct: "D"
	},
	{
		name: "SM2016iBCE50",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La figura muestra un recipiente cilíndrico circular recto y un cono inscrito; ¿cuántos litros de agua contiene la región limitada por el cilindro, exterior al cono? Considere π= 3,1416",
		A: "1,0472",
		B: "4,1888",
		C: "2,0944",
		D: "3,1416",
		E: "5,2360",
		Correct: "B"
	},
	{
		name: "SM2016iBCE51",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el sistema de coordenadas rectangulares XY se tiene los puntos P, Q y R que forman un triángulo de altura 2\\(\\mathrm{\\sqrt{3}}\\). Dado el punto S(1,1), halle la suma de las distancias de S a \\(\\mathrm{\\overline{PQ}}\\) y de S a \\(\\mathrm{\\overline{QR}}\\).",
		A: "2\\(\\mathrm{\\sqrt{3}}\\) +1",
		B: "\\(\\mathrm{\\sqrt{3}}\\) -1",
		C: "\\(\\mathrm{\\sqrt{3}}\\) +1",
		D: "2\\(\\mathrm{\\sqrt{3}}\\) -1",
		E: "\\(\\mathrm{\\sqrt{3}}\\) +\\(\\frac{1}{2}\\)",
		Correct: "D"
	},
	{
		name: "SM2016iBCE52",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Una esfera es cortada por un plano, de modo que el área de la sección en el plano sea igual a la diferencia de las áreas de los casquetes determinados por dicho plano. Si la distancia del centro de la esfera al plano es \\(\\mathrm({\\sqrt{5}} -2)\\) m, halle el radio de la esfera.",
		A: "1,5 m",
		B: "\\(\\frac{1}{2}\\) m",
		C: "1 m",
		D: "2 m",
		E: "\\(\\frac{4}{3}\\) m",
		Correct: "C"
	},
	{
		name: "SM2016iBCE53",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Si β es un ángulo en posición normal con lado terminal situado en el segundo cuadrante y tgβ = -\\(\\frac{3}{4}\\), calcule el valor de cos 2β.",
		A: "-\\(\\frac{8}{25}\\)",
		B: "\\(\\frac{6}{25}\\)",
		C: "-\\(\\frac{6}{25}\\)",
		D: "-\\(\\frac{7}{25}\\)",
		E: "\\(\\frac{7}{25}\\)",
		Correct: "E"
	},
	{
		name: "SM2016iBCE54",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Exprese, en segundos sexagesimales, la medida de un ángulo que es la milésima parte de 180º.",
		A: "720'",
		B: "648'",
		C: "525'",
		D: "725'",
		E: "680'",
		Correct: "B"
	},
	{
		name: "SM2016iBCE55",
		subject: "MA",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En la figura \\(\\frac{BM}{MC}\\)= \\(\\frac{2}{5}\\). Halle tgα.",
		A: "\\(\\frac{4}{9}\\)",
		B: "\\(\\frac{7}{9}\\)",
		C: "\\(\\frac{3}{4}\\)",
		D: "\\(\\frac{5}{9}\\)",
		E: "\\(\\frac{4}{5}\\)",
		Correct: "D"
	},
	{
		name: "SM2016iBCE56",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el enunciado presentado, ¿cuántos diptongos y hiatos aparecen? <br>'En filosofía, la hermenéutica es la teoría de la verdad y el método que expresa la universalización del fenómeno interpretativo desde la raíz de la historia'.",
		A: "Cuatro diptongos y tres hiatos",
		B: "Dos diptongos y cuatro hiatos",
		C: "Tres diptongos y dos hiatos",
		D: "Cuatro diptongos y dos hiatos",
		E: "Tres diptongos y cuatro hiatos",
		Correct: "E"
	},
	{
		name: "SM2016iBCE57",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Cuantifique el número de palabras agudas del enunciado 'voy a acusar a Raquel porque dejó su pantalón de moda colgado en el tendal'.",
		A: "Cinco",
		B: "Cuatro",
		C: "Seis",
		D: "Tres",
		E: "Dos",
		Correct: "A"
	},
	{
		name: "SM2016iBCE58",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el enunciado siguiente, ¿cuál es la serie correcta de palabras escritas en mayúsculas y minúsculas que llenan los espacios en blanco? 'Para promover la cultura, el _ de Educación, el _ de Abogados de Lima y la _ Nacional del Perú han auspiciado la representación teatral de <i>Bodas de</i> _ , de Federico García Lorca'.",
		A: "Ministro – Colegio – Policía – <i>sangre</i>",
		B: "ministro – Colegio – Policía – <i>sangre</i>",
		C: "ministro – colegio – Policía – <i>sangre</i>",
		D: "ministro – colegio – Policía – <i>sangre</i>",
		E: "Ministro – colegio – Policía – <i>sangre</i>",
		Correct: "B"
	},
	{
		name: "SM2016iBCE59",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Seleccione la expresión con puntuación correcta.",
		A: "Cuando fuimos, al zoológico, vimos muchos mamíferos, tigres, leones, elefantes, jirafas, rinocerontes, osos, cebras, y caballos.",
		B: "Cuando fuimos, al zoológico: vimos muchos mamíferos, tigres, leones, elefantes, jirafas, rinocerontes, osos, cebras, y caballos.",
		C: "Cuando fuimos al zoológico, vimos muchos mamíferos: tigres, leones, elefantes, jirafas, rinocerontes, osos, cebras y caballos.",
		D: "Cuando fuimos, al zoológico, vimos muchos mamíferos: tigres, leones, elefantes, jirafas, rinocerontes, osos, cebras y, caballos.",
		E: "Cuando fuimos al zoológico, vimos muchos mamíferos; tigres, leones, elefantes, jirafas, rinocerontes, osos, cebras y caballos.",
		Correct: "D"
	},
	{
		name: "SM2016iBCE60",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "'Conocido por sus extraordinarias novelas, aquel escritor es también un <u>formidable</u> ensayista. Sus textos han sido admirados por conformar, durante años, panoramas esclarecedores de la escena contemporánea, lejos de la <u>mediocre</u> visión restrictiva de los escritores de antaño'. <br>Las palabras subrayadas están en relación semántica de",
		A: "antonimia gramatical.",
		B: "homonimia absoluta.",
		C: "homonimia parcial.",
		D: "sinonimia.",
		E: "antonimia lexical.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE61",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el enunciado siguiente, indique cuántos adverbios hay. <br>'Ayer, Pedro me dijo que jamás saldría con Juana temprano, porque ella es medio aburrida'.",
		A: "Cinco",
		B: "Tres",
		C: "Cuatro",
		D: "Dos",
		E: "Seis",
		Correct: "C"
	},
	{
		name: "SM2016iBCE62",
		subject: "Language",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "'<u>Como mi hermana llegó ayer de Inglaterra</u>, donde estudia artes plásticas, mi padre nos llevó a cenar a un exclusivo restaurante capitalino. La comida estuvo deliciosa, pero demoraron en traerla. Al final, el mozo nos dijo <u>que había tenido un inconveniente</u>'. <br>En el enunciado anterior, las proposiciones subrayadas son reconocidas, respectivamente, como",
		A: "adverbial y sustantiva.",
		B: "sustantiva y adjetiva.",
		C: "sustantiva y adverbial.",
		D: "adjetiva y sustantiva.",
		E: "adjetiva y adverbial.",
		Correct: "A"
	},
	{
		name: "SM2016iBCE63",
		subject: "Literature",
		sub_subject: "",
		prompt: false,
		image: false,
		question: '¿Quién y de dónde eres? ¿Dónde tienes tu ciudad y tus padres? Estoy sobrecogida de admiración porque no has quedado hechizado a pesar de haber bebido estos brebajes. Nadie, ningún hombre ha podido soportarlos una vez que los ha bebido y han pasado el cerco de sus dientes. ¿A qué personaje homérico corresponde mejor esta caracterización?',
		A: "Aquiles",
		B: "Patroclo",
		C: "Menelao",
		D: "Odiseo",
		E: "Héctor",
		Correct: "D"
	},
	{
		name: "SM2016iBCE64",
		subject: "Literature",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En la <i>Divina Comedia</i>, el poeta se encuentra perdido; por ello, es guiado al Paraíso, sucesivamente, por",
		A: "Beatriz y Virgilio.",
		B: "Dante y Caronte.",
		C: "Virgilio y Cancerbero.",
		D: "Cancerbero y Beatriz.",
		E: "Virgilio y Beatriz.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE65",
		subject: "Literature",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La lucha entre lo ideal y lo material se presenta en una serie de novelas. El mismo conflicto suele ocurrir también al interior de cada persona, Así, se puede decir que todos los seres humanos tenemos un poco de _ y otro poco de _.",
		A: "Carlota – Werther",
		B: "Doña Bárbara – Mister Danger",
		C: "Quijote – Sancho",
		D: "El Jaguar – El Boa",
		E: "Rosendo Maqui – Benito Castro",
		Correct: "C"
	},
	{
		name: "SM2016iBCE66",
		subject: "Psychology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Miguel está vendiendo el reciente número de una revista de modas. Por cada cinco que venda, le pagan tres soles. Su conducta de vender revistas está siendo reforzada según un programa de",
		A: "razón fija.",
		B: "razón variable.",
		C: "intervalo fijo.",
		D: "intervalo variable.",
		E: "reforzamiento continuo.",
		Correct: "A"
	},
	{
		name: "SM2016iBCE67",
		subject: "Psychology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Karen y Natalia, ambas adolescentes de 16 años de edad, comparten todos sus secretos, así como sus alegrías y tristezas: se tienen confianza mutua. Esta característica de la amistad es denominada",
		A: "lealtad.",
		B: "conocimiento mutuo.",
		C: "sinceridad",
		D: "afecto compartido.",
		E: "intimidad.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE68",
		subject: "Psychology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Determine el valor de verdad (V) o falsedad (F) de los siguientes enunciados relativos a la etapa sensoriomotora. <br> I.El niño comienza a desarrollar ciertas funciones cognitivas, como la memoria. <br> II. El niño descubre el mundo observándolo, tocando las cosas con las manos. <br> III. El niño ya ha logrado plenamente el dominio de la lengua de su comunidad. ",
		A: "V V F",
		B: "F F F",
		C: "V V V",
		D: "V F V",
		E: "F V F",
		Correct: "A"
	},
	{
		name: "SM2016iBCE69",
		subject: "Civic Education",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Una joven pareja afrodescendiente espera su turno para ingresar a una conocida discoteca ubicada en Miraflores. Unos jóvenes de tez clara llegan después y entran al local sin que se les exija ningún requisito. Sin embargo, cuando la referida pareja pretende ingresar, los vigilantes le exigen los carnés de socio, dificultándoles el ingreso. Según lo descrito, los propietarios del local estarían",
		A: "promoviendo políticas de superioridad racial.",
		B: "marginando a ciertos grupos socioeconómicos.",
		C: "permitiendo el libre acceso indistintamente.",
		D: "vulnerando el derecho a no ser discriminado.",
		E: "atentando contra el derecho al libre tránsito.",
		Correct: "D"
	},
	{
		name: "SM2016iBCE70",
		subject: "Civic Education",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Si un ciudadano participa como candidato en el próximo proceso electoral de autoridades municipales, es porque, así como puede elegir a sus representantes, también posee el derecho a ser elegido. Esta característica hace de nuestro país una república",
		A: "independiente.",
		B: "globalizada.",
		C: "democrática.",
		D: "descentralizada.",
		E: "comunitaria.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE71",
		subject: "Civic Education",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Alrededor del siglo XI d. C., decayó la hegemonía de la cultura Wari en el territorio andino. Surgieron entonces sociedades que se caracterizaron por",
		A: "la construcción de los primeros centros ceremoniales.",
		B: "la domesticación de plantas como el maíz y la papa.",
		C: "la construcción de los primeros canales de regadío.",
		D: "el fortalecimiento de las tradiciones regionales.",
		E: "el uso de la moneda en los Andes centrales.",
		Correct: "D"
	},
	{
		name: "SM2016iBCE72",
		subject: "Civic Education",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "El sistema de flotas y galeones era la forma de comercio entre España y sus colonias americanas. Este sistema favoreció a los comerciantes sevillanos, quienes, al controlar la cantidad y calidad de los productos, podían",
		A: "introducir productos de contrabando.",
		B: "trasladar por tierra sus productos a Panamá.",
		C: "desarrollar el comercio intercolonial.",
		D: "vender mercaderías en el puerto del Callao.",
		E: "fijar los precios de las mercancías.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE73",
		subject: "World History",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Una característica fundamental del <i>Homo erectus</i> fue su capacidad de producir fuego, lo que le permitió",
		A: "enterrar a sus muertos.",
		B: "cocinar sus alimentos.",
		C: "desarrollar la metalurgia.",
		D: "convivir con animales predadores.",
		E: "pintar las paredes de sus cuevas.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE74",
		subject: "World History",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Solón impulsó importantes reformas para mejorar la situación de los campesinos atenienses, dictó leyes 'tanto para el hombre del pueblo como para el rico' y llegó a suprimir la esclavitud por deudas. Por esto, es considerado un gran",
		A: "arconte.",
		B: "heliasta.",
		C: "legislador.",
		D: "tirano.",
		E: "eupátrida.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE75",
		subject: "Geography",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Las variadas características del territorio como clima, vegetación y paisaje sirven de base para identificar las ocho regiones naturales del Perú. Señale la alternativa que asocie, respectivamente, región natural y relieve representativo.",
		A: "Chala: pampas y valles",
		B: "Omagua: montañas y cañones",
		C: "Jalca: altos y restingas",
		D: "Quechua: planicies y glaciares ",
		E: "Janca: terrazas y aguajales",
		Correct: "A"
	},
	{
		name: "SM2016iBCE76",
		subject: "Geography",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En un mapa de distribución de la población mundial, se puede observar lo siguiente: a) la existencia de grandes vacíos poblacionales representan un 43% de la superficie terrestre; b) estos corresponden a las regiones circumpolares e intertropicales y c) en ellos habita solo el 2% de la población. Teniendo en cuenta estos datos, se puede establecer que la mayor parte de la población mundial se concentra entre los grados",
		A: "0° y 35° de latitud norte.",
		B: "20° y 60° de latitud sur.",
		C: "20° y 60° de latitud norte.",
		D: "0° y 35° de latitud sur.",
		E: "50° y 70° de latitud sur.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE77",
		subject: "Economics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Es una variable empleada en la medición del desarrollo humano.",
		A: "Nivel de variación de precios",
		B: "Producto bruto interno",
		C: "Tasa de interés",
		D: "Reservas internacionales netas",
		E: "Población económicamente activa",
		Correct: "B"
	},
	{
		name: "SM2016iBCE78",
		subject: "Economics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Las instituciones encargadas de garantizar la libre competencia y resguardar los derechos y deberes de los agentes económicos son",
		A: "Osiptel, Sunat e Indecopi.",
		B: "Indecopi, Sunat y MEF.",
		C: "Sunat, MEF y BCRP.",
		D: "Osiptel, Osinergrmin e Indecopi.",
		E: "Indecopi, Cofide y BCRP.",
		Correct: "D"
	},
	{
		name: "SM2016iBCE79-80",
		subject: "Philosophy",
		sub_subject: "",
		prompt: 'Lee el siguiente texto y, a continuación, responde las preguntas 79 y 80. <br>"Las preguntas fundamentales son rechazadas como preguntas generales —sentencia Edgar Morin—, esto es, vagas, abstractas, no operacioneales. La pregunta originaria que la ciencia había arrebatado a la religión y a la filosofía para La pregunta originaria que la ciencia había arrebatado a la religión y a la filosofía para hacerla propia, la pregunta que justificaba su ambición de ciencia: "¿Qué es el hombre; qué es el mundo; qué es el hombre en el mundo?", la ciencia la devuelve hoy a la filosofía, siempre incompetente a sus ojos a causa de su alcoholismo especulativo, y la devuelve a la religión, siempre ilusoria a sus ojos por su inveterada mitomanía. La ciencia abandona toda pregunta fundamental pregunta fundamental a los no científicos, que habían sido descalificados a <i>priori</i>. Esta tolera que sus grandes dignatarios se eleven a ciertas alturas meditativas solo a la edad de la pensión, mientras los jóvenes de delantal blanco se burlan entre sus alambiques". <br><font size="2">Reale, Giovanni (2000). <i>La sabiduría antigua. Terapia para los males del hombre contemporáneo.</i>',
		image: false,
		question: "Si algunos científicos rechazan hoy en día las preguntas fundamentales, probablemente esto se debe a que",
		A: "operan solo con métodos apriorísticos.",
		B: "siguen de cerca sus creencias religiosas.",
		C: "desprecian la especulación abstracta.",
		D: "poseen un concepto impreciso de ciencia.",
		E: "solo les interesan durante su juventud.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE80",
		subject: "Philosophy",
		sub_subject: "",
		prompt: "SM2016iBCE79-80",
		image: false,
		question: "A pesar de que la ciencia contemporánea no ha podido resolver las preguntas fundamentales, sus jóvenes representantes",
		A: "persisten con nuevas aproximaciones teóricas.",
		B: "creen que tales problemas nunca tuvieron sentido.",
		C: "discuten entre sí nuevas posibilidades de solución.",
		D: "han criticado el enfoque experimental de la ciencia.",
		E: "siguen descalificando a la filosofía y a la religión.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE81",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Actualmente, los humanos vivimos en la superficie exterior de un planeta esférico llamado Tierra, el cual gira alrededor de una estrella muy grande llamada Sol. En el futuro, tal vez muchos viviremos en gigantescos hábitats espaciales girando perezosamente y seremos mantenidos en su superficie interna por la fuerza centrífuga. Entonces, en respuesta a la pregunta “¿qué mantiene a la Tierra moviéndose alrededor del Sol?”, un físico afirmará que ello es debido a la fuerza",
		A: "de gravedad de la Tierra.",
		B: "de gravedad del Sol.",
		C: "centrífuga de la Tierra.",
		D: "centrípeta del Sol.",
		E: "inercial de la Tierra.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE82",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Los satélites artificiales son objetos de fabricación humana que se han colocado en órbita alrededor de la Tierra y, dependiendo de su uso, tienen diferentes periodos orbitales. Por ejemplo, si para las empresas celulares con tecnología GPS el periodo orbital es de 14 horas, ¿cuál es la magnitud de la velocidad lineal con la que gira el satélite? (\\(\\mathrm{R_Tierra}\\)= 6× \\(\\mathrm{10^6}\\) m)",
		A: "755 \\(\\frac{m}{s}\\)",
		B: "723 \\(\\frac{m}{s}\\)",
		C: "736 \\(\\frac{m}{s}\\)",
		D: "747 \\(\\frac{m}{s}\\)",
		E: "718 \\(\\frac{m}{s}\\)",
		Correct: "D"
	},
	{
		name: "SM2016iBCE83",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Cuando un ascensor empieza a moverse hacia arriba, acelera brevemente y luego sigue a velocidad constante hasta que se aproxima al piso deseado. Durante la aceleración hacia arriba, nos sentimos más pesados que lo habitual. Análogamente, cuando la aceleración se dirige hacia abajo, sentimos como si nuestro peso se redujera. Entonces, si un niño de masa 50 kg permanece en pie sobre una balanza en un ascensor, ¿cuál será su peso efectivo si el ascensor se acelera hacia arriba a 2,0 \\(\\frac {m}{s^2}\\)? (g=10 \\(\\frac{m}{s^2}\\)",
		A: "500 N",
		B: "600 N",
		C: "650 N",
		D: "700 N",
		E: "550 N",
		Correct: "B"
	},
	{
		name: "SM2016iBCE84",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Para evitar accidentes innecesarios, los elevadores de los edificios tienen un aviso que indica la carga máxima que pueden soportar. Si un elevador de 1000 kg puede soportar una carga de 800 kg, ¿cuál es la potencia que debe entregar el motor para elevarlo con carga máxima a una rapidez constante de 3,00 m/s si una fuerza de fricción constante de 4000N retarda su ascenso? (g=10 \\(\\frac{m}{s^2}\\)",
		A: "61 kW",
		B: "63 kW",
		C: "67 kW",
		D: "69 kW",
		E: "66 kW",
		Correct: "E"
	},
	{
		name: "SM2016iBCE85",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Todo cuerpo que está parcial o totalmente sumergido en un fluido en reposo experimenta una fuerza vertical hacia arriba igual al peso del líquido desalojado por el cuerpo. Si un cubo de madera que tiene aristas de 20,0 cm flota en agua, ¿cuál es la distancia desde la superficie horizontal superior del cubo al nivel del agua? (ρmadera=650 \\(\\frac{kg}{m^3}\\) ; ρague = 1000 \\(\\frac{kg}{m^3}\\)",
		A: "5,0 cm",
		B: "8,0 cm",
		C: "4,0 cm",
		D: "7,0 cm",
		E: "6,0 cm",
		Correct: "C"
	},
	{
		name: "SM2016iBCE86",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La fem (ε) de una batería es el voltaje máximo posible que esta puede suministrar entre sus terminales. Si una batería tiene una fem de 12,0 V y una resistencia interna de 0,05 Ω, ¿cuál es el voltaje terminal de la batería si sus terminales están conectados a una resistencia de 3,00 Ω?",
		A: "11,8 V",
		B: "10,8 V",
		C: "12,8 V",
		D: "13,8 V",
		E: "14,8 V",
		Correct: "A"
	},
	{
		name: "SM2016iBCE87",
		subject: "Physics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Max Planck, considerado el padre de la física cuántica, planteó una hipótesis para explicar sus resultados: los átomos o moléculas absorben o emiten energía en cantidades discretas llamadas 'cuantos' o 'fotones'; esto lo hacen brincando de un estado cuántico a otro. Considerando esta hipótesis, ¿cuál es la energía de los fotones emitidos por una fuente de luz monocromática azul con una frecuencia de 7,50 x \\(\\mathrm{10^14}\\) Hz? <br>(h=6,62 x \\(\\mathrm{10^-34}\\) J.s)",
		A: "2,1 eV",
		B: "4,1 eV",
		C: "5,1 eV",
		D: "3,1 eV",
		E: "6,1 eV",
		Correct: "D"
	},
	{
		name: "SM2016iBCE88",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Según un artículo de la revista <i>Science</i>, la siguiente generación de células solares puede ser más barata que la actual gracias a la sustitución del silicio por la perovkita, la cual está compuesta por titanio y calcio. De los elementos que conforman la perovkita, se puede afirmar que",
		A: "ambos son metaloides.",
		B: "uno es metal y el otro, no metal.",
		C: "ambos son metales.",
		D: "ambos son no metales.",
		E: "uno es alcalino y el otro, alcalino térreo.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE89",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Las pinturas, los removedores de pintura y las soluciones limpiadoras contienen, como disolvente, hexano o ciclohexano. Respecto al hexano, marque con V (verdadero) o F (falso) cada una de las siguientes proposiciones y luego señale la secuencia correcta. <br>I. Es un alcano. <br>II. Su combustión es exotérmica. <br>III. Es un hidrocarburo de cadena cerrada.",
		A: "F V F",
		B: "V F F",
		C: "V V V",
		D: "V F V",
		E: "V V F",
		Correct: "E"
	},
	{
		name: "SM2016iBCE90",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Una de las etapas del proceso de potabilización del agua es la floculación o coagulación, en la cual se agrega al agua el sulfato de aluminio como floculante para facilitar el asentamiento de sustancias coloidales o finamente divididas que ocasionan turbidez; las partículas se unen, aumentan de peso y se descartan. Al sulfato de aluminio (\\(\\mathrm{Al_2}{(SO_4)}{_3}\\) le corresponde un peso fórmula de Al= 27 uma S= 32 uma O= 16 uma",
		A: "3,42 × \\(\\mathrm{10^2}\\) \\(\\frac{g}{mol}\\).",
		B: "1,50 × \\(\\mathrm{10^2}\\) \\(\\frac{g}{mol}\\).",
		C: "3,15 × \\(\\mathrm{10^2}\\) \\(\\frac{g}{mol}\\).",
		D: "3,42 × \\(\\mathrm{10^-2}\\) \\(\\frac{g}{mol}\\).",
		E: "1,50 × \\(\\mathrm{10^-2}\\) \\(\\frac{g}{mol}\\).",
		Correct: "D"
	},
	{
		name: "SM2016iBCE91",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "El etilenglicol es un líquido orgánico utilizado como agente anticongelante en radiadores de automóviles, cuya temperatura de congelación es –11,5° C. Exprese esta temperatura en grados Fahrenheit.",
		A: "20,7° F",
		B: "11,3° F",
		C: "52,7° F",
		D: "16,5° F",
		E: "36,9° F",
		Correct: "B"
	},
	{
		name: "SM2016iBCE92",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Una de las propiedades físicas de la materia, mediante la cual se puede diferenciar una sustancia de otra, es su densidad. Para facilitar el intercambio de información, es preciso expresar la densidad de toda sustancia según el Sistema Internacional de Unidades (SI). Si un experimentador encuentra que la densidad de la sustancia A es 5 \\(\\frac{µg}{mL}\\), ¿cuál es la densidad de A en el SI?",
		A: "5×\\(\\mathrm{10^–3}\\) \\(\\frac{kg}{m^3}\\)",
		B: "5×\\(\\mathrm{10^0}\\) \\(\\frac{kg}{m^3}\\)",
		C: "5×\\(\\mathrm{10^–6}\\) \\(\\frac{kg}{dm^3}\\)",
		D: "5×\\(\\mathrm{10^6}\\) \\(\\frac{g}{dm^3}\\)",
		E: "5×\\(\\mathrm{10^9}\\) \\(\\frac{g}{m^3}\\)",
		Correct: "A"
	},
	{
		name: "SM2016iBCE93",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "El galvanizado es un proceso electroquímico mediante el cual se puede recubrir un metal con otro para protegerlo de la corrosión. En la industria, los metales más empleados en los recubrimientos son el cromo, el níquel y el cobre. Si deseamos niquelar un metal, hacemos pasar una corriente de 10 A a través de una solución de sulfato de níquel (II) durante 5 horas. ¿Cuál es la cantidad de níquel, en gramos, utilizada en este proceso? <br>Dato: Ni: 58 uma Faraday = 96 500 \\(\\frac{C}{eq-g}\\)",
		A: "60,4",
		B: "20,5",
		C: "44,3",
		D: "54,1",
		E: "30,2",
		Correct: "D"
	},
	{
		name: "SM2016iBCE94",
		subject: "Chemistry",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En una práctica de laboratorio, se necesita producir \\(\\mathrm{CO_2(g)}\\) para lo cual, en un reactor adecuado, se hace reaccionar 50 g de \\(\\mathrm{CaCO_3}\\)(s) con 200 mL de HCl 2M. La reacción que se produce es <br>\\(\\ce{CaCO_3(s) +HCl_(ac) -> CaCl_2(ac) +CO_2(g) +H2O_(l)}\\) <br>Calcule la cantidad, en moles, de \\(\\mathrm{CO_2(g)}\\) producida e indique el reactivo limitante. <br>Datos Ca: 40 uma, C: 12 uma, O: 16 uma, Cl: 35,5 uma H: 1 uma",
		A: "0,50 \\(\\mathrm{HCl_(ac)}\\)",
		B: "0,40 \\(\\mathrm{CaCO_3(s)}\\)",
		C: "0,20 \\(\\mathrm{CaCO_3(s)}\\)",
		D: "0,40 \\(\\mathrm{HCl_(ac)}\\)",
		E: "0,20 \\(\\mathrm{HCl_(ac)}\\)",
		Correct: "E"
	},
	{
		name: "SM2016iBCE95",
		subject: "Biology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La dieta nutricional de Juan se compone generalmente de carbohidratos, lípidos, proteínas, vitaminas y minerales. Si, por un problema de salud, a Juan se le retira quirúrgicamente la vesícula biliar, el médico le restringirá en la dieta, sobre todo, el consumo de",
		A: "arroz blanco.",
		B: "mantequilla.",
		C: "verduras.",
		D: "carne de pescado.",
		E: "frutas.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE96",
		subject: "Biology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "A un hombre que laboraba como leñador, mientras talaba un árbol, se le introdujo una astilla con tierra. Si a pocas horas del accidente se le realizara un análisis de sangre, se observaría _ en la zona de infección.",
		A: "el incremento de los neutrófilos",
		B: "a disminución de los eritrocitos",
		C: "el incremento de los linfocitos B",
		D: "la producción de plasmocitos",
		E: "el incremento de anticuerpos",
		Correct: "A"
	},
	{
		name: "SM2016iBCE97",
		subject: "Biology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "El dengue es una enfermedad viral transmitida a través de la picadura del mosquito Aedes <i>aegypti</i>. En el Perú, el dengue se ha extendido a dieciseis regiones, según la Dirección General de Epidemiología. Para prevenir la enfermedad, el Ministerio de Salud ha tomado como medida",
		A: "a inmunización contra el dengue.",
		B: "la eliminación del virus del dengue.",
		C: "la erradicación mediante antibióticos.",
		D: "el control del mosquito.",
		E: "a fumigación del virus del dengue.",
		Correct: "D"
	},
	{
		name: "SM2016iBCE98",
		subject: "Biology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Los cuclillos, también conocidos como cucos, incluyen varias especies de pájaros que, como el cuco común (<i>Cuculus canorus</i>), depositan sus huevos en el nido del ave carricero común (<i>Acrocephalus scirpaceus</i>) para la cría de sus polluelos. Al poco tiempo de eclosionar, el polluelo expulsa los huevos y pollos del hospedador quedándose solo en el nido. Se puede concluir que esta es una relación interespecífica denominada",
		A: "parasitismo.",
		B: "comensalismo.",
		C: "amensalismo.",
		D: "depredación.",
		E: "cooperación.",
		Correct: "A"
	},
	{
		name: "SM2016iBCE99",
		subject: "Biology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La rabia es una enfermedad que se transmite por la mordedura de un animal rabioso. Cuando una persona es mordida en la cara por un perro con sospecha de rabia, se debe tomar como medida inmediata la",
		A: "inmunización activa con anticuerpos.",
		B: "inmunización activa con antisuero.",
		C: "aplicación de fuertes antibióticos.",
		D: "captura y el sacrificio del animal.",
		E: "inmunización pasiva con antisuero.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE100",
		subject: "Biology",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La anemia falciforme es una enfermedad genética con presencia de glóbulos rojos de forma semilunar que pierden flexibilidad y provocan accidentes cerebrovasculares, daño a los órganos y dolor recurrente en las piernas. Lo anterior se debe a que estos glóbulos rojos",
		A: "bloquean las arterias pequeñas.",
		B: "bloquean las arterias grandes.",
		C: "interrumpen señales nerviosas.",
		D: "interrumpen el paso de la linfa.",
		E: "son ricos en dióxido de carbono.",
		Correct: "A"
	}
]
var addQuestions = [
    {
		name: "SM2016iBCE101",
		subject: "Peruvian History",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el siglo XVIII, España hizo frente a una grave crisis económica, motivo por el cual inició una política de reformas, denominadas reformas borbónicas, con la finalidad de captar mayores ingresos. Una de estas fue la legalización del reparto de mercancías en las comunidades indígenas. El objetivo de esta medida fue",
		A: "fomentar la exportación de materias primas y potenciar la industria americana.",
		B: "garantizar el ingreso fiscal mediante estancos de la sal, coca, tabaco y mercurio.",
		C: "impulsar el comercio interno de sus colonias y garantizar sus exportaciones.",
		D: "fortalecer la influencia de los criollos en las decisiones respecto al comercio.",
		E: "consolidar el contrabando de mercaderías a las colonias americanas.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE102",
		subject: "Peruvian History",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Las conspiraciones limeñas, a inicios del siglo XIX, no constituyeron un serio peligro para el poder colonial español debido a que",
		A: "estaban aisladas de otros sectores sociales.",
		B: "las conformaron criollos y mestizos.",
		C: "tenían el apoyo de rebeliones provincianas.",
		D: "participaron las comunidades indígenas.",
		E: "propiciaron la manumisión de los esclavos.",
		Correct: "A"
	},
	{
		name: "SM2016iBCE103",
		subject: "World History",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Durante el siglo IX, Europa occidental fue asolada por continuas invasiones que crearon un clima de inestabilidad e inseguridad, lo que produjo el descrédito de la monarquía y la fragmentación del poder. Esto hizo posible",
		A: "el desarrollo de las ciudades.",
		B: "los viajes de exploración.",
		C: "las guerras religiosas.",
		D: "el surgimiento del feudalismo.",
		E: "el inicio de las cruzadas",
		Correct: "D"
	},
	{
		name: "SM2016iBCE104",
		subject: "World History",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Durante el siglo XX, se produjeron en Europa el fracaso de las democracias y el surgimiento de regímenes totalirarios. Estos procesos se dieron",
		A: "al inicio de la Primera Guera Mundial.",
		B: "antes de las guerras balcánicas.",
		C: "durante el periodo de entre guerras.",
		D: "durante el periodo de la Guerra Fría.",
		E: "en la llamada Belle Époque.",
		Correct: "C"
	},
	{
		name: "SM2016iBCE105",
		subject: "Geography",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "La descentralización creó centros de decisión sobre el desarrollo local y regional. Para tal efecto, se transfirieron derechos y rentas del Gobierno central con la finalidad de realizar inversiones y obras. A partir de esta transferencia, ¿en qué componentes se deben observar los beneficios sociales? <br>I. Una mejor organización territorial <br>II. Una disminución de los conflictos y reclamos <br>III. La mejor distribución de la población <br>IV. Un adecuado manejo del medio ambiente",
		A: "III y IV",
		B: "I y II",
		C: "I y III",
		D: "I y IV",
		E: "II y III",
		Correct: "?????"
	},
	{
		name: "SM2016iBCE106",
		subject: "Geography",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "Cada cierto tiempo, nuestro planeta, en constante movimiento, altera drásticamente su ritmo, originando una serie de fenómenos naturales intensos o extremos. En este contexto, afirmamos que un fenómeno natural como El Niño se transforma en catástrofe cuando <br>I. solo afecta áreas naturales despobladas. <br>II. destruye la flora y fauna silvestre. <br>III. arrasa zonas eriazas sin capacidad de uso. <br>IV. hay muchas pérdidas de vidas humanas.",
		A: "solo I",
		B: "solo II",
		C: "II y III",
		D: "solo IV",
		E: "I y III",
		Correct: "D"
	},
	{
		name: "SM2016iBCE107",
		subject: "Economics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "A diferencia de las ciudades del interior del país, la actividad económica en Lima presenta una mayor división del trabajo. Este rasgo económico permite la _ e intensifica la _.",
		A: "especialización - inflación",
		B: "ganancia - inflación",
		C: "especialización - productividad",
		D: "rentabilidad - inflación",
		E: "ganancia - deflación",
		Correct: "C"
	},
	{
		name: "SM2016iBCE108",
		subject: "Economics",
		sub_subject: "",
		prompt: false,
		image: false,
		question: "En el Perú, el sector minero es considerado importante porque, principalmente,",
		A: "absorbe mano de obra.",
		B: "genera divisas.",
		C: "transfiere tecnología.",
		D: "necesita capital humano.",
		E: "demanda insumos.",
		Correct: "B"
	},
	{
		name: "SM2016iBCE109-110",
		subject: "Philosophy",
		sub_subject: "",
		prompt: 'Lee el siguiente texto y, a continuación, responde las preguntas 109 y 110. <br>"Quizá también Solón se expresaba bien cuando decía que el hombre feliz era aquel que, provisto moderadamente de bienes exteriores, hubiera realizado las más nobles acciones y hubiera vivido una vida moderada, pues es posible practicar lo que se debe con bienes moderados. También parece que Anaxágoras no atribuía al hombre feliz ni riqueza ni poder, al decir que no le extrañaría que el hombre feliz pareciera un extravagante al vulgo, pues este juzga por los signos externos, que son los únicos que percibe. Las opiniones de los sabios, entonces, parecen estar en armonía con nuestros argumentos. Pero, mientras estas opiniones merecen crédito, la verdad es que, en los asuntos prácticos, se juzga por los hechos y por la vida, ya que en estos son lo principal". <br><font size="2">Aristóteles (1985). <i>Ética nicomáquea</i>. X, 8.</font>',
		image: false,
		question: "Para Aristóteles, aunque Solón y Anaxágoras coincidían con su punto de vista, la felicidad",
		A: "corresponde a una reflexión de carácter polémico.",
		B: "solo se consigue poseyendo muchos bienes.",
		C: "es un asunto que divide la opinión filosófica.",
		D: "permite acometer las más nobles acciones.",
		E: "es un tema que se decide de forma práctica.",
		Correct: "E"
	},
	{
		name: "SM2016iBCE110",
		subject: "Philosophy",
		sub_subject: "",
		prompt: "SM2016iBCE109-110",
		image: false,
		question: "Según Aristóteles, la imagen que Anaxágoras tenía del hombre feliz resultaría extraña, pues",
		A: "nadie puede vivir sin riqueza ni poder.",
		B: "el vulgo valora solo la apariencia.",
		C: "es imposible llevar una vida moderada.",
		D: "casi nadie argumenta sobre ética.",
		E: "los filósofos nunca están de acuerdo.",
		Correct: "B"
	}
]