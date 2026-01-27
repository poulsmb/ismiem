/**
 * Пропсы компонента NumberedList
 * 
 * @property items - Массив строк для отображения
 * @property colorScheme - Цветовая схема номеров: "blue" | "green" | "purple"
 */
interface NumberedListProps {
  items: string[];
  colorScheme?: "blue" | "green" | "purple";
}

const colorSchemes = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
};

/**
 * Нумерованный список с цветными бейджами
 * 
 * @description Отображает нумерованный список с круглыми
 * цветными бейджами вместо обычных цифр.
 * 
 * @example
 * ```tsx
 * <NumberedList
 *   items={["Цель 1", "Цель 2", "Цель 3"]}
 *   colorScheme="green"
 * />
 * ```
 * 
 * @used-in About (цели), LeaderPage (достижения)
 */
export const NumberedList = ({
  items,
  colorScheme = "green",
}: NumberedListProps) => {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold mr-3 flex-shrink-0 mt-0.5 ${colorSchemes[colorScheme]}`}
          >
            {index + 1}
          </span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default NumberedList;
