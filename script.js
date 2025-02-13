const mensajes = {
    aburrida: {
        titulo: "Ábreme cuando estés aburrida",
        contenido: "Si estás leyendo esto, es porque ni Instagram ni Youtube han conseguido entretenerte... ¡pero aquí estoy yo para salvarte del aburrimiento! <br><br>Este es un cupón válido para ver la película o serie que más te apetezca, sin objeciones y sin importar que esté haciendo, o jugar a lo que quieras. Todo sea por hacerte sonreír y pasar tiempo contigo.<br><br>¿Qué dices mi amor, aceptas mi oferta? 😊"
    },
    sorpresa: {
        titulo: "Ábreme cuando quieras una sorpresa",
        contenido: "¡Sorpresa! 🎉 Hoy no necesitas un motivo especial para recibir un regalito. Solo quiero recordarte lo especial que eres para mí y lo mucho que te amo y siempre me encanta verte sonreír y hacerte feliz.<br><br> Así que... abre el paquetito numero 1 😊"
    },
    triste: {
        titulo: "Ábreme cuando estés triste",
        contenido: "Mi amor, sé que hay días en los que todo parece que te sale mal, en los que parece que el peso del cae más fuerte sobre tus hombros. Pero quiero que recuerdes algo: no estás sola, desde hace ya varios años me tienes aqui a tu lado para lo que necesites mi princesa. Yo estoy aquí, siempre y da igual lo que esté haciendo, tu eres mas importante que todo. Eres más fuerte de lo que crees y yo se que puedes con esto y con muchisimo más y cuando uno está triste hay dias que uno solo necesita hablar y sentirse escuchado, ¿Por qué no me llamas y hablamos? 📲 .<br><br> Respira profundo, cierra los ojos y hablemos, cuentame todo lo que pasa por esa cabecita, cuentame sin pensar, deja a tu mente desahogarse y expresarse.<br><br> Nunca olvides lo mucho que te amo mi amor hermoso 🤍",
        imagen: "assets/triste.jpg",
        audio: "assets/bestpart.mp3"
    },
    feliz: {
        titulo: "Ábreme cuando estés feliz",
        contenido: "Me encanta verte feliz y saber que estás así. Estoy deseando que me llames y me cuentes todo, ver esa carita preciosa y esa sonrisa hermosa que tienes, me encantas y cuando te veo feliz o contenta puedo haber tenido un dia de mierda que vas a hacer que mejore solo por verte y escucharte feliz.<br><br> Te amo mi amor 🤍",
        imagen: "assets/feliz.jpg"
    },
    extrañes: {
        titulo: "Ábreme cuando me eches de menos",
        contenido: "Yo también te echo mucho de menos mi amor hermoso. ¿Qué tal si hacemos algo juntos? Podemos hacer una videollamada, ver una peli al mismo tiempo o jugar a algo. Así, aunque no podamos estar físicamente juntos, estaremos más cerca el uno del otro. Dime qué te apetece y lo hacemos.<br><br> Te amo. 🤍",
        imagen: "assets/juntos.jpg"
    },
    regla: {
        titulo: "Ábreme cuando tengas la regla",
        contenido: "Sé que hoy estás más sensible y que te apetece más que nunca que estemos juntos. Como no puede ser, te tengo un pequeño detalle: abre el regalo número dos. 🎁 Además, quiero que pasemos tiempo juntos, aunque sea a la distancia.<br><br> ¿Qué te parece si vemos El castillo ambulante o jugamos a algo? Lo que tú prefieras, mi vida. <br><br>Te amo. 🤍"
    },
    insomnio: {
        titulo: "Ábreme cuando no puedas dormir",
        contenido: "Si estás leyendo esto, es porque no puedes dormir. Y sé que, por muchas veces que te lo haya dicho, no me vas a llamar porque no quieres despertarme. Pero quiero que sepas que siempre puedes hacerlo, mi amor. Como sé que te cuesta conciliar el sueño, te dejo aquí un podcast que espero que te guste y te ayude a relajarte.<br><br> Escúchalo con los ojitos cerrados y deja que tu mente descanse poquito a poco. <br><br>Te amo mi vida, descansa. 🤍😴✨",
        podcastLink: "https://open.spotify.com/episode/2eqY3aoeUJ9S5bu1bDRBgy?si=a01dffdb69834f5f"
    },
    apoyo: {
        titulo: "Ábreme cuando necesites apoyo emocional",
        contenido: "A veces la vida pesa más de lo normal, pero no tienes que cargar con todo sola. Desde hace ya varios años, me tienes aquí para ti. Estoy para escucharte, para abrazarte, para recordarte que todo estará bien. Si necesitas desahogarte y llorar en mi hombro, aquí estaré, sin decir nada si así lo prefieres, solo acompañándote. <br><br>Por favor, nunca pienses que estás sola, porque somos tú y yo juntos siempre contra cualquier problema. Sé que puedes con todo, que eres fuerte y valiente. Y sé que superarás esto y mucho más, porque de lugares peores hemos salido. Pero mientras tanto, apóyate en mí.<br><br> No tienes que enfrentarlo sola, yo estaré aquí, en cada paso, siempre para ti.<br><br> Te amo, mi vida. 🤍",
        imagen: "assets/juntos2.jpg"
    },
    "mal-dia": {
        titulo: "Ábreme cuando tengas un mal día",
        contenido: "Si estás leyendo esto, probablemente tu día no haya sido el mejor.<br><br> Quizás algo pasó que hizo que todo se sintiera difícil, pero quiero que sepas que no estás sola. Todos tenemos esos días donde todo parece ir mal, pero estoy aquí para ti. Quiero alegrarte de alguna forma, porque sé que te lo mereces. 🌟 Abre el regalo número 3. <br><br> Sé que quizás no todo se solucione de inmediato, pero estoy aquí para lo que necesites. Si quieres hacer una videollamada, ver algo que te guste o incluso jugar un rato para distraerte y mejorar el día, no dudes en decirmelo mi amor. <br><br>Estoy aquí para para escucharte, reír juntos o simplemente estar ahí en silencio si eso es lo que necesitas.Recuerda que los malos días pasan, y que siempre puedes contar conmigo. <br><br>Te quiero mucho, y siempre estaré aquí para ti mi princesa. 🤍"
    },
    enojada: {
        titulo: "Ábreme cuando estés enfadada conmigo",
        contenido: "Siento si he hecho o dicho algo que te haya molestado, mi vida. De verdad, te pido perdón.<br><br> No me gusta verte enfadada ni mucho menos que estemos mal por algo que hablando se puede solucionar. Si la he cagado, lo lamento de corazón. Sabes que siempre prefiero hablarlo y solucionarlo antes que callarlo y que sea peor, porque no me gusta irme a dormir con ninguno de los dos mal o enfadado. <br><br>Estoy aprendiendo a amar, y a veces fallo, pero siempre quiero mejorar y ser mi mejor versión para ti, solo tenme paciencia y cariño por favor mi vida 🤍. Llámame cuando estés lista, hablemos y resolvámoslo juntos. <br><br>Te amo y siempre voy a estar aqui para ti y junto a ti Clarisa. 🤍"
    },
    abrazo: {
        titulo: "Ábreme cuando necesites un abrazo",
        contenido: "Si pudiera, te daría un abrazo lleno de paz, como esos que tanto nos encantan. Pero por desgracia, no estoy ahí contigo ahora mismo.<br><br> Sin embargo, quiero ofrecerte algo: abre el regalo número 4 y hechalo en una sudadera o almohada, para que así, cuando estés cerca, sientas un poquito de mí cerca de ti. <br><br> Siempre estoy aquí para ti, incluso cuando no puedo estar físicamente. <br><br>Te amo mi amor🤍",
        imagen: "assets/abrazo.jpg"
    },
    especial: {
        titulo: "Ábreme cuando quieras recordar lo especial que eres para mí",
        contenido: "Desde el día en que te conocí, supe que eras alguien única y que ibas a ser muy importante para mi en un futuro. Estuvimos tanto tiempo conociéndonos, y aunque no fue hasta el momento adecuado que nos convertimos en algo más, nuestra conexión siempre fue diferente. Desde el principio sentí que había algo especial entre nosotros, como si estuviéramos destinados a estar juntos. Eso me hizo darme cuenta de que eras tú, la persona con la que quería pasar toda mi vida.<br><br> Eres mi persona favorita, mi alegría, mi paz y mi amor más grande. No hay un solo día en que no me sienta agradecido por tenerte en mi vida, y me siento afortunado de poder compartir mis días contigo, tantos momentos juntos y experiencias. Me encanta que seas lo primero en lo que pienso cuando me despierto por la mañana y lo último antes de dormir. Nunca olvides lo increíble que eres y cuánto significas para mí.<br><br> Todo lo que hemos vivido juntos hasta ahora ha sido muy bonito, pero lo mejor aún está por venir, nos queda tanto por vivir juntos, tantas experiencias, desafios y anecdotas que estoy deseando que pasen para poder pasarlas a tu lado. Me hace muy feliz pensar en todo lo que nos queda por vivir, por cada nuevo día que pasaremos juntos, por los sueños que compartiremos y por todo lo que aprenderemos el uno del otro.<br><br> Quiero agradecerte de todo corazón por todo lo que has hecho por mí, has sido una ayuda y un soporte constante, ayudándome a mejorar cada día, tanto conmigo mismo como contigo. Gracias por apoyarme, por creer en mí incluso cuando yo no lo hacía, y por estar a mi lado en cada paso que daba. Te prometo que me importas más que mi propia vida, y que siempre estaré aquí para ti, en cada momento, en cada sonrisa y en cada desafío.<br><br> Te quiero Clarisa Montes Miranda🤍"
    },
    encima: {
        titulo: "Ábreme cuando sientas que todo se te viene encima",
        contenido: "Tómate un respiro, mi vida. Sé que hay momentos en los que todo parece venir encima de repente, como si las cosas se acumularan sin descanso. Pero quiero que sepas que no tienes que enfrentarlo todo de golpe, ni resolverlo todo en un solo día. No hay prisa. La vida se enfrenta paso a paso, con calma, y tú no tienes que cargar con todo eso sola.<br><br> Recuerda que en todo momento, aunque no siempre lo vea todo claro, estoy aquí para ti. Estoy aquí para escucharte cuando necesites desahogarte, para abrazarte cuando sientas que te faltan fuerzas, y para apoyarte en cada uno de esos pasos que tomes, por pequeños que parezcan. Si necesitas descansar, si necesitas una ayuda o un consejo, no dudes en pedírmelo. Es importante que sepas que no estás sola.<br><br> Me importa tanto verte bien y que te sientas tranquila. Juntos podemos con todo, no importa lo que venga. No tienes que enfrentarlo todo de una vez, y si alguna vez necesitas soltar algo, quiero que sepas que siempre estoy dispuesto a ayudarte a cargar con lo que haga falta. Aquí estaré, a tu lado, para darte todo el apoyo, amor y paciencia que necesites. No importa si es hoy, mañana o en una semana; siempre contarás conmigo para que no tengas que cargar con todo el peso sola.<br><br> Te amo más de lo que las palabras pueden expresar, y aunque los días sean difíciles, quiero que recuerdes que todo lo que pase tiene un final, y nosotros vamos a pasar por esto juntos. Porque eres fuerte, pero también mereces sentir que tienes un lugar donde descansar, donde apoyarte, y yo quiero ser ese lugar para ti.<br><br> Te amo mi princesa hermosa 🤍"
    },
    insegura: {
        titulo: "Ábreme cuando te sientas insegura por algo",
        contenido: "Mi amor, si supieras lo increíble que eres, nunca dudarías de ti misma. Pero como yo sí lo sé, déjame recordártelo: eres hermosa, inteligente, fuerte y capaz de lograr todo lo que te propongas. Confía en ti, porque yo confío en ti más de lo que imaginas. Y si alguna vez necesitas una prueba de lo especial que eres, aquí estaré para recordártelo las veces que haga falta. Te amo mi amor🤍"
    },
    "no-hablar": {
        titulo: "Ábreme cuando estés triste y no quieras decirmelo",
        contenido: "Sé que hay momentos en los que prefieres guardar para ti lo que sientes, y está bien si no quieres hablar. No tienes que decirme nada si no lo deseas, pero quiero que sepas que estoy aquí para ti, siempre. Estoy aquí para escucharte, para acompañarte, para ser ese apoyo que necesitas, sin importar si hoy las palabras no fluyen.<br><br>Si en algún momento sientes que la tristeza se apodera de ti y no sabes cómo expresarlo, quiero que sepas que no estás sola. Aunque no lo digas, yo lo siento, y estaré aquí esperando, dispuesto a ofrecerte todo lo que necesites, ya sea un abrazo, una conversación en silencio o simplemente un rato de compañía.<br><br>Me importa tanto que estés bien, y siempre quiero que sepas que puedes contar conmigo, incluso cuando las palabras se quedan cortas o el ánimo no está para compartirlas. No importa si hoy o mañana, si decides hablar o quedarte en silencio, yo estaré aquí.<br><br>Te amo profundamente, y aunque no siempre pueda entender todo lo que llevas dentro, quiero que sepas que siempre me importas más de lo que las palabras pueden expresar. Estoy aquí para ti en cada momento, en cada emoción, y en cada paso. Quiero verte bien, siempre Clarisa y haré lo que sea necesario para verte feliz. 🤍"
    }
};

function abrirSobre(tipo) {
    const mensaje = mensajes[tipo];
    document.getElementById("titulo").textContent = mensaje.titulo;
    document.getElementById("contenido").innerHTML = mensaje.contenido;

    const imagen = document.getElementById("imagen");
    const audio = document.getElementById("audio");

    if (mensaje.imagen) {
        imagen.src = mensaje.imagen;
        imagen.style.display = "block";
        imagen.style.maxWidth = "300px";
        imagen.style.maxHeight = "300px";
        imagen.style.width = "auto";
        imagen.style.height = "auto";
        imagen.style.margin = "10px auto";
    } else {
        imagen.style.display = "none";
    }

    if (mensaje.audio) {
        audio.src = mensaje.audio;
        audio.style.display = "block";
        audio.style.margin = "10px auto";
    } else {
        audio.style.display = "none";
    }

    document.getElementById("mensaje").style.display = "block";
    document.querySelector(".sobres").classList.add("blur");

    const contenido = document.getElementById("contenido");

    const oldButton = document.getElementById("podcastButton");
    if (oldButton) {
        oldButton.remove();
    }

    if (mensaje.podcastLink) {
        const botonPodcast = document.createElement("a");
        botonPodcast.href = mensaje.podcastLink;
        botonPodcast.target = "_blank";
        botonPodcast.textContent = "Ir al podcast";
        botonPodcast.id = "podcastButton";
        botonPodcast.style.display = "block";
        botonPodcast.style.marginTop = "10px";
        botonPodcast.style.padding = "10px";
        botonPodcast.style.background = "#d63384";
        botonPodcast.style.color = "white";
        botonPodcast.style.textAlign = "center";
        botonPodcast.style.borderRadius = "5px";
        botonPodcast.style.textDecoration = "none";
        botonPodcast.style.fontWeight = "bold";

        contenido.appendChild(botonPodcast);
    }
}

function cerrarMensaje() {
    document.getElementById("mensaje").style.display = "none";
    document.querySelector(".sobres").classList.remove("blur");
}