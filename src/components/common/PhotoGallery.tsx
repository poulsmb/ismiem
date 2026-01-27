import { useState } from "react";

/**
 * Пропсы компонента PhotoGallery
 * 
 * @property photos - Массив фотографий
 * @property photos[].src - Путь к изображению
 * @property photos[].label - Подпись (отображается при hover)
 * @property photos[].large - Увеличенный размер (2x2 в сетке)
 */
interface PhotoGalleryProps {
    photos: {
        src: string;
        label: string;
        large?: boolean;
    }[];
}

/**
 * Фотогалерея с модальным просмотром
 * 
 * @description Сетка фотографий с подписями при наведении.
 * Поддерживает увеличенные фото (large) и открытие
 * в полноэкранном модальном окне по клику.
 * 
 * @example
 * ```tsx
 * <PhotoGallery
 *   photos={[
 *     { src: "/photo1.jpg", label: "Минск 2025", large: true },
 *     { src: "/photo2.jpg", label: "Казань 2017" },
 *   ]}
 * />
 * ```
 * 
 * @used-in Index (главная), Archive (архив)
 */
export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, i) => (
                    <div
                        key={i}
                        className={`${photo.large ? "md:col-span-2 md:row-span-2" : ""} 
              aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 
              hover:shadow-lg transition-shadow cursor-pointer group relative`}
                        onClick={() => setSelectedPhoto(photo.src)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-semibold">{photo.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="max-w-5xl max-h-[90vh] relative">   
                        <img
                            src={selectedPhoto}
                            alt="Фото семинара"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PhotoGallery;
