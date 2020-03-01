function selectionSwap(num1, num2) {
    sortingView.insertBefore(num2, num1);
}

async function selectionSort() {
    var bar = document.querySelectorAll(".bar");
    for (var i = 0; i < bar.length-1; i++) {
        var min = i;
        for(var j = i+1; j < bar.length; j++ ) {
            playSound();
            bar[min].style.backgroundColor = "blue";
            bar[j].style.backgroundColor = "#9999ff";
            bar[j].style.transform = "translate(0, -5px)";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, delayInMs)
            );
            var minNum = Number(bar[min].childNodes[0].innerHTML);
            var currentNum = Number(bar[j].childNodes[0].innerHTML);
            if(minNum > currentNum) {
                bar[min].style.backgroundColor = "#9999ff";
                min = j;
            }
            bar[j].style.transform = "translate(0, 0)";
        }
        selectionSwap(bar[i], bar[min]);
        bar[min].style.backgroundColor = "green";
        bar = document.querySelectorAll(".bar");
    }
    bar[bar.length-1].style.backgroundColor = "green";
}