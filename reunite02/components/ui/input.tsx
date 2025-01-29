const Input = ({
  label,
  type = "text",
  name,
  value = "",
  onChange,
  required = false,
  placeholder = "",
  error = "",
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default Input
