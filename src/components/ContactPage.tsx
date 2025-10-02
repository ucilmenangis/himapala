import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { Card } from "./ui/card";

export function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">Hubungi Kami</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Punya pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl text-primary mb-6">Informasi Kontak</h2>
            
            {/* Email */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-primary mb-2">Email</h3>
                  <a 
                    href="mailto:himapala@polije.ac.id" 
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    himapala@polije.ac.id
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Untuk pertanyaan dan informasi umum
                  </p>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-primary mb-2">Telepon / WhatsApp</h3>
                  <a 
                    href="tel:+628123456789" 
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    +62 812-3456-789 (Ketua)
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hubungi untuk informasi kegiatan
                  </p>
                </div>
              </div>
            </Card>

            {/* WhatsApp */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-primary mb-2">Sekretariat</h3>
                  <p className="text-foreground/80">
                    Gedung Kemahasiswaan Polije<br/>
                    Lantai 2, Ruang UKM
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Buka saat jam kuliah
                  </p>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-primary mb-2">Alamat Kampus</h3>
                  <p className="text-foreground/80">
                    Politeknik Negeri Jember<br />
                    Jl. Mastrip PO BOX 164<br />
                    Jember 68121, Jawa Timur
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Media & Map */}
          <div className="space-y-8">
            {/* Social Media */}
            <div>
              <h2 className="text-3xl text-primary mb-6">Media Sosial</h2>
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-primary mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/himapala_polije" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        @himapala_polije
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-primary mb-1">TikTok</h3>
                      <a 
                        href="https://tiktok.com/@himapala.polije" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        @himapala.polije
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-primary mb-1">Line Group</h3>
                      <a 
                        href="https://line.me/R/ti/g/himapala_polije" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        HIMAPALA Polije
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl text-primary mb-6">Lokasi Kampus</h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2976837087636!2d113.7166!3d-8.1599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b617d8f623%3A0xf6c4437730b26e4!2sPoliteknik%20Negeri%20Jember!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Politeknik Negeri Jember"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
          <h2 className="text-2xl text-primary mb-4">Jam Operasional</h2>
          <div className="grid md:grid-cols-2 gap-6 text-foreground/70">
            <div>
              <p className="mb-2">Senin - Jumat</p>
              <p>09:00 - 17:00 WIB</p>
            </div>
            <div>
              <p className="mb-2">Sabtu - Minggu</p>
              <p>10:00 - 15:00 WIB</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Untuk keadaan darurat di luar jam operasional, hubungi kami melalui WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
