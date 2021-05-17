let turn = 'black';

window.addEventListener('load', () => {
    const pawns = document.querySelectorAll('.pawns > *');
    for (const pawn of pawns) {
        pawn.addEventListener('click', () => {
            if (pawn.classList.contains('black')) {
                pawn.classList.remove('black');
            } else if (pawn.classList.contains('white')) {
                pawn.classList.remove('white');
            } else {
                pawn.classList.add(turn);

                if (turn == 'black')
                    turn = 'white';
                else
                    turn = 'black';
            }
        });
    }
});