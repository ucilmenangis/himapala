import { useState } from "react";
import { X } from "lucide-react";

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1623622863859-2931a6c3bc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsfGVufDF8fHx8MTc1OTMyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Jalur Gunung"
    },
    {
      url: "https://images.unsplash.com/photo-1726091983472-a7da2540c492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBncm91cCUyMG5hdHVyZXxlbnwxfHx8fDE3NTk0MTQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Petualangan Kelompok"
    },
    {
      url: "https://images.unsplash.com/photo-1759174700940-4357104f0a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMHNjZW5pY3xlbnwxfHx8fDE3NTk0MTQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Jalur Hutan"
    },
    {
      url: "https://images.unsplash.com/photo-1676831140178-4f8f5118e254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHBlYWslMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU5NDEzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Puncak Gunung"
    },
    {
      url: "https://images.unsplash.com/photo-1511714975599-bf72be56a08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBiYWNrcGFjayUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTk0MTMxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Perjalanan Ransel"
    },
    {
      url: "https://images.unsplash.com/photo-1653942862772-8c586a3481bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMHZpZXd8ZW58MXx8fHwxNzU5MzQwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pemandangan Lembah"
    },
    {
      url: "https://images.unsplash.com/photo-1699388714018-f3d00ac8eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBzdW5zZXQlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTk0MTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Pendakian Senja"
    },
    {
      url: "https://images.unsplash.com/photo-1590252497717-dc039b62f57e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBtZWFkb3clMjBmbG93ZXJzfGVufDF8fHx8MTc1OTM1OTc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Padang Rumput Alpen"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">Galeri</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Menangkap momen dari petualangan kami melintasi gunung, hutan, dan jalur pendakian
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/20">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Add more rows with different aspect ratios for variety */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {images.slice(0, 2).map((image, index) => (
            <div
              key={`wide-${index}`}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-[16/9] overflow-hidden bg-secondary/20">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-10 w-10" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
