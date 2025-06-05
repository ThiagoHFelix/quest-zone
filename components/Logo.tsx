export default function Logo() {
    return (
        <div className="flex items-center space-x-3 select-none cursor-default">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l7 7-5 5-7 7-2-2 7-7-5-5 7-7z"
                />
            </svg>

            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                Quest Zone
            </h1>
        </div>
    )
}
