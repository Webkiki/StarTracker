export const InputGroup = ({ name, type, value, handleChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-200 mb-2">
        {name}
      </label>
      <input
        name={name}
        type={type}
        placeholder={name}
        value={value}
        onChange={handleChange}
        className="w-full p-3 text-gray-900 bg-slate-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
    </div>
  );
};
