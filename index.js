var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

upperCaseCustomerName();

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'

}

const leastFavoriteCustomer = 'Amanda';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Tony'
}

console.log(upperCaseCustomerName());