export class CreatePaymentLinkModel {
    constructor({ idempotencyKey, name, amount, currency, locationId, redirectUrl }) {
        this.idempotencyKey = idempotencyKey;
        this.name = name;
        this.amount = amount;
        this.currency = currency;
        this.locationId = locationId;
        this.redirectUrl = redirectUrl;
    }

    //TODO: Make a "Enum" for currencies
    getParseData() {
        const data =
        {
            idempotencyKey: this.idempotencyKey,
            quickPay: {
                name: this.name,
                priceMoney: {
                    amount: this.amount,
                    currency: 'USD'
                },
                locationId: 'LPXQDC6Q64NEN'
            },
            checkoutOptions: {
                redirectUrl: this.redirectUrl,
            }
        }

        return data;
    }
}