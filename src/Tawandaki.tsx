export interface Tawandaki {
    id: number,
    german: string,
    tawandaki: string,
    pronunciation: string,
    meaning: string,
    trivia?: string
}

export const TAWANDAKI_TEST_LIST: Tawandaki[] = [
    {id: 1, german: "Tawandaki", tawandaki: "Tawandaki", pronunciation: "tah-wah-n-dah-ki", meaning: "meaning", trivia: "trivia"},
    {id: 2, german: "Hallo", tawandaki: "Sani", pronunciation: "sah-ni", meaning: "Freundliche Begrüßung", trivia: "Flocke spricht das manchmal 'Sah-Neh' aus und ich weiß immer noch nicht, warum lol"},
    {id: 3, german: "Ja", tawandaki: "Ayo", pronunciation: "ah-jo", meaning: "meaning"},
    {id: 4, german: "Danke", tawandaki: "Tokahe", pronunciation: "toh-kah-he", meaning: "meaning"},
]