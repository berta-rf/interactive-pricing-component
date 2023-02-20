
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const USDollar = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

const slider = document.getElementById("rangeslider");
const views = document.getElementById("views");
const dollars = document.getElementById("dollars");
const billingToggle = document.querySelector('#flexSwitchCheckDefault');

const monthlyRates = [8, 12, 16, 24, 36];
const monthlyRates25 = monthlyRates.map((i) => i - i * 0.25);


let defaultPlan = views.innerText = "100K"; 
dollars.innerText = USDollar.format(monthlyRates[2]);


slider.addEventListener('change', priceSlider);
billingToggle.addEventListener('change', priceSlider);


// When the slider moves, price/month and pageviews change
function priceSlider() {
    const rates = billingToggle.checked ? monthlyRates25 : monthlyRates;
    const value = slider.value;

    if (value == 1) {
        views.innerText = "10K";
        dollars.innerText = USDollar.format(rates[0]);

    } else if (value == 2) {
        views.innerText = "50K";
        dollars.innerText = USDollar.format(rates[1]);

    } else if (value == 3) {
        views.innerText = "100K";
        dollars.innerText = USDollar.format(rates[2]);

    } else if (value == 4) {
        views.innerText = "500K";
        dollars.innerText = USDollar.format(rates[3]);

    } else if (value == 5) {
        views.innerText = "1M";
        dollars.innerText = USDollar.format(rates[4]);
    }
}

