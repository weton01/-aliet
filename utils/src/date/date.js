"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
/**
 * Classe para modelar Datas
 */
var DateUtil = /** @class */ (function () {
    /**
     * Valor inicial para ser modelado
     * @param date valor inicial
     */
    function DateUtil(date) {
        this.__date = new Date();
        this.setDate(date);
        this.__locale = 'pt-br';
    }
    DateUtil.prototype.formatZero = function (str) {
        if (str.length > 1)
            return str;
        return "0" + str;
    };
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
    DateUtil.prototype.addDays = function (days) {
        this.__date.setDate(this.__date.getDate() + days);
        return this.__date;
    };
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
    DateUtil.prototype.addMonths = function (months) {
        this.__date.setMonth(this.__date.getMonth() + months);
        return this.__date;
    };
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
    DateUtil.prototype.addYears = function (years) {
        this.__date.setFullYear(this.__date.getFullYear() + years);
        return this.__date;
    };
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
    DateUtil.prototype.removeDays = function (days) {
        this.__date.setDate(this.__date.getDate() - days);
        return this.__date;
    };
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
    DateUtil.prototype.removeMonths = function (months) {
        this.__date.setMonth(this.__date.getMonth() - months);
        return this.__date;
    };
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
    DateUtil.prototype.removeYears = function (years) {
        this.__date.setFullYear(this.__date.getFullYear() - years);
        return this.__date;
    };
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
    DateUtil.prototype.formatBRL = function () {
        this.__date.setUTCFullYear(this.__date.getFullYear());
        this.__date.setUTCMonth(this.__date.getMonth());
        var date = this.__date.toLocaleDateString(this.__locale).split('-');
        var day = this.formatZero(date[2]);
        var month = this.formatZero(date[1]);
        return day + "/" + month + "/" + this.__date.getFullYear();
    };
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
    DateUtil.prototype.formatDateToUnix = function () {
        return Math.floor(this.__date.getTime() / 1000);
    };
    /**
     * Função que converte um unix em data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.formatDateToUnix(1616093765)) // 2021-03-18T18:56:05.000Z
     * ```
     * @returns Retorna a data com todos no formato 2021-03-18T18:56:05.000Z
     */
    DateUtil.prototype.formatUnixToDate = function (unix_timestamp) {
        return new Date(unix_timestamp * 1000);
    };
    /**
     * Função que retornar a data
     * ```typescript
     * const now = new Date();
     * const date = new DateUtil(now);
     * console.log(date.getDate()) // 2021-03-18T17:57:26.433Z
     * ```
     * @returns Retorna a data
     */
    DateUtil.prototype.getDate = function () {
        return this.__date;
    };
    /**
     * Função que seta uma nova data pro obejto
     */
    DateUtil.prototype.setDate = function (date) {
        this.__date = date || new Date();
    };
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
    DateUtil.prototype.getDateDiff = function (date_1, date_2) {
        var _MS_PER_DAY = 1000 * 60 * 60 * 24;
        return Math.floor((+date_1 - +date_2) / _MS_PER_DAY);
    };
    /**
     * Função saber o ultimo dia do mês
     * ```typescript
     * const date = new DateUtil(new Date());
     * console.log(date.getLastDayOfMonth(date.getDate())); // 2021-03-31T03:00:00.000Z
     * ```
     * @returns Retorna uma data com o ultimo dia do mês
     */
    DateUtil.prototype.getLastDayOfMonth = function (date) {
        return new Date(this.__date.getFullYear(), this.__date.getMonth() + 1, 0);
    };
    return DateUtil;
}());
exports.DateUtil = DateUtil;
