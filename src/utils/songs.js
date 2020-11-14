import nazare from '../mp3/nazare.mp3'
import gosudarstvo from '../mp3/gosudarstvo.mp3'
const songs = [
  {
    title: "Test-title",
    musician: "test-musician",
    id: '1',
    poet: "test-poet",
    audio: nazare,
    lyrics: `test-lyrics`,
    cover: "",
    videoUrl: ""
  },
  {
    title: "На заре",
    musician: "Монеточка",
    id: '2',
    poet: "Альянс",
    audio: nazare,
    lyrics: `Ровный бег моей судьбы
    Ночь, печаль и блеск души
    Лунный свет и майский дождь
    В небесах
    Долгий век моей звезды
    Сонный блеск земной росы
    Громкий смех и райский мед
    В небесах`,
    cover: "../images/cover.png",
    videoUrl: "https://youtu.be/BvJle-E_4JI"
  },
  {
    title: "Государство",
    musician: "Гражданская оборона",
    id: '3',
    poet: "Егор Летов",
    audio: gosudarstvo,
    lyrics: `Ржавый бункер - моя свобода
    Сладкий пряник засох давно
    Сапогом моего народа
    Старшина тормозит говно.

    Запрятанный за углом
    Убитый помойным ведром
    Добровольно ушедший в подвал
    Заранее обреченный на полнейший провал`,
    cover: "../images/cover.png",
    videoUrl: ""
  },
  {
    title: "",
    musician: "",
    id: '4',
    poet: "",
    audio: "",
    lyrics: ``,
    cover: "",
    videoUrl: ""
  }
];

export { songs };
