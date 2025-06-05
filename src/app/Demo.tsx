'use client';

import { useState } from 'react';

import Moon from './Moon';
import Sun from './Sun';

export default function Component() {
    const [dark_mode, set_dark_mode] = useState<boolean>(true);

    const handle_click = () => {
        const new_dark_mode = !dark_mode;

        set_dark_mode(new_dark_mode);

        document.body.classList.toggle('dark');

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    return (
        <div>
            <div className="fixed top-0 right-0 p-8 md:p-9 lg:p-10">
                <button
                    className="h-6 md:h-7 lg:h-8 hover:opacity-50 focus:opacity-50 cursor-pointer transition"
                    onClick={() => handle_click()}
                >
                    {dark_mode ? <Moon /> : <Sun />}
                </button>
            </div>

            <div className="flex justify-center">
                {dark_mode ? <img alt="Dark room" src="/dark.jpg" /> : <img alt="Light room" src="/light.jpg" />}
            </div>
        </div>
    );
}
