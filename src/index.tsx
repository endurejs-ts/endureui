/* testing */
import react from 'react';

class Button {
    static default({ text, onclick, style, className }: 
        { text?: string, onclick?: react.MouseEventHandler<HTMLButtonElement> | undefined, style?: react.CSSProperties | undefined, className?: string | undefined }
    ) {
        return (
            <button onClick={onclick} style={style} className={className}>
                {text}
            </button>
        );
    }

    static onElement({ element, onclick, style, className }: {
        element: JSX.Element | string, onclick?: react.MouseEventHandler<HTMLButtonElement> | undefined, style?: react.CSSProperties | undefined, className?: string | undefined
    }) {
        <button onClick={onclick} style={style} className={className}>
            {element}
        </button>
    }
}