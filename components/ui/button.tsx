import * as React from "react";


export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
className?: string;
children: React.ReactNode;
};


export function Button({ className = "", children, ...props }: ButtonProps) {
return (
<button
className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium ${className}`}
{...props}
>
{children}
</button>
);
}