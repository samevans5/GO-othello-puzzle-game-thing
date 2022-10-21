const board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]

let pieces = document.querySelectorAll("p");

let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
}

let moves = 0;
let winCondition = false;

let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
}

function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(event.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId)
}


for (let i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener("click", e => {
        getSelectedPiece(pieces[i]);
        moves++;
        document.getElementById('counter').innerHTML = moves;
        if (document.getElementById(selectedPiece.pieceId).className === "white") {
            document.getElementById(selectedPiece.pieceId).classList.replace("white", "black");
        } else if (document.getElementById(selectedPiece.pieceId).className === "black") {
            document.getElementById(selectedPiece.pieceId).classList.replace("black", "white")
        }

        if (selectedPiece.pieceId !== 8) {
            if (document.getElementById(selectedPiece.pieceId + 1).className === "white" &&
                (selectedPiece.pieceId + 1) % 3 !== 0) {
                document.getElementById(selectedPiece.pieceId + 1).classList.replace("white", "black");
            } else if (document.getElementById(selectedPiece.pieceId + 1).className === "black" &&
            (selectedPiece.pieceId + 1) % 3 !== 0) {
                document.getElementById(selectedPiece.pieceId + 1).classList.replace("black", "white")
            }
        }

        if (selectedPiece.pieceId !== 0) {
            if (document.getElementById(selectedPiece.pieceId - 1).className === "white" &&
                (selectedPiece.pieceId - 1) % 3 !== 2) {
                document.getElementById(selectedPiece.pieceId - 1).classList.replace("white", "black");
            } else if (document.getElementById(selectedPiece.pieceId - 1).className === "black" &&
            (selectedPiece.pieceId - 1) % 3 !== 2) {
                document.getElementById(selectedPiece.pieceId - 1).classList.replace("black", "white")
            }
        }

        if (selectedPiece.pieceId > 2) {
            if (document.getElementById(selectedPiece.pieceId - 3).className === "white") {
                document.getElementById(selectedPiece.pieceId - 3).classList.replace("white", "black");
            } else if (document.getElementById(selectedPiece.pieceId - 3).className === "black") {
                document.getElementById(selectedPiece.pieceId - 3).classList.replace("black", "white")
            }
        }

        if (selectedPiece.pieceId < 6) {
            if (document.getElementById(selectedPiece.pieceId + 3).className === "white") {
                document.getElementById(selectedPiece.pieceId + 3).classList.replace("white", "black");
            } else if (document.getElementById(selectedPiece.pieceId + 3).className === "black") {
                document.getElementById(selectedPiece.pieceId + 3).classList.replace("black", "white")
            }
        }
        
        if (document.getElementById("0").classList == "black" &&
            document.getElementById("1").classList == "black" &&
            document.getElementById("2").classList == "black" &&
            document.getElementById("3").classList == "black" &&
            document.getElementById("4").classList == "black" &&
            document.getElementById("5").classList == "black" &&
            document.getElementById("6").classList == "black" &&
            document.getElementById("7").classList == "black" &&
            document.getElementById("8").classList == "black") {
            winCondition = true;
        }

        if (winCondition === true) {
            document.getElementById("win").classList.replace("winText", "victory")
            document.getElementById("moveTracker").classList.add("winText")
            document.getElementById('score').innerHTML = moves;
        }
        
    });
}
