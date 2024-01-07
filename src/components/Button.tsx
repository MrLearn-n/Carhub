"use client"
import { ButtonProps } from "@/types";
import React from "react";

export const Button = ({ title, btnStyle, btnType, onClick }: ButtonProps): JSX.Element => {
    return (
        <button
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${btnStyle}`}
            onClick={() => onClick}
        >
            <span className="flex-1">{title}</span>
        </button>
    );
};
