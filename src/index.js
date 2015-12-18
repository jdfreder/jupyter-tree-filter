function filterRows(filterText) {
    let rows = Array.prototype.concat.apply([], document.querySelectorAll('.list_item.row'));
    rows.forEach(row => {
        if (!filterText || row.querySelector('.item_name').innerText.indexOf(filterText) !== -1) {            
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

export function load_ipython_extension() {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    document.querySelector('#notebook_list_header').appendChild(input);
    
    input.onkeyup = () => {
        filterRows(input.value);
    };
}
