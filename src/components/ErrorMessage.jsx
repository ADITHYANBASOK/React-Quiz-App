export default function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
        <p className="font-medium">Error: {message}</p>
        <p className="text-sm mt-2">Please try refreshing the page.</p>
      </div>
    </div>
  );
}