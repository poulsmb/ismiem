/**
 * Элемент таймлайна
 * 
 * @property year - Год события
 * @property event - Описание события
 */
interface TimelineItem {
  year: number;
  event: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

/**
 * Компонент вертикального таймлайна
 * 
 * @description Отображает историю событий с годами в виде
 * вертикального списка с бейджами годов и вертикальной линией.
 * 
 * @example
 * ```tsx
 * <Timeline
 *   items={[
 *     { year: 1987, event: "Первый семинар" },
 *     { year: 2025, event: "44-й семинар" },
 *   ]}
 * />
 * ```
 * 
 * @used-in About (страница Истории)
 */
export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center w-16 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
              {item.year}
            </span>
          </div>
          <div className="flex-grow pt-1">
            <p className="text-gray-700 pl-4 border-l-2 border-blue-200">
              {item.event}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
