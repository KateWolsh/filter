
interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

function Toolbar({ filters, selected, onSelectFilter }: ToolbarProps) {

  return (
    <div className="grid grid-cols-4 gap-0">
      {filters.map((filter: string, index: number) => (
        <label key={filter} className={`${selected === filter ? 'border-indigo-500' : ''} group relative flex items-center justify-center rounded-md border py-2 px-1 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm`}>
          <input type="radio" name="size-choice" value={filter} className="sr-only" aria-labelledby={`size-choice-${index}-label`}
            onClick={() => onSelectFilter(filter)} />
          <span id={`size-choice-${index}-label`}>{filter}</span>
          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
        </label>
      ))}
    </div>
  )
}

export default Toolbar