export type Ranking = [number, string, boolean];

export function printRankings(rankings: Array<Ranking>): void {
    for (let ranking of rankings) {
        console.log(ranking);
    }
}
