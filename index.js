
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

let defaultPlan = views.innerHTML = "100K"; dollars.innerHTML = USDollar.format(16);

slider.oninput = function() {

    if (this.value == 1) {
        views.innerHTML = "10K";
        dollars.innerHTML = USDollar.format(8);

    } else if (this.value == 2) {
        views.innerHTML = "50K";
        dollars.innerHTML = USDollar.format(12);

    } else if (this.value == 3) {
        views.innerHTML = "100K";
        dollars.innerHTML = USDollar.format(16);

    } else if (this.value == 4) {
        views.innerHTML = "500K";
        dollars.innerHTML = USDollar.format(24);

    } else if (this.value == 5) {
        views.innerHTML = "1M";
        dollars.innerHTML = USDollar.format(36);

    }
}
