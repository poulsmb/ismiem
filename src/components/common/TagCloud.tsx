/**
 * Пропсы компонента TagCloud
 * 
 * @property tags - Массив строк-тегов
 * @property className - Дополнительные CSS классы
 */
interface TagCloudProps {
  tags: string[];
  className?: string;
}

/**
 * Облако тегов/меток
 * 
 * @description Отображает массив строк в виде горизонтального
 * облака тегов с автоматическим переносом.
 * 
 * @example
 * ```tsx
 * <TagCloud tags={["Москва", "Казань", "Минск"]} />
 * ```
 * 
 * @used-in About (география городов)
 */
export const TagCloud = ({ tags, className = "" }: TagCloudProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagCloud;
