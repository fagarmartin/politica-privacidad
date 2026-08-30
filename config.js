/* Configura los datos de la política de privacidad.
   Cambia estos valores cuando lo necesites: la misma página sirve para todos tus juegos.
   Los textos traducibles están en el objeto "i18n", con las secciones según la estructura de index.html. */

var PRIVACY_CONFIG = {
  // Nombre del juego. Déjalo en blanco ("") para no mostrar un título personalizado.
  gameName: "",

  // Fecha de la última actualización (formato AAAA-MM-DD, o texto libre).
  lastUpdated: "2026-08-30",

  // Correo de contacto para dudas sobre privacidad.
  contactEmail: "info.frozendreams@gmail.com",

  // Etiqueta del selector de idioma.
  languageLabel: {
    es: "Idioma:",
    en: "Language:"
  },

  // Traducciones. Cada sección de index.html se identifica por su "data-i18n".
  i18n: {
    es: {
      title: "Política de Privacidad",
      lastUpdatedPrefix: "Última actualización:",
      intro: [
        "Esta política de privacidad explica cómo se maneja la información cuando juegas a {Juego}.",
        "Al instalar y utilizar nuestro juego aceptas las prácticas descritas a continuación."
      ],
      sections: {
        "s1": { title: "1. Información que recopilamos", paragraphs: [
          "Nuestro juego funciona como una aplicación instalada en tu dispositivo y <strong>no recopila ningún dato personal</strong>. No te pedimos nombre, correo electrónico, ni ningún otro dato que permita identificarte."
        ] },
        "s2": { title: "2. Guardado de partida en tu dispositivo", paragraphs: [
          "Para recordar tu progreso en la partida, nuestro juego guarda los datos <strong>localmente en tu propio dispositivo</strong> (en el almacenamiento interno de la aplicación).",
          "Estos datos (como tu progreso, decisiones tomadas, finales desbloqueados o configuraciones) permanecen únicamente en tu dispositivo. <strong>No se envían a ningún servidor</strong> y no podemos acceder a ellos. Puedes eliminarlos en cualquier momento:"
        ], list: [
          "borrando los datos o la caché de la aplicación desde los ajustes de tu dispositivo, o",
          "desinstalando la aplicación."
        ] },
        "s3": { title: "3. Permisos, cookies y analítica", paragraphs: [
          "Nuestro juego <strong>no solicita permisos especiales</strong> de tu dispositivo, <strong>no utiliza cookies</strong> ni herramientas de análisis de tráfico. No realizamos ningún seguimiento de tu actividad."
        ] },
        "s4": { title: "4. Enlaces a terceros", paragraphs: [
          "Nuestro juego puede contener enlaces a sitios web de terceros. No somos responsables de las políticas de privacidad de dichos sitios, por lo que te recomendamos revisar sus propias políticas."
        ] },
        "s5": { title: "5. Seguridad", paragraphs: [
          "Al no recopilar ni almacenar datos personales en nuestros servidores, no existe riesgo de filtración de información personal por nuestra parte. La seguridad de los datos guardados localmente depende de tu propio dispositivo."
        ] },
        "s6": { title: "6. Menores de edad", paragraphs: [
          "Nuestro juego puede ser utilizado por personas de todas las edades. Dado que no recopilamos datos personales, esta política se aplica por igual a todos los usuarios."
        ] },
        "s7": { title: "7. Cambios en esta política", paragraphs: [
          "Podemos actualizar esta política de privacidad ocasionalmente. Los cambios se publicarán en esta misma página, junto con la fecha de la última actualización."
        ] },
        "s8": { title: "8. Contacto", paragraphs: [
          "Si tienes preguntas sobre esta política de privacidad, puedes ponerte en contacto con nosotros en:"
        ] }
      }
    },
    en: {
      title: "Privacy Policy",
      lastUpdatedPrefix: "Last updated:",
      intro: [
        "This privacy policy explains how information is handled when you play {Juego}.",
        "By installing and using our game you agree to the practices described below."
      ],
      sections: {
        "s1": { title: "1. Information we collect", paragraphs: [
          "Our game works as an application installed on your device and <strong>does not collect any personal data</strong>. We do not ask for your name, email address, or any other information that could identify you."
        ] },
        "s2": { title: "2. Game save on your device", paragraphs: [
          "To remember your progress, our game stores data <strong>locally on your own device</strong> (in the app's internal storage).",
          "This data (such as your progress, choices made, unlocked endings, or settings) remains only on your device. <strong>It is not sent to any server</strong> and we cannot access it. You can delete it at any time:"
        ], list: [
          "by clearing the app's data or cache in your device settings, or",
          "by uninstalling the app."
        ] },
        "s3": { title: "3. Permissions, cookies and analytics", paragraphs: [
          "Our game <strong>does not request special permissions</strong> from your device, <strong>uses no cookies</strong> and no traffic analytics tools. We do not track your activity in any way."
        ] },
        "s4": { title: "4. Third-party links", paragraphs: [
          "Our game may contain links to third-party websites. We are not responsible for the privacy policies of those sites, so we recommend you review their own policies."
        ] },
        "s5": { title: "5. Security", paragraphs: [
          "Since we do not collect or store personal data on our servers, there is no risk of personal information leaks on our part. The security of locally stored data depends on your own device."
        ] },
        "s6": { title: "6. Minors", paragraphs: [
          "Our game can be used by people of all ages. Since we do not collect personal data, this policy applies equally to all users."
        ] },
        "s7": { title: "7. Changes to this policy", paragraphs: [
          "We may update this privacy policy from time to time. Changes will be posted on this same page, along with the date of the last update."
        ] },
        "s8": { title: "8. Contact", paragraphs: [
          "If you have questions about this privacy policy, you can contact us at:"
        ] }
      }
    }
  }
};
