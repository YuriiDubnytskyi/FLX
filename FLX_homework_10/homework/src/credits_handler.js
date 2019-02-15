function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let prozent = 0.5;
    let hundred = 100;
    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        },
        putCredits(number) {
            balance = balance + number;
            historyLogs.push({
                operationType: 'Received credits',
                credits: number,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
        takeCredits(number) {
            if (number <= transactionLimit && number <= balance) {
                balance = balance - number;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: number,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            } else {
                console.log('Error: Transaction limit and remaining balance should be greater ' +
                    'than credits you want to take.');
            }
        },
        setTransactionLimit(number) {
            transactionLimit = number;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: number,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
        transferCredits(number, card) {
            let trans = number * prozent / hundred + number;
            let balnsExced = trans > balance;
            let transLimit = trans > transactionLimit;
            if (balnsExced) {
                console.log('Error: You can not transfer credits - balance exceeded.');
            } else if (transLimit) {
                console.log(
                    'Error: You can not transfer credits - transaction limit exceeded');
            } else {
                this.takeCredits(trans);
                card.putCredits(number);
                historyLogs.push({
                    operationType: 'Credit transfer between cards',
                    credits: number,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            }
        }
    };
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }
    addCard() {
        if (this.cards.length < this.maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('Error: You have reached maximum amount of cards!');
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}