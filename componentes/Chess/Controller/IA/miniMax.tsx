import CheckMatte from "../CheckMatte"
import GenerateMoves from "../GenerateMoves"
import MovementAction from "../MovementAction"
import moveBasedRelativeStrength from "./moveBasedRelativeStrength"
import relativeStrengthCalculation from "./relativeStrengthCalculation"
import secureMovement from "./segureMovement"


export default function miniMax(color, enemyColor, board) {
    const checkMate = CheckMatte(color, board);
    const generateMoves = GenerateMoves(color, board);
    const secureMoves = [];

    for (const move of generateMoves) {
        if (secureMovement(move, 'w', board) && move.piece !== 'King') {
            secureMoves.push(move);
        }
    }

    const selectedMove = secureMoves.length > 0
        ? secureMoves[Math.floor(Math.random() * secureMoves.length)]
        : generateMoves[Math.floor(Math.random() * generateMoves.length)];

    let newBoard = MovementAction(selectedMove, board);
    const initialStrength = relativeStrengthCalculation(board);

    if (checkMate) {
        return false;
    }

    let bestBoard = newBoard;
    let bestStrength = relativeStrengthCalculation(newBoard);
    const mapMoves = GenerateMoves(color, board);

    for (const mapMove of mapMoves) {
        const mapBoard = MovementAction(mapMove, board);
        const enemyAttack = moveBasedRelativeStrength('w', mapBoard);

        if (enemyAttack === false) {
            bestBoard = mapBoard;
            break;
        }

        const enemyMoves = GenerateMoves(enemyColor, enemyAttack);
        const strength = relativeStrengthCalculation(enemyAttack);
        const bestEnemyMove = moveBasedRelativeStrength('b', enemyAttack);
        const relativeStrength = relativeStrengthCalculation(bestEnemyMove);

        if (color === 'b' && relativeStrength < bestStrength) {
            bestStrength = relativeStrength;
            bestBoard = mapBoard;
        } else if (color === 'w' && relativeStrength > bestStrength) {
            bestStrength = relativeStrength;
            bestBoard = mapBoard;
        }
    }

    return bestBoard;
}



