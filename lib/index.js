'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.load_ipython_extension = load_ipython_extension;
function filterRows(filterText) {
    var rows = Array.prototype.concat.apply([], document.querySelectorAll('.list_item.row'));
    rows.forEach(function (row) {
        if (!filterText || row.querySelector('.item_name').innerText.indexOf(filterText) !== -1) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function load_ipython_extension() {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    document.querySelector('#notebook_list_header').appendChild(input);

    input.onkeyup = function () {
        filterRows(input.value);
    };
}