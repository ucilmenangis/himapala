import { Heart, Target, Award } from "lucide-react";
import { Card } from "./ui/card";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-primary mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TrailBlazers Society is more than just a hiking club—we're a passionate community dedicated to exploring, protecting, and celebrating the natural world.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1726091983472-a7da2540c492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBncm91cCUyMG5hdHVyZXxlbnwxfHx8fDE3NTk0MTQ1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hiking group"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-4 text-primary">Our Mission</h3>
            <p className="text-foreground/80">
              To inspire and enable people of all backgrounds to experience the joy and benefits of outdoor hiking while promoting environmental stewardship and community connection.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-4 text-primary">Our Vision</h3>
            <p className="text-foreground/80">
              A world where every person has access to nature, understands their role in protecting it, and benefits from the physical and mental wellness that outdoor activities provide.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/30 border-primary/20">
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-4 text-primary">Our Values</h3>
            <p className="text-foreground/80">
              Community, sustainability, inclusivity, safety, and respect for nature guide everything we do. We believe in leaving no trace and leaving trails better than we found them.
            </p>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="bg-secondary/30 rounded-2xl p-12">
          <h2 className="text-3xl text-primary mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-2 bg-primary rounded-full flex-shrink-0" />
              <div>
                <h4 className="mb-2 text-primary">Guided Hikes</h4>
                <p className="text-foreground/70">Weekly excursions led by experienced guides to trails of varying difficulty levels.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-primary rounded-full flex-shrink-0" />
              <div>
                <h4 className="mb-2 text-primary">Skills Workshops</h4>
                <p className="text-foreground/70">Learn navigation, wilderness first aid, camping techniques, and photography skills.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-primary rounded-full flex-shrink-0" />
              <div>
                <h4 className="mb-2 text-primary">Conservation Projects</h4>
                <p className="text-foreground/70">Participate in trail maintenance and habitat restoration initiatives.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-primary rounded-full flex-shrink-0" />
              <div>
                <h4 className="mb-2 text-primary">Social Events</h4>
                <p className="text-foreground/70">Monthly meetups, campfire gatherings, and annual celebration events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
