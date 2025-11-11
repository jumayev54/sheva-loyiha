import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'ghost'
	size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function Button({
	className = '',
	variant = 'default',
	size = 'default',
	...props
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none ring-offset-background'

	const sizeStyles: Record<string, string> = {
		default: 'px-4 py-2',
		sm: 'px-3 py-1.5 text-sm',
		lg: 'px-5 py-3 text-base',
		icon: 'p-2 h-9 w-9',
	}

	const variants: Record<string, string> = {
		default: 'bg-primary text-primary-foreground hover:bg-primary/80',
		outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
	}

	return (
		<button
			className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
			{...props}
		/>
	)
}
