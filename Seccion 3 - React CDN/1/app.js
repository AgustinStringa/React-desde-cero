"use strict"

document.addEventListener('DOMContentLoaded', function() {
    var root = document.querySelector('#root');

    var btnReact = document.querySelector('#react');

    var btnBabel = document.querySelector('#babel');

    btnReact.addEventListener('click', function() {

        ReactDOM.render(

            React.createElement("ul", null, React.createElement('li', null, "Anakin"),
                React.createElement('li', null, "Obi Wan"),
                React.createElement('li', null, "Padme"),
                React.createElement('li', null, "Mace Windu"),
                React.createElement('ol', null, React.createElement('li', null, 'ironMan'),
                    React.createElement('li', null, 'Cap'),
                    React.createElement('li', null, 'thor'))),
            root);

    })

    btnBabel.addEventListener('click', function() {

    })






})