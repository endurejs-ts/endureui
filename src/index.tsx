/* testing */
import react from 'react';

export function Button({ text, onclick, style, className }:
    { text: string, onclick?: react.MouseEventHandler<HTMLButtonElement> | undefined, style?: react.CSSProperties | undefined, className?: string | undefined }) {
        return (
            <button onClick={onclick} style={style} className={className}>
                {text}
            </button>
        );
}

/* test finished */