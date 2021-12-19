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

  public sorting<K extends keyof T>(sortingType: string, column: K, normalViewColumn: K): void {
    switch (sortingType) {
      case "ASC":
        this.data.sort((d1, d2) => d1[column] > d2[column] ? 1 : -1);
        break;
      case "DESC":
        this.data.sort((d1, d2) => d1[column] > d2[column] ? -1 : 1);
        break;
      case "NORM":
        this.data.sort((d1, d2) => d1[normalViewColumn] > d2[normalViewColumn] ? 1 : -1);
        break;
    }
  }
}
