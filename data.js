/*
  MAURO'S VALUE — site data
  =============================================================================
  Everything the site shows comes from this file. One line per player.

  value   Market value in MILLIONS of euros:  45 = €45m,  12.5 = €12.5m,  0.8 = €800k
          null = not valued yet (the site shows "—").
  born    Date of birth, YYYY-MM-DD. Age is calculated from it automatically.
  nat     Nationalities as country codes: "tr" Türkiye, "br" Brazil, "gb-eng" England ...
  pos     GK  CB  LB  RB  DM  CM  AM  LM  RM  LW  RW  SS  CF
  no      Shirt number (null if the player has none yet).
  photo   Optional. Your own picture in the images/players folder, for example
          photo: "images/players/victor-osimhen.jpg"
          Without one, the player uses their free photo from photos.js if there
          is one, otherwise their initials in club colours.

  Squads as of 3 October 2026 (2026/27 season).
*/
window.GD_DATA = {
  updated: "2026-10-03",
  season: "2026/27",
  clubs: [
    {
      id: "galatasaray", name: "Galatasaray", short: "GS",
      founded: 1905, city: "İstanbul", stadium: "RAMS Park", seats: 53978,
      titles: 26,
      logo: "images/clubs/galatasaray.png",
      colors: { main: "#A6192E", second: "#FDB913", dark: "#F0566C" },
      players: [
        { no: 1,  name: "Uğurcan Çakır",          pos: "GK", born: "1996-04-05", nat: ["tr"],       value: 30 },
        { no: 24, name: "Jankat Yılmaz",          pos: "GK", born: "2004-08-16", nat: ["tr"],       value: 2 },
        { no: 19, name: "Günay Güvenç",           pos: "GK", born: "1991-06-25", nat: ["tr", "de"], value: 0.5 },
        { no: 60, name: "Arda Yılmaz",            pos: "GK", born: "2008-02-13", nat: ["tr"],       value: 0.1 },
        { no: 70, name: "Enes Emre Büyük",        pos: "GK", born: "2006-05-08", nat: ["tr"],       value: 0.2 },
        { no: 3,  name: "El Chadaille Bitshiabu", pos: "CB", born: "2005-05-16", nat: ["fr", "cd"], value: 13 },
        { no: 6,  name: "Davinson Sánchez",       pos: "CB", born: "1996-06-12", nat: ["co"],       value: 18 },
        { no: 42, name: "Abdülkerim Bardakcı",    pos: "CB", born: "1994-09-07", nat: ["tr"],       value: 10 },
        { no: 23, name: "Kaan Ayhan",             pos: "CB", born: "1994-11-10", nat: ["tr", "de"], value: 3 },
        { no: 91, name: "Arda Ünyay",             pos: "CB", born: "2007-01-18", nat: ["tr"],       value: 1 },
        { no: 4,  name: "Ismail Jakobs",          pos: "LB", born: "1999-08-17", nat: ["sn", "de"], value: 22 },
        { no: 17, name: "Eren Elmalı",            pos: "LB", born: "2000-07-07", nat: ["tr"],       value: 14 },
        { no: 88, name: "Kazımcan Karataş",       pos: "LB", born: "2003-01-16", nat: ["tr"],       value: 5 },
        { no: 90, name: "Wilfried Singo",         pos: "RB", born: "2000-12-25", nat: ["ci"],       value: 33 },
        { no: 7,  name: "Roland Sallai",          pos: "RB", born: "1997-05-22", nat: ["hu"],       value: 18 },
        { no: 18, name: "Lesley Ugochukwu",       pos: "DM", born: "2004-03-26", nat: ["fr", "ng"], value: 15 },
        { no: 34, name: "Lucas Torreira",         pos: "DM", born: "1996-02-11", nat: ["uy", "es"], value: 15 },
        { no: 99, name: "Mario Lemina",           pos: "DM", born: "1993-09-01", nat: ["ga", "fr"], value: 9 },
        { no: 5,  name: "Eyüp Aydın",             pos: "DM", born: "2004-08-02", nat: ["tr", "de"], value: 1 },
        { no: 8,  name: "Gabriel Sara",           pos: "CM", born: "1999-06-26", nat: ["br"],       value: 23.5 },
        { no: 74, name: "Renato Nhaga",           pos: "CM", born: "2007-03-27", nat: ["gw"],       value: 5 },
        { no: 20, name: "İlkay Gündoğan",         pos: "CM", born: "1990-10-24", nat: ["de"],       value: 2.5 },
        { no: 83, name: "Aleksey Batrakov",       pos: "AM", born: "2005-06-09", nat: ["ru"],       value: 34 },
        { no: 27, name: "Rafael Leão",            pos: "LW", born: "1999-06-10", nat: ["pt", "ao"], value: 47 },
        { no: 53, name: "Barış Alper Yılmaz",     pos: "LW", born: "2000-05-23", nat: ["tr"],       value: 37 },
        { no: 73, name: "Berat Luş",              pos: "LW", born: "2007-04-20", nat: ["tr"],       value: 1 },
        { no: 11, name: "Yunus Akgün",            pos: "RW", born: "2000-07-07", nat: ["tr"],       value: 22 },
        { no: 10, name: "Leroy Sané",             pos: "RW", born: "1996-01-11", nat: ["de", "fr"], value: 19 },
        { no: 29, name: "Armando Güner",          pos: "RW", born: "2008-01-07", nat: ["ar", "de"], value: 1 },
        { no: 45, name: "Victor Osimhen",         pos: "CF", born: "1998-12-29", nat: ["ng"],       value: 105 },
        { no: 21, name: "Deniz Gül",              pos: "CF", born: "2004-07-02", nat: ["tr", "se"], value: 10 },
        { no: 62, name: "Ada Yüzgeç",             pos: "CF", born: "2009-04-03", nat: ["tr"],       value: 0.5 }
      ]
    },
    {
      id: "fenerbahce", name: "Fenerbahçe", short: "FB",
      founded: 1907, city: "İstanbul", stadium: "Chobani Stadyumu Şükrü Saracoğlu", seats: 47430,
      titles: 19,
      logo: "images/clubs/fenerbahce.png",
      colors: { main: "#0E2A5C", second: "#FFD100", dark: "#FFD100" },
      players: [
        { no: 31,   name: "Ederson",            pos: "GK", born: "1993-08-17", nat: ["br", "pt"],     value: 10 },
        { no: 13,   name: "Tarık Çetin",        pos: "GK", born: "1997-01-08", nat: ["tr"],           value: 1 },
        { no: 34,   name: "Mert Günok",         pos: "GK", born: "1989-03-01", nat: ["tr"],           value: 0.5 },
        { no: 24,   name: "Jayden Oosterwolde", pos: "CB", born: "2001-04-26", nat: ["nl", "sr"],     value: 15 },
        { no: 21,   name: "Kojo Oppong",        pos: "CB", born: "2004-06-04", nat: ["gh"],           value: 8 },
        { no: 15,   name: "Nathan Aké",         pos: "CB", born: "1995-02-18", nat: ["nl", "ci"],     value: 14 },
        { no: 37,   name: "Milan Škriniar",     pos: "CB", born: "1995-02-11", nat: ["sk"],           value: 14 },
        { no: 14,   name: "Yiğit Efe Demir",    pos: "CB", born: "2004-08-02", nat: ["tr"],           value: 5 },
        { no: 3,    name: "Archie Brown",       pos: "LB", born: "2002-05-28", nat: ["gb-eng", "jm"], value: 16 },
        { no: 22,   name: "Levent Mercan",      pos: "LB", born: "2000-12-10", nat: ["tr", "de"],     value: 8 },
        { no: 18,   name: "Mert Müldür",        pos: "RB", born: "1999-04-03", nat: ["tr", "at"],     value: 12 },
        { no: 27,   name: "Nélson Semedo",      pos: "RB", born: "1993-11-16", nat: ["pt", "cv"],     value: 13 },
        { no: 77,   name: "Ognjen Mimović",     pos: "RB", born: "2004-08-17", nat: ["rs"],           value: 7 },
        { no: 5,    name: "İsmail Yüksek",      pos: "DM", born: "1999-01-26", nat: ["tr"],           value: 16 },
        { no: 91,   name: "N'Golo Kanté",       pos: "DM", born: "1991-03-29", nat: ["fr", "ml"],     value: 17 },
        { no: 28,   name: "Bartuğ Elmaz",       pos: "DM", born: "2003-02-19", nat: ["tr"],           value: 8 },
        { no: 6,    name: "Mattéo Guendouzi",   pos: "CM", born: "1999-04-14", nat: ["fr", "ma"],     value: 17 },
        { no: null, name: "Abdou Aziz Fall",    pos: "CM", born: "2007-02-20", nat: ["sn"],           value: 1 },
        { no: 10,   name: "Marco Asensio",      pos: "AM", born: "1996-01-21", nat: ["es", "nl"],     value: 21 },
        { no: 17,   name: "İrfan Can Kahveci",  pos: "AM", born: "1995-07-15", nat: ["tr"],           value: 7 },
        { no: 8,    name: "Mert Hakan Yandaş",  pos: "AM", born: "1994-08-19", nat: ["tr"],           value: 0.3 },
        { no: 7,    name: "Kerem Aktürkoğlu",   pos: "LW", born: "1998-10-21", nat: ["tr"],           value: 18 },
        { no: 70,   name: "Oğuz Aydın",         pos: "LW", born: "2000-10-27", nat: ["tr", "nl"],     value: 18.5 },
        { no: null, name: "Amara Diouf",        pos: "LW", born: "2008-06-07", nat: ["sn"],           value: 2 },
        { no: 11,   name: "Mason Greenwood",    pos: "RW", born: "2001-10-01", nat: ["gb-eng", "jm"], value: 48 },
        { no: 45,   name: "Dorgeles Nene",      pos: "RW", born: "2002-12-23", nat: ["ml"],           value: 24 },
        { no: 19,   name: "Vedat Muriqi",       pos: "CF", born: "1994-04-24", nat: ["xk", "al"],     value: 10 },
        { no: 9,    name: "Romelu Lukaku",      pos: "CF", born: "1993-05-13", nat: ["be", "cd"],     value: 10 }
      ]
    },
    {
      id: "besiktas", name: "Beşiktaş", short: "BJK",
      founded: 1903, city: "İstanbul", stadium: "Beşiktaş Park", seats: 42684,
      titles: 16,
      logo: "images/clubs/besiktas.png",
      colors: { main: "#141414", second: "#FFFFFF", dark: "#E6E6E6" },
      players: [
        { no: 1,  name: "Alexander Nübel",   pos: "GK", born: "1996-09-30", nat: ["de"],           value: 14 },
        { no: 80, name: "Doğan Alemdar",     pos: "GK", born: "2002-10-29", nat: ["tr"],           value: 3.5 },
        { no: 96, name: "Emir Yaşar",        pos: "GK", born: "2006-01-16", nat: ["tr"],           value: 0.5 },
        { no: 12, name: "Emmanuel Agbadou",  pos: "CB", born: "1997-06-17", nat: ["ci"],           value: 18 },
        { no: 53, name: "Emirhan Topçu",     pos: "CB", born: "2000-10-11", nat: ["tr"],           value: 14 },
        { no: 35, name: "Tiago Djaló",       pos: "CB", born: "2000-04-09", nat: ["pt", "gw"],     value: 11 },
        { no: 50, name: "Ümit Akdağ",        pos: "CB", born: "2003-10-06", nat: ["tr", "ro"],     value: 3.5 },
        { no: 58, name: "Yasin Özcan",       pos: "CB", born: "2006-04-20", nat: ["tr"],           value: 5 },
        { no: 63, name: "Azem Yortaç",       pos: "CB", born: "2008-03-01", nat: ["tr"],           value: 0.5 },
        { no: 11, name: "Kassoum Ouattara",  pos: "LB", born: "2004-10-14", nat: ["ci", "fr"],     value: 15 },
        { no: 33, name: "Rıdvan Yılmaz",     pos: "LB", born: "2001-05-21", nat: ["tr"],           value: 8 },
        { no: 62, name: "Amir Murillo",      pos: "RB", born: "1996-02-11", nat: ["pa"],           value: 16 },
        { no: 22, name: "Taylan Bulut",      pos: "RB", born: "2006-01-19", nat: ["de", "tr"],     value: 5 },
        { no: 4,  name: "Wilfred Ndidi",     pos: "DM", born: "1996-12-16", nat: ["ng", "gb-eng"], value: 12 },
        { no: 6,  name: "Salih Özcan",       pos: "DM", born: "1998-01-11", nat: ["tr", "de"],     value: 15 },
        { no: 8,  name: "Kartal Yılmaz",     pos: "DM", born: "2000-11-04", nat: ["tr"],           value: 2.5 },
        { no: 10, name: "Orkun Kökçü",       pos: "CM", born: "2000-12-29", nat: ["tr", "nl"],     value: 30 },
        { no: 21, name: "Fabio Miretti",     pos: "CM", born: "2003-08-03", nat: ["it"],           value: 15 },
        { no: 15, name: "Junior Olaitan",    pos: "CM", born: "2002-05-09", nat: ["bj", "ng"],     value: 17 },
        { no: 19, name: "Leandro Trossard",  pos: "LW", born: "1994-12-04", nat: ["be"],           value: 24 },
        { no: 29, name: "İlhan Fakılı",      pos: "LW", born: "2006-01-20", nat: ["tr", "fr"],     value: 10 },
        { no: 66, name: "Ozan Sevim",        pos: "LW", born: "2007-01-24", nat: ["tr"],           value: 0.7 },
        { no: 17, name: "Ernest Poku",       pos: "RW", born: "2004-01-28", nat: ["nl", "gh"],     value: 22 },
        { no: 18, name: "Václav Černý",      pos: "RW", born: "1997-10-17", nat: ["cz"],           value: 11 },
        { no: 7,  name: "Milot Rashica",     pos: "RW", born: "1996-06-28", nat: ["xk", "al"],     value: 7.5 },
        { no: 77, name: "Can Keleş",         pos: "RW", born: "2001-09-02", nat: ["at", "tr"],     value: 1.5 },
        { no: 28, name: "Dušan Vlahović",    pos: "CF", born: "2000-01-28", nat: ["rs"],           value: 35 },
        { no: 9,  name: "Oh Hyeon-gyu",      pos: "CF", born: "2001-04-12", nat: ["kr"],           value: 17 },
        { no: 90, name: "Semih Kılıçsoy",    pos: "CF", born: "2005-08-15", nat: ["tr"],           value: 7.5 },
        { no: 23, name: "Mustafa Hekimoğlu", pos: "CF", born: "2007-04-22", nat: ["tr"],           value: 3.5 },
        { no: 70, name: "Ahmet Sami Bircan", pos: "CF", born: "2007-01-24", nat: ["tr"],           value: 0.5 }
      ]
    },
    {
      id: "trabzonspor", name: "Trabzonspor", short: "TS",
      founded: 1967, city: "Trabzon", stadium: "Papara Park", seats: 41061,
      titles: 7,
      logo: "images/clubs/trabzonspor.png",
      colors: { main: "#7B1C3F", second: "#48B0E8", dark: "#48B0E8" },
      players: [
        { no: 24, name: "André Onana",          pos: "GK", born: "1996-04-02", nat: ["cm"],       value: 15 },
        { no: 25, name: "Onuralp Çevikkan",     pos: "GK", born: "2006-01-02", nat: ["tr"],       value: 1 },
        { no: 1,  name: "Ahmet Yıldırım",       pos: "GK", born: "2006-11-01", nat: ["tr"],       value: 0.5 },
        { no: 96, name: "Erol Can Çolak",       pos: "GK", born: "2006-01-02", nat: ["tr"],       value: 0.2 },
        { no: 27, name: "Chibuike Nwaiwu",      pos: "CB", born: "2003-07-23", nat: ["ng"],       value: 18 },
        { no: 44, name: "Arseniy Batagov",      pos: "CB", born: "2002-03-05", nat: ["ua"],       value: 22 },
        { no: 39, name: "Cenk Özkacar",         pos: "CB", born: "2000-10-06", nat: ["tr"],       value: 5 },
        { no: 4,  name: "Samet Akaydın",        pos: "CB", born: "1994-03-13", nat: ["tr"],       value: 4 },
        { no: 15, name: "Stefan Savić",         pos: "CB", born: "1991-01-08", nat: ["me", "rs"], value: 5 },
        { no: 55, name: "Sidny Lopes Cabral",   pos: "LB", born: "2002-09-18", nat: ["cv", "nl"], value: 8.5 },
        { no: 19, name: "Mustafa Eskihellaç",   pos: "LB", born: "1997-05-05", nat: ["tr"],       value: 12.5 },
        { no: 20, name: "Wagner Pina",          pos: "RB", born: "2002-11-03", nat: ["cv", "pt"], value: 21.5 },
        { no: 6,  name: "Fabinho",              pos: "DM", born: "1993-10-23", nat: ["br"],       value: 15 },
        { no: 3,  name: "Batista Mendy",        pos: "DM", born: "2000-01-12", nat: ["fr", "gw"], value: 14.5 },
        { no: 57, name: "Melih Kabasakal",      pos: "DM", born: "1996-02-18", nat: ["tr"],       value: 8 },
        { no: 5,  name: "Okay Yokuşlu",         pos: "DM", born: "1994-03-09", nat: ["tr"],       value: 6.5 },
        { no: 26, name: "Tim Jabol-Folcarelli", pos: "CM", born: "1999-12-06", nat: ["fr", "mq"], value: 12 },
        { no: 8,  name: "Benjamin Bouchouari",  pos: "CM", born: "2001-11-13", nat: ["ma", "be"], value: 12.5 },
        { no: 17, name: "Ruslan Malinovskyi",   pos: "CM", born: "1993-05-04", nat: ["ua"],       value: 10 },
        { no: 11, name: "Ozan Tufan",           pos: "CM", born: "1995-03-23", nat: ["tr"],       value: 3.5 },
        { no: 7,  name: "Ernest Muci",          pos: "AM", born: "2001-03-19", nat: ["al"],       value: 23.5 },
        { no: 58, name: "Aral Şimşir",          pos: "LW", born: "2002-06-19", nat: ["tr", "dk"], value: 12.5 },
        { no: 70, name: "Noah Saviolo",         pos: "LW", born: "2004-03-07", nat: ["pt", "be"], value: 24 },
        { no: 77, name: "Metehan Mimaroğlu",    pos: "LW", born: "1994-07-07", nat: ["tr"],       value: 1 },
        { no: 10, name: "Mohamed Salah",        pos: "RW", born: "1992-06-15", nat: ["eg"],       value: 28 },
        { no: 61, name: "Cihan Çanak",          pos: "RW", born: "2005-01-24", nat: ["tr", "be"], value: 1 },
        { no: 9,  name: "Franculino",           pos: "CF", born: "2004-06-28", nat: ["gw", "pt"], value: 23 },
        { no: 30, name: "Paul Onuachu",         pos: "CF", born: "1994-05-28", nat: ["ng"],       value: 14.5 },
        { no: 99, name: "Ali Habeşoğlu",        pos: "CF", born: "2004-07-29", nat: ["tr"],       value: 0.5 },
        { no: 14, name: "Umut Nayir",           pos: "CF", born: "1993-06-28", nat: ["tr"],       value: 2 }
      ]
    }
  ]
};
