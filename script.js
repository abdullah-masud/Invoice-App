/* Buyer details */
const detailSubmitButton = document.getElementById('detail-submit-btn');
const buyerDetailsInput = document.getElementById('buyer-details-input');

detailSubmitButton.addEventListener('click', function() {
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = buyerDetailsInput.value;
    buyerDetailsInput.value = '';
})

/* Item details */
const addDetailsBtn = document.getElementById('add-details-btn');
const infoTable = document.getElementById('info-table');

addDetailsBtn.addEventListener('click', function() {
    const tr = document.createElement('tr'); // table row
    const th = document.createElement('th'); // table head (name)
    const td1 = document.createElement('td'); // table data (price)
    const td2 = document.createElement('td'); // table data (quantity)
    const td3 = document.createElement('td'); // table data (total)
    td3.classList.add('td3-class');

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    infoTable.appendChild(tr);

    const itemNameInput = document.getElementById('item-name-input'); // item name input
    const itemPriceInput = document.getElementById('item-price-input'); // price input
    const itemQuantityInput = document.getElementById('item-quantity-input'); // quantiy input

    th.innerText = itemNameInput.value;
    td1.innerText = itemPriceInput.value;
    td2.innerText = itemQuantityInput.value
    td3.innerText = parseFloat(itemPriceInput.value) * parseFloat(itemQuantityInput.value);

    const td3Class = document.getElementsByClassName('td3-class');
    let sum = 0;
    for (let i = 0; i < td3Class.length; i++) {
        sum = sum + parseFloat(td3Class[i].innerText);
    }
    /* Subtotal */
    const subTotalField = document.getElementById('sub-total');
    subTotalField.innerText = sum;
    const sumSubTotal = subTotalField.innerText;

    /* Tax */
    const taxField = document.getElementById('tax');
    taxField.innerText = (sum * 0.2).toFixed(2);
    const calculateTax = taxField.innerText;

    /* Grand Total */
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseFloat(sumSubTotal) + parseFloat(calculateTax);

    /* Total Amount */
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = parseFloat(sumSubTotal) + parseFloat(calculateTax);

    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemQuantityInput.value = '';
})

// creating table row
/* 
<tr>
    <th></th>
    <td></td>
    <td></td>
    <td></td>
</tr>
*/