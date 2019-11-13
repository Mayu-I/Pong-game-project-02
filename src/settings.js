export const SVG_NS = "http://www.w3.org/2000/svg";
export const BOARD_COLOR = "#010101";
export const BOARD_WIDTH = 512;
export const BOARD_HEIGHT = 216;

export const PADDLE_WIDTH = 8 + Math.floor(Math.random() * 11);
export const PADDLE_HEIGHT = 50 + Math.floor(Math.random() * 21);
export const PADDLE_GAP = 10;
export const PADDLE_SPEED = 10 + Math.floor(Math.random() * 11);

export const BALL_RADIUS1 = 6 + Math.floor(Math.random() * 5);
export const BALL_RADIUS2 = 6 + Math.floor(Math.random() * 5);

export const SHOT_WIDTH = 8;
export const SHOT_HEIGHT = 2;

export const SCORE_FONT = 30;
export const SCORE_Y = 50;

export const WINNER_FONT = 40;


export const KEYS = {
    p1Up: "ArrowUp",
    p1Down: "ArrowDown",
    p1Fire: "ArrowLeft",
    p2Up: "w",
    p2Down: "s",
    p2Fire: "d",
    pause: " ",
    restart: "r"
}
