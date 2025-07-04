import { useState } from "react";
import AssessmentHeader from "../components/AssessmentHeader";
import QuestionCard from "../components/QuestionCard";
import ProgressIndicator from "../components/ProgressIndicator";

const Index = () => {
    const question =
        "You see a teammate struggling with their workload and missing deadlines. What would you most likely do?";

    const options = [
        "Offer to help them manage their tasks",
        "Alert your manager immediately",
        "Avoid getting involved to focus on your own work",
        "Wait to see if the issue resolves itself",
    ];

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [hiddenOptions, setHiddenOptions] = useState<boolean[]>(
        new Array(options.length).fill(false)
    );

    const toggleHidden = (index: number) => {
        const newHiddenOptions = [...hiddenOptions];
        newHiddenOptions[index] = !newHiddenOptions[index];
        setHiddenOptions(newHiddenOptions);

        // If option was selected and now hidden, deselect it
        if (selectedOption === index && newHiddenOptions[index]) {
            setSelectedOption(null);
        }
    };

    const selectOption = (index: number) => {
        if (!hiddenOptions[index]) {
            setSelectedOption(index);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <AssessmentHeader />

            {/* Main Content */}
            <div className="pt-20 pb-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Question Section */}
                    <div className="flex flex-col items-center justify-center min-h-[60vh]">
                        <div className="w-full max-w-2xl">
                            {/* Question */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
                                    {question}
                                </h2>
                            </div>

                            {/* Options */}
                            <div className="space-y-4">
                                {options.map((option, index) => (
                                    <QuestionCard
                                        key={index}
                                        option={option}
                                        isSelected={selectedOption === index}
                                        isHidden={hiddenOptions[index]}
                                        onToggleHidden={() =>
                                            toggleHidden(index)
                                        }
                                        onSelect={() => selectOption(index)}
                                    />
                                ))}
                            </div>

                            {/* Progress Indicator */}
                            <ProgressIndicator />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
