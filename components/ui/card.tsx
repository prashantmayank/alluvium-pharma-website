import * as React from "react";


export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
className?: string;
children: React.ReactNode;
};


export function Card({ className = "", children, ...props }: CardProps) {
return (
<div className={`rounded-xl border bg-white shadow-sm ${className}`} {...props}>
{children}
</div>
);
}


export function CardHeader({ className = "", children, ...props }: CardProps) {
return (
<div className={`p-4 border-b ${className}`} {...props}>
{children}
</div>
);
}


export function CardTitle({ className = "", children, ...props }: CardProps) {
return (
<h3 className={`text-lg font-semibold ${className}`} {...props}>
{children}
</h3>
);
}


export function CardContent({ className = "", children, ...props }: CardProps) {
return (
<div className={`p-4 ${className}`} {...props}>
{children}
</div>
);
}