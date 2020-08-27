// Текстовые инпуты

const hitCount = document.getElementById('hit-count');
      hitCountPrice = 20;
      hitDegree = document.getElementById('hit-degree');
      hitDegreePrice = 1.5;

// Range инпуты

const hitCountRange = document.getElementById('hit-count-range');
      hitCountRangePrice = 20;
      hitDegreeRange = document.getElementById('hit-degree-range');
      hitDegreeRangePrice = 1.5;

// Чекбоксы

const mangal = document.getElementById('mangal');
      salo = document.getElementById('salo');

// Итоговые значения

const priceText = document.getElementById('price-text');

// Все range

const inputRange = document.querySelectorAll('.input-range');

// Все чекбоксы

const inputCheckbox = document.querySelectorAll('.input-checkbox');

// Все кнопки

const hitTypeBtn = document.querySelectorAll('.hit-type__btn');

const assignValue = () => {
    hitCount.value = hitCountRange.value;
    hitDegree.value = hitDegreeRange.value;
}

assignValue();

const weapons = [
    {
        name: 'pinok',
        percents: 1,
    },
    {
        name: 'bita',
        percents: 1.2,
    },
    {
        name: 'morgen',
        percents: 1.5,
    },
    {
        name: 'knife',
        percents: 2,
    }
]

let currentPercent = weapons[0].percents;

for(let item of hitTypeBtn) {
    item.addEventListener('click', () => {
        for(let item of hitTypeBtn) {
            item.classList.remove('btn-active');
        }
        item.classList.add('btn-active');
        takeActiveBtn(item);
    })
}

const takeActiveBtn = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentWeapon = weapons.find(weapon => weapon.name === dataAttrValue);
    currentPercent = currentWeapon.percents;
    console.log(currentPercent);
    calculation(hitDegreeRange.value, hitDegreeRangePrice, hitCountRangePrice, hitCountRange.value, currentPercent);
}

// Изменение в инпутах

for (let input of inputRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(hitDegreeRange.value, hitDegreeRangePrice, hitCountRangePrice, hitCountRange.value, currentPercent);
    })
}





// Изменения в чекбоксах

// for (let checkbox of inputCheckbox) {
//     checkbox.addEventListener('change', () => {
//         assignValue();
//         let mangalPrice;
//         let saloPrice;
//         if(mangal.checked) {
//             mangalPrice = 750;
//         } else {
//             mangalPrice = 0;
//         }
//         if(salo.checked) {
//             saloPrice = 500;
//         } else {
//             saloPrice = 0;
//         }
//         let checkBoxPrice = saloPrice + mangalPrice;
//         console.log(checkBoxPrice);
//         calculation(checkBoxPrice);
//     })
// }





const calculation = (hitDegreeRange = 0, hitDegreeRangePrice, hitCountRangePrice, hitCountRange = 0, currentPercent = 1) => {
    let degreePrice = hitDegreeRange * hitDegreeRangePrice;
    let hitPrice = degreePrice + hitCountRangePrice;
    let inputPrice = hitCountRange * hitPrice;
    let interestRate = currentPercent; // Множитель бабла
    let totalPrice = inputPrice * interestRate;
    // inputCheckbox.addEventListener('input', () => {
    //     if(mangal.checked && salo.checked) {
    //         return totalPrice = totalPrice + 1250;
    //     } else if (mangal.checked) {
    //         return totalPrice = totalPrice + 500;
    //     } else if (salo.cheked) {
    //         return totalPrice = totalPrice + 750;
    //     } else {
    //         return totalPrice = totalPrice
    //     }
    // })

    console.log(totalPrice); 
}