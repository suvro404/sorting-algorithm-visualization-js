var bar = document.querySelectorAll(".bar");

function quickSwap(num1, num2) {
    console.log("bar1 : ", num1);
    console.log("bar2 : ", num2);
    // sortingView.insertBefore(num2, num1);
}

function partition(items, left, right) {
    console.log("partition started");
    var pivot   = Number(items[Math.floor((right + left) / 2)].childNodes[0].innerHTML), //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        var num1 = Number(items[i].childNodes[0].innerHTML);
        var num2 = Number(items[j].childNodes[0].innerHTML);
        while (num1 < pivot) {
            i++;
        }
        while (num2 > pivot) {
            j--;
        }
        if (i <= j) {
            quickSwap(bar[i], bar[j]); //sawpping two elements
            // bar = document.querySelectorAll(".bar");
            i++;
            j--;
        }
    }
    return i;
}

function sort(items, left, right) {
    console.log("sorting started");
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            sort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            sort(items, index, right);
        }
    }
}

async function quickSort() {
    sort(bar, 0, bar.length - 1);
}