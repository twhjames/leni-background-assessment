const ProgressIndicator = () => {
    // Generate 26 dots with some completed (showing mid-progress)
    const totalQuestions = 26;
    const completedQuestions = 12; // Mid-progress

    const dots = Array.from({ length: totalQuestions }, (_, index) => (
        <div
            key={index}
            className={`
        w-3 h-3 rounded-full transition-colors duration-200
        ${index < completedQuestions ? "bg-[#1e90ff]" : "bg-gray-300"}
      `}
        />
    ));

    return (
        <div className="flex flex-wrap justify-center gap-2 mt-8">{dots}</div>
    );
};

export default ProgressIndicator;
