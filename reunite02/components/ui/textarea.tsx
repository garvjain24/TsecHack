const Textarea = ({
  label,
  name,
  value = "",
  onChange,
  required = false,
  placeholder = "",
  error = "",
  rows = 4,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default Textarea
