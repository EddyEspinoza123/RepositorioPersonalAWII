const { axios } = require('axios').default;
const { normalizeString, buscarOptionsAct, dataLegend } = require('../controllers').ResponseChat;
const { API_URL } = require('../database/config');

const LoadResponse = (body, legend, optionsCurrent) => {
    const message = normalizeString(body);
    let messageToSend = [];                                 //que mensaje(s) se enviará


    message.map((palabra) => {

        switch (palabra) {

            case "hola":
                if (legend !== null) {
                    return messageToSend = ["Hola de Nuevo, recuerda que enviando *menu* puedes ver las opciones"]
                }
                return messageToSend = ["Hola, Que tal!\nSoy FacciBot🤖, ¿En que puedo ayudarte?😉, puedo ayudarte con consultas relacionadas con la Facultad Ciencias Informáticas.\n\nEnvía menu para ver las opciones"]

            case "menu":

                legend = dataLegend.legend;
                optionsCurrent = buscarOptionsAct(legend, optionsCurrent)

                return messageToSend = ["Estas son las opciones que tengo para ti.\n1. Información sobre las comunidades\n2. Información de Personal Administrativo"]

            case "salir":
                messageToSend = ["Adios, ten buen resto del día. ¡Fue un placer haberte ayudado!😉"];
                legend = null;
                return optionsCurrent = [];

            default:
                const convINT = parseInt(palabra);;

                if (isNaN(convINT)) {
                    return messageToSend = [
                        "Disculpa no te entendi, te enteré mejor si ves mi menú de opciones.",
                        "Envía *menú* para ver las opciones"
                    ];
                }

                if (optionsCurrent.length === 0) {
                    return messageToSend = [
                        "Lo siento😟, No tienes mas opciones para consultar",
                        "Prueba enviando *menu* para ver mis opciones de consulta 😏."
                    ]

                } else if (optionsCurrent.length > 1) {

                    if (convINT > optionsCurrent.length || convINT < 1) {
                        return messageToSend = [
                            `⚠️No tengo ninguna *opcion ${convINT}*⚠️. Ingresa la opción correcta.`
                        ];
                    }

                    if (convINT === 1) {

                        const data = (async () => {
                            const response = await axios.get(API_URL + "/comunity");
                            let conct = "";

                            response.data.map((comunidad, index) => {
                                conct = conct + (index + 1) + ". " + comunidad.name + '\n';
                            })

                            return conct;
                        })();

                        legend = "LSt?=";
                        optionsCurrent = buscarOptionsAct(legend, optionsCurrent);

                        data
                            .then(res => {
                                if (res) {
                                    return messageToSend = [
                                        `*Comunidades de Facultad*\n¿Sobre que comunidad quieres conocer?\n\n${res}`
                                    ];
                                }
                            }).catch(err => console.log("err"));

                    } if (convINT === 2) {

                        //AGREGAR METODO DE CONSULTA PARA PERSONAL DE FACULTAD
                        const data = (async () => {
                            const response = await axios.get(API_URL + "/personal");
                            let conct = "";

                            response.data.map((personal, index) => {
                                conct = conct + (index + 1) + ". " + personal.cargo + '\n';
                            })

                            return conct;
                        })();



                        data
                            .then(res => {
                                if (res) {
                                    return messageToSend = [
                                        `El personal administrativo de la Facultad Ciencias Informáticas esta conformado por:\n(Datos ficticios - No oficiales en su totalidad)\n\nPersonal Académico:\n${res.academico}\n\nPersonal Administrativo:\n${res.admin}Vinculacion:\n${res.vinc}Practicas Pre-Profesionales:\n${res.practic}\n\nPara salir envía *salir*\n¿Deseas volver al menú? Envía *menu*`
                                    ]
                                }
                            }).catch(err => console.log("err"));

                    }

                } else if (optionsCurrent.length === 1) {
                    let allComunities;
                    let existOption = false;

                    (
                        async () => {
                            const response = await axios.get(API_URL + "/comunity");

                            return allComunities = response.data;
                        }
                    )();
                    console.log("encontro comunidad");

                    allComunities.map((comunidad, index) => {
                        const { name } = comunidad;

                        if (convINT === index + 1) {
                            existOption = true;
                            (
                                async () => {
                                    let response = await axios.get(API_URL + '/comunity/' + name);
                                    const { leader, email, cell } = response;

                                    legend = "PLño%";
                                    optionsCurrent = buscarOptionsAct(legend, optionsCurrent);

                                    return messageToSend = [
                                        `Esta es la información disponible sobre la comunidad *${name.toUpperCase()}*:\n\n🧑🏻‍💼 Representante encargado: ${leader[0]}\n\nComunicate con esta comunidad por medio de su lider al: ${cell}\nContacté por correo electrónico: ${email}\n\nSiguelos en sus redes sociales:\nFacebook: {socialmedia.fb}\nInstagram: {socialmedia.ig}\n\nPara salir envía *salir*\n¿Deseas volver al menú? Envía *menu*`
                                    ];
                                }
                            )();
                        }

                    })

                    if (!existOption) {
                        return messageToSend = [
                            `⚠️No tengo ninguna *opcion ${convINT}*⚠️. Ingresa la opción correcta.`
                        ];
                    }
                }

        }

    });

    return {
        listMessage: messageToSend,
        leg: legend,
        opts: optionsCurrent
    };

}


module.exports = LoadResponse;