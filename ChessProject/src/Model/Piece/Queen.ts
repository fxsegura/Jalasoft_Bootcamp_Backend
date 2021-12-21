import { BoardInterface } from "../Board/BoardInterface";
import { SpaceInterface } from "../Board/SpaceInterface";
import { Piece } from "./ChessPiece";

export class Queen extends Piece{
    pieceId:string;
    pieceColor:string;
    alive:boolean;

    constructor(pieceId:string,color:string,alive:boolean){
        super(pieceId,color,alive);
    }
    
    validMovementPattern(board:BoardInterface, startSpace: SpaceInterface, endSpace: SpaceInterface){
        let rowSpacesMoved=Math.abs(startSpace.getRow()-endSpace.getRow());
        let columnSpacesMoved=Math.abs(startSpace.getColumn()-endSpace.getColumn());
        if(rowSpacesMoved!=columnSpacesMoved){
            if(rowSpacesMoved!==0 && columnSpacesMoved!==0){
                return false;
            }
        }
        else
            return true;
    }
}