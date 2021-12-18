export class TableData<T extends Object> {
    private data: T[] = [];
    private percentSum = 0

    public add(value: T, percent: number): void {
        this.data.push(value);
        this.percentSum += percent;
    }

    getData(): T[] {
        return this.data;
    }

    getPercentSum(): number {
        return this.percentSum;
    }

    public sorting<K extends keyof T>(sortingType: string, column: K): T[] {

        let sortedData: T[] = this.data;

        switch (sortingType) {
            case "ASC":
                sortedData.sort((d1, d2) => d1[column] > d2[column] ? 1 : -1);
                break;
            case "DESC":
                sortedData.sort((d1, d2) => d1[column] > d2[column] ? -1 : 1);
                break;
        }

        return sortedData
    }
}