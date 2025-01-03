export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full max-w-lg mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Question {current} of {total}</span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}