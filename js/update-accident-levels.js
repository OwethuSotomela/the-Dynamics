const updateLevel = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let params = {
        area: document.getElementById('title').value,
        level: document.getElementById('yr').value,
        qty: document.getElementById('num').value
    }
    mainList.updateAccidentLevel(params.area, params.level, params.qty);
    showAccidentTable(mainList.list());
    /*
    list.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
    //for display purposes only
    console.warn('added', { list });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(list, '\t', 2);
    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(list));
    */
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', updateLevel);
});