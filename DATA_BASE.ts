/*
import { Category, Configuration, Gender, ProjectLost, Proyecto } from "./src/FIREBASE/Interface/Types"


export const CATEGORIAS: Category[] = [
    {
        title: 'JUEGOS',
        icon: IoGameController
    },
    {
        title: 'LIBROS',
        icon: IoBookSharp
    },
    {
        title: 'SERIES',
        icon: IoTvOutline
    },
    {
        title: 'COMICS',
        icon: BiSolidBookContent
    },
]

export const GENEROS: Gender[] = [
    'RPG', 'AVENTURA', 'COMEDIA', 'DRAMA', 'DUELOS', 'DESAFÍOS', 'JUEGO', 'CORTO', 'TERROR', 'SUSPENSO', 'SUPERVIVENCIA', 'GUERRA',
    'ACCIÓN', 'CÓMICO', 'EXPLÍCITO', '+18', 'NOTICIAS', 'ENTRETENIMIENTO', 'INFORMATIVO', 'MISTERIO'
]

export const PROYECTOS: Proyecto[] = [
    {
        official_title: 'Brataly',
        name_section: 'brataly',
        category: 'Juego',
        producer: { name: 'KDA/NOVA', link: 'https://www.instagram.com/kda.nova/' },
        gender: ['RPG', 'AVENTURA', 'COMEDIA'],
        release_date: '26 de junio, 2017',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.mediafire.com/file/t8kj1avpmnu2qhj/Brataly-%2528Demo0.0.12%2529_%255BReparado%255D.pptx/file',
        description: `
            Tras ser derrotado por segunda vez, Octavius sucumbe a un deseo mucho más oscuro de lo que jamás había imaginado. 
            Amenazando las ciudades limítrofes de Exe, Octavius convoca un Armagedón con la intención de acabar con el mundo. 
            Sin el poder de las gemas, Exe y sus nuevos aliados deben localizar los brazaletes esparcidos en templos antiguos antes de que transcurran tres días,
            tiempo en el cual se desencadenará el fin del mundo.
        `
    },
    {
        official_title: 'Felipe 36 World',
        name_section: 'felipe_36_world',
        category: 'Juego',
        producer: { name: 'Felipe36', link: 'https://www.youtube.com/@felipe3632' },
        gender: ['RPG', 'AVENTURA', 'COMEDIA'],
        release_date: '13 de mayo, 2017',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.mediafire.com/file/u01d1dso9pverza/Descargar_Felipe_36_world.rar/file',
        description: `
            Felipe36 lanza un nuevo videojuego inspirado en FNAF World, donde se une a sus amigos en una aventura llena de emoción y desafíos. Felipe36 y sus compañeros luchan contra enemigos inesperados y exploran territorios misteriosos, cada nivel revelando secretos y pruebas que fortalecen su unión.
        `
    },
    {
        official_title: 'GemBreaker',
        name_section: 'gembreaker',
        category: 'Juego',
        producer: { name: 'Interrogation!', link: 'https://www.youtube.com/@interrogation8432' },
        gender: ['DUELOS', 'DESAFÍO', 'CORTO'],
        release_date: '29 de julio, 2019',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.mediafire.com/file/08qbh6kyuqlfblz/GemBreakerDemo.ppsm/file',
        description: `
            De la mano de Interrogations Games! llega un épico crossover entre los miembros de Shep: ¡todos contra todos!
        `
    },
    {
        official_title: 'One night at Exe',
        name_section: 'one_night_at_exe',
        category: 'Juego',
        producer: { name: 'KDA/NOVA', link: 'https://www.instagram.com/kda.nova/' },
        gender: ['TERROR', 'SUSPENSO', 'SURVIVAL'],
        release_date: '18 de agosto, 2015',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.mediafire.com/file/8jvfn4muryz65js/One_Night_At_Gaston_Exe.ppsx/file',
        description: `
            Una misteriosa pizzería de una marca poco conocida está en busca de un guardia nocturno para una única y peculiar noche. Esteban, un joven en apuros, 
            acepta el trabajo sin imaginar el peligro que lo espera. Pronto descubrirá que más de seis animatrónicos de aspecto siniestro merodean por el local, y 
            no están simplemente programados para entretener... Su objetivo es mucho más oscuro: convertirlo en uno de ellos. Enfrentado a una lucha por la 
            supervivencia, Esteban deberá usar ingenio y coraje para sobrevivir hasta el amanecer.
        `
    },
    {
        official_title: 'Splat-War',
        name_section: 'splat_war',
        category: 'Juego',
        producer: { name: 'AlbertGames', link: 'https://www.youtube.com/@AlBerTSmInIty' },
        gender: ['DUELO', 'GUERRA', 'SUSPENSO'],
        release_date: '16 de agosto, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: '',
        description: `
            Han pasado cuatro años desde los eventos que forzaron a los Inklings a abandonar la superficie y refugiarse bajo tierra, dejando su mundo a merced del olvido.
            
            El Agente 3 ha sido enviado en una misión crucial: derrotar a los Octorianos, quienes amenazan a los Inklings y exigen que regresen a la superficie, dejando atrás 
            las cavernas que han reclamado como su hogar. Tu objetivo es claro: destruir su base para poner fin a esta guerra de una vez por todas. 
            Pero surge la pregunta: ¿quién es el verdadero villano en este conflicto?
            
            Aviso legal: Todos los derechos reservados. 
            Splat-War es una creación original de AlBerT Games y AlBerT Sminity. 
            Cualquier intento de reclamar la autoría de esta idea sin permiso constituye falsificación y violación de los derechos del autor.
        `
    },
    {
        official_title: 'Viaje de Leyendas',
        name_section: 'viaje_de_leyendas',
        category: 'Libro',
        producer: { name: 'Tiburonsaso', link: 'https://www.wattpad.com/user/Tiburonsaso' },
        gender: ['AVENTURA', 'DIVERSIÓN', 'ACCIÓN'],
        release_date: '3 de enero, 2020',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.wattpad.com/story/210153999-viaje-de-leyendas',
        description: `
            Esta historia trata sobre una gran aventura… una aventura en la que Automode Plays, Tiburón XD y Zacanayas se embarcan en una serie de desafíos y se enfrentan a numerosos problemas, todo para cumplir su misión. ¿Te unirás a ellos en esta emocionante travesía?
        `
    },
    {
        official_title: 'Contra Partes: Guerra por la línea temporal',
        name_section: 'contra_partes',
        category: 'Serie',
        producer: { name: 'Dani Pacheco 2002', link: 'https://www.youtube.com/@DaniPacheco2002' },
        gender: ['DRAMA', 'SUSPENSO', 'ACCIÓN'],
        release_date: '12 de junio, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            La historia de CONTRA-PARTES se centra en el conflicto entre dos facciones: la Resistencia YT y el Imperio YLS. Estas facciones provienen del 
            universo 2002-1, un lugar donde los sucesos históricos y la vida cotidiana son similares a nuestra realidad, pero con una pequeña diferencia: la inesperada 
            invasión del "Líder Supremo", un temible dictador que no solo busca conquistar el multiverso, sino también reordenar sus principios.
            
            CONTRA-PARTES: GUERRA POR LA LÍNEA TEMPORAL es una serie creada en Paint, dirigida, dibujada, editada y publicada por el youtuber Daniel Pacheco Castro. 
            La serie fue coescrita por Samuel Navarro Velázquez y Jim Ambrose, y distribuida por SERIES HECHAS EN PAINT.
        `
    },
    {
        official_title: 'Electry',
        name_section: 'electry',
        category: 'Serie',
        producer: { name: 'Power Blue', link: 'https://www.youtube.com/@powerblue8799' },
        gender: ['DRAMA', 'SUSPENSO', 'ACCIÓN'],
        release_date: '16 de enero, 2022',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLdwBUBrvFt_q5UPk4nHpvQCHWWsNmioe5',
        description: `
            Blue es un joven común hasta que, tras una expedición a un museo de energía nuclear, adquiere increíbles poderes eléctricos. 
            Después de salvar a la chica que ama, Blue comprende que sus habilidades no son solo para beneficio personal, sino para proteger a todos. 
            Así nace Electry, un héroe decidido a usar su poder para el bien colectivo, enfrentando nuevos retos y enemigos en su camino hacia la justicia.
        `
    },
    {
        official_title: 'Entre Mundos: Original',
        name_section: 'entre_mundos_original',
        category: 'Serie',
        producer: { name: '50_soles', link: 'https://www.instagram.com/50_soles/' },
        gender: ['AVENTURA', 'FANTASÍA', 'COMEDIA'],
        release_date: '24 de marzo, 2017',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLgces0pBagbgcR9X5M3QdyA7G7RDgPxmR',
        description: `
            José es un gato común hasta que encuentra un brazalete mágico que le permite viajar entre mundos llenos de aventuras y nuevos amigos. 
            A medida que explora estos universos, desconoce que un oscuro enemigo lo sigue, intentando apoderarse del brazalete y desatar el caos. 
            José deberá enfrentar desafíos inesperados y aprender el verdadero poder que tiene en sus manos.
        `
    },
    {
        official_title: 'NotiDani',
        name_section: 'notidani',
        category: 'Serie',
        producer: { name: 'Dani Pacheco 2002', link: 'https://www.youtube.com/@DaniPacheco2002' },
        gender: ['INFORMATIVO', 'DESCRIPTIVO', 'NOTICIA'],
        release_date: '12 de julio, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR7xmeag766ZyE8a2C3Mqkvv',
        description: `
            De la mano de DaniPacheco2002, llega NotiDani, uno de los noticieros más queridos que marcó una época en la comunidad. 
            Con cada capítulo, Dani nos llevó de la mano a través de las novedades más emocionantes, manteniéndonos siempre al tanto de los proyectos y eventos más importantes.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    },
    {
        official_title: 'Goreland',
        name_section: 'goreland',
        category: 'Serie',
        producer: { name: 'Dan ヅ Skeleton', link: 'https://www.youtube.com/@danskeleton4196' },
        gender: ['ASESINATO', 'SUSPENSO', '+18'],
        release_date: '5 de diciembre, 2016',
        intro_link: 'url',
        logo_link: 'url',
        front_page: 'url',
        gallery_link: ['url'],
        access_link: 'https://www.youtube.com/playlist?list=PLjLDgL49WCR4uKTXGnNyoQfaSbpqygnml',
        description: `
            Goreland es un universo alternativo al nuestro donde Dan, tras una serie de eventos traumáticos, pierde la cordura y desata el caos. 
            Los sucesos que marcaron su vida lo transformaron en una figura oscura y despiadada, quien, junto a sus seguidores, convierte este mundo en un auténtico infierno viviente.
        `
    }
];

export const PROYECTOS_PERDIDOS: ProjectLost[] = [
    {
        official_title: "Project Title 1",
        producer: "Producer Name 1",
        estimated_year: "2024",
        front_page: "front-page-url-1",
        description: `Description of Project Title 1`
    },
    {
        official_title: "Project Title 2",
        producer: "Producer Name 2",
        estimated_year: "2023",
        front_page: "front-page-url-2",
        description: "Description of Project Title 2"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    },
    {
        official_title: "Project Title 3",
        producer: "Producer Name 3",
        estimated_year: "2022",
        front_page: "front-page-url-3",
        description: "Description of Project Title 3"
    }
];

export const CONFIGURACION: Configuration<{ titleContent: string, imgContent: string }[] | string>[] = [{
    title: 'Cambiar Logo',
    description: 'Cambia el logotipo de la página oficial.',
    content: [{
        titleContent: 'Logo Web',
        imgContent: 'public/logos/Logo_Web.png'
    },
    {
        titleContent: 'Logo Clásico',
        imgContent: 'public/logos/Logo_Clasico.png'
    },
    {
        titleContent: 'Logo Clásico Nueva Generacion',
        imgContent: 'public/logos/Logo_Clasico_NuevaGeneracion.png'
    }]
},
{
    title: 'Cambiar Background',
    description: 'Cambia el fondo princial de la página.',
    content: [{
        titleContent: 'Universos',
        imgContent: 'public/backgrounds/background_web.png'
    },
    {
        titleContent: 'The Crystal',
        imgContent: 'public/backgrounds/background_the-crystal.png'
    },
    {
        titleContent: 'Nova Universo Alterno',
        imgContent: 'public/backgrounds/background_nova-universo-alterno.png'
    }]
},
{
    title: 'Cambiar Opacidad',
    description: 'Ajusta la opacidad del fondo.',
    content: '0.1'
}] */

