 
/**
 * Classe para modelar Datas  
 */
export class DateUtil { 
    private __date : Date = new Date();
    private __locale: string;

    /**
     * Valor inicial para ser modelado
     * @param date valor inicial
     */
    constructor(date: Date){ 
        this.setDate(date);
        this.__locale = 'pt-br';
    }

    private formatZero(str: string) {
        if(str.length > 1)
            return str
        return `0${str}`
    }

    /**
     * Função que adiciona dias a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.addDays(2)) // 2021-03-20T17:57:26.433Z
     * ```
     * @param days Numero de dias que serão adicionados
     * @returns Retorna a data com todos os dias adicionados
     */
    public addDays(days: number) {
        this.__date.setDate(this.__date.getDate() + days)
        return this.__date;
    }

    /**
     * Função que adiciona meses a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.addMonths(2)) // 2021-05-18T17:57:26.433Z
     * ```
     * @param months Numero de meses que serão adicionados
     * @returns Retorna a data com todos os meses adicionados
     */
    public addMonths(months: number) {
        this.__date.setMonth(this.__date.getMonth() + months)
        return this.__date;
    }

    /**
     * Função que adiciona anos a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.addYears(2)) // 2023-03-18T17:57:26.433Z
     * ```
     * @param years Numero de anos que serão adicionados
     * @returns Retorna a data com todos os anos adicionados
     */
    public addYears(years: number) {
        this.__date.setFullYear(this.__date.getFullYear() + years)
        return this.__date;
    }

    /**
     * Função que remove dias a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.removeDays(2)) // 2021-03-16T17:57:26.433Z
     * ```
     * @param days Numero de dias que serão removidos
     * @returns Retorna a data com todos os dias removidos
     */
     public removeDays(days: number) {
        this.__date.setDate(this.__date.getDate() - days)
        return this.__date;
    }

    /**
     * Função que remove meses a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.removeMonths(2)) // 2021-01-18T17:57:26.433Z
     * ```
     * @param months Numero de meses que serão removidos
     * @returns Retorna a data com todos os meses removidos
     */
    public removeMonths(months: number) {
        this.__date.setMonth(this.__date.getMonth() - months)
        return this.__date;
    }

    /**
     * Função que remove anos a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.removeYears(2)) // 2019-03-18T17:57:26.433Z
     * ```
     * @param years Numero de anos que serão removidos
     * @returns Retorna a data com todos os anos removidos
     */
    public removeYears(years: number) {
        this.__date.setFullYear(this.__date.getFullYear() - years)
        return this.__date;
    }

    /**
     * Função que retornar a data em formato BRL
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * console.log(date.formatBRL()) // 18/03/2021
     * ```
     * @returns Retorna a data com todos no formato DD/MM/YYYY
     */
    public formatBRL() {
        this.__date.setUTCFullYear(this.__date.getFullYear());
        this.__date.setUTCMonth(this.__date.getMonth());
        const date = this.__date.toLocaleDateString(this.__locale).split('-')

        const day = this.formatZero(date[2]);
        const month = this.formatZero(date[1]);
 
        return `${day}/${month}/${this.__date.getFullYear()}`
    }

    /**
     * Função que retornar a data em formato Unix
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T18:56:05.008Z
     * console.log(date.formatDateToUnix()) // 1616093765
     * ```
     * @returns Retorna a data com todos no formato 1616093765
     */
    public formatDateToUnix() { 
        return Math.floor(this.__date.getTime() / 1000);
    }

    /**
     * Função que converte um unix em data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.formatDateToUnix(1616093765)) // 2021-03-18T18:56:05.000Z
     * ```
     * @returns Retorna a data com todos no formato 2021-03-18T18:56:05.000Z
     */    
    public formatUnixToDate(unix_timestamp: number) { 
        return new Date(unix_timestamp * 1000);
    }
 
    /**
     * Função que retornar a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * ```
     * @returns Retorna a data
     */
    public getDate() { 
        return this.__date;
    }

    /**
     * Função que seta uma nova data pro obejto
     */
    public setDate(date: Date) { 
        this.__date = date || new Date();
    }

    /**
     * Função saber a diferença de duas datas
     * ```typescript
     * const date = new DateUtil(new Date());
     * const date_2 = new DateUtil(new Date());
     * date_2.addDays(2);
     * console.log(date.getDateDiff(date.getDate(), date_2.getDate())); // -2
     * ```
     * @returns Retorna a diferença entre as duas datas em dias
     */
    public getDateDiff(date_1: Date, date_2: Date){
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
 
        return Math.floor((+date_1 - +date_2) / _MS_PER_DAY);
    }

    /**
     * Função saber o ultimo dia do mês
     * ```typescript
     * const date = new DateUtil(new Date());
     * console.log(date.getLastDayOfMonth(date.getDate())); // 2021-03-31T03:00:00.000Z
     * ```
     * @returns Retorna uma data com o ultimo dia do mês
     */
    public getLastDayOfMonth(date: Date) {
        return new Date(this.__date.getFullYear(), this.__date.getMonth()+1, 0);
    }
}
