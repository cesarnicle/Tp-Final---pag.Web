const personajes = [
    {
        "name": "Bhuoso",
        "image": "https://i.postimg.cc/gkhYL3L1/bhuoso.jpg",
        "description": "Un majestuoso depredador que presenta la masa y garras de un enorme oso con el plumaje y la testa de una lechuza. Caza de noche aprovechando sus desarrollados sentidos y da cuenta de sus presas con su pico y zarpas."
    },
    {
        "name": "Caballero",
        "image": "https://i.postimg.cc/59RBHBdB/Guardia-real-de-Zomoria.jpg",
        "description": "Los caballeros son guerreros que juran servicio a gobernantes, órdenes religiosas y causas nobles. El alineamiento de un caballero determina lo honorable de su juramento. Cuando asume una misión o patrulla por un reino, un caballero suele viajar con un séquito que incluye escuderos y mercenarios plebeyos."
    },
    {
        "name": "Hombre Oso",
        "image": "https://i.postimg.cc/TwC1bZd3/hombre-oso.jpg",
        "description": "Un humanoide peludo, dotado de grandes músculos y cabeza de oso. De entre todos los licántropos, este es el único que controlar su naturaleza bestial, volviéndose una criatura solitaria que evita el contacto por miedo a dañar a inocentes."
    },
    {
        "name": "Wendigo",
        "image": "https://i.postimg.cc/DZzG0Zxp/wendigo.jpg",
        "description": "Las leyendas acerca del wendigo son numerosas. En varias historias, se cuenta que fue un gran cazador que se perdió en el bosque y que, por alimentarse con carne humana, fue castigado y se transformó en este monstruo con grandes manos con garras y muy ágil, que se alimenta de carne humana."
    },
    {
        "name": "Araña Goliat Gigante",
        "image": "https://i.postimg.cc/Dwd4csDY/Big-spider.jpg",
        "description": "Para atrapar a su presa, la araña gigante teje elaboradas telarañas o dispara tiras de telarañas de su abdomen. Las arañas gigantes se suelen encontrar bajo tierra, pero también construyen sus guaridas en techos o en grietas oscuras y llenas de telarañas. Tales guaridas suelen estar adornadas con capullos de telarañas que contienen a sus víctimas."
    },
    {
        "name": "Cyclope",
        "image": "https://i.postimg.cc/KvT9rG2s/Cyclope.jpg",
        "description": "Los cíclopes son gigantes tuertos que se ganan la vida a duras penas en tierras salvajes. Son una amenaza aterradora en combate debido a su tamaño y fuerza, pero a menudo pueden ser engañados por enemigos inteligentes."
    },
    {
        "name": "Dragon Metalico",
        "image": "https://i.postimg.cc/wT9VJhw3/Dragon-metalico.jpg",
        "description": "Los Dragones Metalicos son dragones, usualmente de buen alineamiento que se oponen a los dragones cromaticos, defienden su filosofia y territorio generalmente de los dragones malignos, como dice su nombre, las escamas de estos dragones está compuesta del nombre que los componen."
    },
    {
        "name": "Druida protector",
        "image": "https://i.postimg.cc/wTFkk7r2/Druida-protector.jpg",
        "description": "Los druidas viven en bosques y en otros lugares de la naturaleza apartados, donde protegen el mundo natural de los monstruos y de la intrusión de la civilización. Algunos son chamanes tribales que curan a los enfermos, rezan a los espíritus de los animales y ofrecen guía espiritual."
    },
    {
        "name": "Oso polar",
        "image": "https://i.postimg.cc/3xRFf35T/Giant-Polar-Bear-Monster.jpg",
        "description": "El oso polar u oso blanco es una especie de mamífero carnívoro de la familia de los osos."
    },
    {
        "name": "Goblin",
        "image": "https://i.postimg.cc/rwPCv7Mt/Goblin.jpg",
        "description": "Este pequeño y detestable humanoide de piel verde suele acompañar a otros trasgoides en combate, aunque su moral es baja y suelen echarse a correr cuando la situación se complica. Aunque es un combatiente mediocre, su gran número compensa esa deficiencia."
    },
    {
        "name": "Momia",
        "image": "https://i.postimg.cc/V6jq06Mj/Mummy-of-Egypt.jpg",
        "description": "Polvoriento muerto viviente que antaño fue envuelto en tiras de lino para preservar su cuerpo y animarlo siglos después como un abominable y no demasiado inteligente guardián. La momia es un vigilante de criptas dedicado a aterrorizar a los saqueadores o consumir la vitalidad de sus cuerpos con su toque ponzoñoso."
    },
    {
        "name": "Ogro",
        "image": "https://i.postimg.cc/8zNzTCk2/Ogro.jpg",
        "description": "Este gigante corto de entendederas se asemeja a un humano obeso de grandes dientes. Lleva a la espalda una enorme jabalina y blande una clava que bien podría ser un árbol pequeño."
    },
    {
        "name": "Gran Goblin",
        "image": "https://i.postimg.cc/xCzYfhXZ/gran-goblin.jpg",
        "description": "Un goblin de piel verdosa, equipado para la guerra, con una brillante espada y una cota de malla bien mantenida. Marcha junto a los suyos con disciplina marcial, trabajando en equipo como una manada de lobos para acabar con sus enemigos en el campo de batalla."
    },
    {
        "name": "Acólito",
        "image": "https://i.postimg.cc/WbXRvT93/descargar.jpg",
        "description": "Los acólitos son miembros jóvenes del clero, que normalmente responden ante un sacerdote. Realizan varias funciones en un templo y sus deidades les conceden un poder menor para lanzar conjuros."
    },
    {
        "name": "Bandido",
        "image": "https://i.postimg.cc/2S6sjMJx/Piratas-do-Paladino-Infame-Bandido.jpg",
        "description": "Los bandidos se organizan en bandas y a veces están liderados por matones, veteranos o lanzadores de conjuros. No todos los bandidos son malignos. La opresión, la sequía, la enfermedad o la hambruna pueden conducir a gentes honestas a una vida de bandidaje."
    },
    {
        "name": "Gnomo",
        "image": "https://i.postimg.cc/Gm5Z4znn/Male-Gnome-Shadow-Sorcerer-Pathfinder-2-E-PFRPG-PFSRD-DND-D-D-3-5-4-E-5-E-5th-ed-d20-fantasy.jpg",
        "description": "Este pequeño humanoide de piel gris y escaso cabello se camufla a la perfección entre las rocas, habilidad que complementa con sus trucos de magia. Aunque simpático, su pico y cerbatana dejan bien claro que sabe defenderse."
    },
    {
        "name": "Hombre lobo",
        "image": "https://i.postimg.cc/GpT6GYb8/459abb0d-d9b6-4b90-8434-e27175ef9c16.jpg",
        "description": "Un terrorífico híbrido entre humanoide y lobo, con fortísimos instintos predatorios y una ferocidad a juego con su maldad. Los hombres lobo abrazan el inmenso poder que reciben, perdiéndose en la bestialidad."
    },
    {
        "name": "Centauro",
        "image": "https://i.postimg.cc/V6jTH8rz/Roaming-Centaurs-concept-art.jpg",
        "description": "El centauro es un impresionante guerrero con tronco, cabeza y brazos de humano, pero cuerpo y patas de caballo. Se organizan en tribus que se mueven según las estaciones o siguiendo los augurios que interpretan sus oráculos y videntes, ocupando vastas extensiones salvajes donde combaten a las criaturas malignas que se topen. En combate asaetean a sus enemigos con sus arcos antes de cargar con brutalidad con sus picas en mano. Si algún enemigo sobrevive al lance inicial, dan buena cuenta de ellos gracias a la fuerza de sus patas."
    },
    {
        "name": "Hidra",
        "image": "https://i.postimg.cc/QChz2y11/i-V-z-f-l-P-1-t-L-J-l-U7-JM-13-F-L-V-M-Vv-V-J-t-i-W.jpg",
        "description": "Un extraño monstruo reptiliano, dotado de cinco cabezas similares a las de un cocodrilo que atacan con ferocidad. Su facultad más extraordinaria es la de regenerar dos cabezas por cada una que pierde: las hidras más ancianas y endurecidas tienen más de una docena."
    },
    {
        "name": "Kraken",
        "image": "https://i.postimg.cc/y6ytm7CP/Kraken.jpg",
        "description": "Pocas criaturas marinas son tan peligrosas como el titánico kraken, una pesadilla tentacular capaz de hundir los barcos más grandes y hacer frente incluso a los más poderosos dragones. Esta bestia maligna y viciosa mora en las simas más profundas del mar, y emerge impelida por oscuros instintos y los sacrificios sangrientos de quienes lo adoran como a un dios. Es entonces que trae la devastación con su poder bruto o provocando tormentas en mitad de la mar."
    },
    {
        "name": "Naga",
        "image": "https://i.postimg.cc/8CvnjSbL/Yuan-Ti-Cleric-1.jpg",
        "description": "Gigantesca serpiente de faz levemente humanoide y totalmente dedicada al mal. Suele habitar en ruinas, donde devora mortales que atrae gracias a su poderío mágico y su mordedura ponzoñosa. La naga espiritual no puede morir, pues se reconstruye en caso de ser destruida, ni necesita alimento, agua o aire."
    },
    {
        "name": "Mimico",
        "image": "https://i.postimg.cc/XJ015z2m/Legendary-Mimic-Art-Mobius-Final-Fantasy-Art-Gallery.jpg",
        "description": "A simple vista, el mimeto parece un objeto común, como una silla o un cofre, pero, cuando alguien lo toca, descubre su gran boca y una larga lengua pegajosa, capaz de arrastrar a sus dientes castañeteantes a un hombre adulto. Los mimetos son perversos emboscadores y suelen custodiar viejas guaridas o depredar en lugares abandonados."
    },
    {
        "name": "Couatl",
        "image": "https://i.postimg.cc/J0rT6BCQ/Couatl.jpg",
        "description": "El bondadoso couatl es una bella serpiente emplumada nativa de planos celestiales, donde opera como guardián de los bondadosos y castigo de los malvados. Vuela con elegancia para llevar sus bendiciones a quienes se las ganen, pues con su magia es capaz de sanar y proporcionar santuario a los más necesitados, así como juicio justo y castigo a quien albergue oscuridad en su corazón."
    },
    {
        "name": "Deva",
        "image": "https://i.postimg.cc/m26djDXQ/Turyn-the-Deva.jpg",
        "description": "Los devas son humanoides angelicales de piel ligeramente azulada que están dotados de poderosas alas de cisne capaces de levantar del suelo sus apolíneos cuerpos. Aunque hermosos, los mensajeros de los altos señores celestiales no dudan en adquirir formas mortales, de humanoides o animales, para cumplir la voluntad de sus amos. Combaten blandiendo pesadas mazas de luz solar, aunque suelen detenerse para sanar mediante sus milagrosas artes a los aliados heridos, trayendo de vuelta incluso a los muertos."
    },
    {
        "name": "Pegaso",
        "image": "https://i.postimg.cc/tT5kxCnn/New-Book-Cover-Illustration.jpg",
        "description": "Hermoso celestial similar a un caballo alado blanco, tan inteligente como un humano."
    }
]