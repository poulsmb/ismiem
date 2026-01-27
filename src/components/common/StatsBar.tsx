/**
 * Элемент статистики
 * 
 * @property value - Значение (число или строка, например "38+")
 * @property label - Подпись под значением
 */
interface StatItemProps {
  value: string | number;
  label: string;
}

interface StatsBarProps {
  stats: StatItemProps[];
  className?: string;
}

/**
 * Компонент статистики в виде тёмной полосы
 * 
 * @description Горизонтальная полоса с ключевыми показателями.
 * Использует брендовый цвет #1E1933 в качестве фона.
 * 
 * @example
 * ```tsx
 * <StatsBar
 *   stats={[
 *     { value: 44, label: "семинара" },
 *     { value: "38+", label: "лет истории" },
 *   ]}
 * />
 * ```
 * 
 * @used-in Index (главная страница)
 */
export const StatsBar = ({ stats, className = "" }: StatsBarProps) => {
  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1933] text-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
