const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
    if(value < 0 || value > 1) {
        return;
    }

    // gauge.querySelector(".gauge_fill").style.transform = 'rotate(' + (value / 2) + 'turn)';
    // gauge.querySelector(".gauge_fill").style.width = value * 100 + '%';
    gauge.querySelector(".gauge_cover").textContent = parseInt(value * 100) + '%';

    $(document).ready(function() {
        $('.gauge_fill').animate({
            width: value * 100 + '%'
        }, 1000)
    });
}

// setGaugeValue(gaugeElement, 0);