/**
 * Classe que vai controlar o valor
 * que será formatado
 */
export class FormatNumber {
    private __value : number = 0.0;
 
    constructor(value: number){
        this.setValue(value);
    }

    /**
     * Função que seta um novo valor pra classe
     * ```typescript
     * const fmt = new FormatNumber(112.30);
     * console.log(fmt.getValue()) // 112.30
     * fmt.setValue(132.30)
     * console.log(fmt.getValue()) // 132.30
     * ```
     * @param value Valor que será setado
     * @returns não tem retorno
     */
    public setValue(value: number) {
        this.__value = value || 0.0;
    }

    /**
     * Função que pega o valor da classe
     * ```typescript
     * const fmt = new FormatNumber(112.30);
     * console.log(fmt.getValue()) // 112.30
    * ```
     * @returns retorna o valor
     */
    public getValue() {
        return this.__value;
    }

    /**
     * Função que converte um padrão americano de moeda pra local BRL
     * @param _formated_value valor sem formatação
     * @returns the formated value
     */
    private changeLocale(_formated_value: string) { 
        return _formated_value.replace(/[\,]/gi, '*').replace(/[\.]/gi, ',').replace(/[\*]/gi, '.')
    }

    /**
     * Função que formata o valor para moeda brasileira
     * ```typescript
     * const fmt = new FormatNumber(1312.30);
     * console.log(fmt.formatCurrency()) // R$ 1.312,30
    * ```
     * @returns retorna o valor no formato BRL de moedas
     */
    public formatCurrency() {
        return this.changeLocale(this.__value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    }

    /**
     * Função que formata o valor para porcentagem
     * ```typescript
     * const fmt = new FormatNumber(1312.30);
     * console.log(fmt.formatPercent()) // 1312.30%
     * ```
     * @returns retorna o valor no formato de porcentagem
     */
    public formatPercent() {
        return `${this.__value}%`
    }

    /**
     * Função que diz se o valor é maior ou igual o minimo
     * ```typescript
     * const fmt = new FormatNumber(1312.30);
     * console.log(fmt.min(140)) // true
     * ```
     * @param _min valor minimo
     * @returns retorna o true para maior ou igual o valor minimo
     */
    public min(_min: number) {
        if(this.__value >= _min)
            return true
        return false
    }

    /**
     * Função que diz se o valor é maior ou igual o maximo
     * ```typescript
     * const fmt = new FormatNumber(1312.30);
     * console.log(fmt.max(140)) // false
     * ```
     * @param _max valor maximo
     * @returns retorna o true para menor ou igual o valor maximo
     */
    public max(_max: number) {
        if(this.__value <= _max)
            return true
        return false
    }
}
 