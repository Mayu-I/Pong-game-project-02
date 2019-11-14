export const SVG_NS = "http://www.w3.org/2000/svg";
export const BOARD_COLOR = "#010101";
export const BOARD_STROKE = "#ffffff";
export const BOARD_WIDTH = 512;
export const BOARD_HEIGHT = 246;

export const PADDLE_WIDTH = 12;
export const PADDLE_HEIGHT = 50 + Math.floor(Math.random() * 21);
export const PADDLE_Y = (BOARD_HEIGHT - PADDLE_HEIGHT) / 2;
export const PADDLE_GAP = 10;
export const PADDLE_SPEED = 12;

export const SHOT_WIDTH = 20;
export const SHOT_HEIGHT = 10;

export const SCORE_FONT = 30;
export const SCORE_Y = 50;

export const WINNER_FONT = 40;
export const WINNER_SCORE = 10;

export const KEYS = {
    p1Up: "ArrowUp",
    p1Down: "ArrowDown",
    p1Shot: "ArrowLeft",
    p2Up: "w",
    p2Down: "s",
    p2Shot: "d",
    pause: " ",
    restart: "r"
}
