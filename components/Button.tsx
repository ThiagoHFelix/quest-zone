interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "default" | "secondary" | "white" | "ghost" | "danger";
    disabled?: boolean;
}

export default function Button({
    children,
    onClick,
    className = "",
    variant = "default",
    disabled = false,
}: ButtonProps) {
    const baseClasses =
        "py-2 px-4 rounded-md w-full transition duration-200 focus:outline-none";

    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-white",
        default:
            "bg-gray-800 hover:bg-gray-700 text-white focus:ring-2 focus:ring-gray-500",
        secondary:
            "bg-blue-100 hover:bg-blue-200 text-blue-700 focus:ring-2 focus:ring-blue-300",
        white:
            "bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400",
        ghost:
            "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300",
        danger:
            "bg-red-600 hover:bg-red-700 text-white focus:ring-2 focus:ring-red-400",
    };

    const disabledClasses = `
    bg-gray-700 text-gray-100 border-gray-300
    cursor-not-allowed opacity-60 pointer-events-none
  `;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseClasses}
        ${disabled ? disabledClasses : variants[variant]}
        ${className}
      `}
        >
            {children}
        </button>
    );
}
