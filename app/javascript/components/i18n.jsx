import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Language": "Language",
          "No teams yet.": "No teams yet.",
          "No players yet.": "No players yet.",
          "No games yet.": "No games yet.",
          "NBA Teams": "NBA Teams",
          "NBA Players": "NBA Players",
          "NBA Games": "NBA Games",
          "Game Details": "Game Details",
          "Team Games": "Team Games",
          "Conference": "Conference",
          "Division": "Division",
          "East": "East",
          "West": "West",
          "Southeast": "Southeast",
          "Southwest": "Southwest",
          "Northwest": "Northwest",
          "Atlantic": "Atlantic",
          "Central": "Central",
          "Pacific": "Pacific",
          "Teams": "Teams",
          "Players": "Players",
          "Games": "Games",
          "Position": "Position",
          "Team": "Team",
          "View Game Details": "View Game Details",
          "View Team Games": "View Team Games",
          "An informative app of the National Basketball Association.": "An informative app of the National Basketball Association.",
          "View Teams": "View Teams",
          "View Players": "View Players",
          "View Games": "View Games",
          welcome: "Hello <br/> <strong>World</strong>"
        }
      },
      pt: {
        translations: { 
          "Language": "Idioma",
          "No teams yet.": "Ainda sem equipas.",
          "No players yet.": "Ainda sem jogadores.",
          "No games yet.": "Ainda sem jogos.",
          "NBA Teams": "Equipas da NBA",
          "NBA Players": "Jogadores da NBA",
          "NBA Games": "Jogos da NBA",
          "Game Details": "Detalhes do Jogo",
          "Team Games": "Jogos da Equipa",
          "Conference": "Conferência",
          "Division": "Divisão",
          "East": "Leste",
          "West": "Oeste",
          "Southeast": "Sudeste",
          "Southeast": "Sudoeste",
          "Northwest": "Noroeste",
          "Atlantic": "Atlântica",
          "Central": "Centro",
          "Pacific": "Pacífica",
          "Teams": "Equipas",
          "Players": "Jogadores",
          "Games": "Jogos",
          "Position": "Posição",
          "View Game Details": "Ver Detalhes do Jogo",
          "View Team Games": "Ver Jogos da Equipa",
          "An informative app of the National Basketball Association.": "Uma aplicação informativa da Associação Nacional de Basketball.",
          "View Teams": "Ver Equipas",
          "View Players": "Ver Jogadores",
          "View Games": "Ver Jogos",
          welcome: "Hello <br/> <strong>World</strong>"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

