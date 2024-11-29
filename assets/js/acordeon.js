document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'acordeon'
    const acordeons = document.querySelectorAll('.acordeon');

    // Remove a classe 'open' de todos os acordeons ao carregar a página
    acordeons.forEach(function(acordeon) {
        acordeon.classList.remove('open');
    });

    // Seleciona todos os elementos com a classe 'trigger' dentro de 'acordeon'
    const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

    acordeonTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            const acordeon = trigger.parentElement;
            const isOpen = acordeon.classList.contains('open');

            if (isOpen) {
                acordeon.classList.remove('open');
            } else {
                acordeon.classList.add('open');
            }
        });
    });
});
