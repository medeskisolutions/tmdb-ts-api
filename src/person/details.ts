export interface PersonDetails {
  adult: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday: null
  gender: number
  homepage: null
  id: number
  imdb_id: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}

// cSpell:disable
export const mockPersonDetails = {
  adult: false,
  also_known_as: [
    "Киану Ривз",
    "키아누 리브스",
    "キアヌ・リーブス",
    "เคอานู รีฟส์",
    "基努·里维斯",
    "קיאנו ריבס",
    "Keanu Charles Reeves",
    "Κιάνου Ριβς",
    "Κιάνου Τσαρλς Ριβς",
    "Кіану Рівз",
    "كيانو ريفز",
    "基努·李維",
  ],
  biography:
    "Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and The Matrix franchise as Neo. He has collaborated with major directors such as Stephen Frears (in the 1988 period drama Dangerous Liaisons); Gus Van Sant (in the 1991 independent film My Own Private Idaho); and Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his 1991 film releases, The New York Times' critic, Janet Maslin, praised Reeves' versatility, saying that he \"displays considerable discipline and range. He moves easily between the buttoned-down demeanor that suits a police procedural story and the loose-jointed manner of his comic roles.\" A repeated theme in roles he has portrayed is that of saving the world, including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John Constantine and Klaatu.",
  birthday: "1964-09-02",
  deathday: null,
  gender: 2,
  homepage: null,
  id: 6384,
  imdb_id: "nm0000206",
  known_for_department: "Acting",
  name: "Keanu Reeves",
  place_of_birth: "Beirut, Lebanon",
  popularity: 70.77,
  profile_path: "/rRdru6REr9i3WIHv2mntpcgxnoY.jpg",
}
// cSpell:enable
