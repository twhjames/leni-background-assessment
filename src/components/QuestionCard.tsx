import { Eye, EyeOff } from "lucide-react";

interface QuestionCardProps {
    option: string;
    isSelected: boolean;
    isHidden: boolean;
    onToggleHidden: () => void;
    onSelect: () => void;
}

const QuestionCard = ({
    option,
    isSelected,
    isHidden,
    onToggleHidden,
    onSelect,
}: QuestionCardProps) => {
    return (
        <div
            className={`
        flex items-center p-4 bg-white rounded-xl border transition-all duration-200 cursor-pointer
        ${isHidden ? "opacity-30 pointer-events-none" : ""}
        ${
            isSelected && !isHidden
                ? "bg-blue-50 border-blue-500"
                : "border-gray-300 hover:bg-gray-50"
        }
      `}
            onClick={!isHidden ? onSelect : undefined}
        >
            {/* Eye Icon */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleHidden();
                }}
                className="mr-3 p-1 hover:bg-gray-100 rounded transition-colors pointer-events-auto"
                aria-label={isHidden ? "Show option" : "Hide option"}
            >
                {isHidden ? (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                ) : (
                    <Eye className="w-5 h-5 text-gray-600" />
                )}
            </button>

            {/* Option Text */}
            <div className="flex-1 text-gray-800 font-medium">{option}</div>

            {/* Radio Circle */}
            <div className="ml-3">
                <div
                    className={`
            w-5 h-5 rounded-full border-2 transition-all duration-200
            ${
                isSelected && !isHidden
                    ? "bg-blue-500 border-blue-500"
                    : "bg-white border-gray-300"
            }
          `}
                >
                    {isSelected && !isHidden && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
