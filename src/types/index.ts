import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string,
    btnStyle?: string,
    btnType?: 'submit' | 'button',
    onClick: (e: MouseEventHandler<HTMLButtonElement>) => void,
}