import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, X, Film, Clock } from "lucide-react";

interface VideoData {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const videoData: Record<string, VideoData> = {
  "Inventory Management": {
    title: "Smart Inventory System Demo",
    description: "Lihat bagaimana system bekerja: real-time tracking, barcode scanning, multi-location sync, dan automated reordering dalam aksi",
    duration: "2:30",
    thumbnail: "/api/placeholder/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace dengan video actual
  },
  "CRM System": {
    title: "CRM System Walkthrough",
    description: "Demo lengkap: contact management, sales pipeline, automated follow-ups, WhatsApp integration, dan analytics dashboard",
    duration: "3:15",
    thumbnail: "/api/placeholder/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  "Dashboard Analytics": {
    title: "Analytics Dashboard Tour",
    description: "Explore dashboard features: real-time data visualization, custom reports, drill-down analysis, dan automated insights",
    duration: "2:45",
    thumbnail: "/api/placeholder/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
};

interface VideoDemoProps {
  solutionType: string;
}

export default function VideoDemo({ solutionType }: VideoDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = videoData[solutionType] || videoData["Inventory Management"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6"
    >
      <Card className="p-6 border-2">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-red-50 rounded-full">
            <Film className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h4 className="text-xl font-bold">{video.title}</h4>
            <p className="text-sm text-gray-600">{video.description}</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isPlaying ? (
            /* Video Thumbnail */
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setIsPlaying(true)}
            >
              {/* Placeholder Thumbnail - Replace with actual screenshot */}
              <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <h5 className="text-2xl font-bold mb-2">Demo Video Preview</h5>
                  <p className="text-blue-100">
                    Click to watch {video.duration} demo
                  </p>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </motion.div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-black bg-opacity-70 text-white">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </Badge>
              </div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
            </motion.div>
          ) : (
            /* Video Player */
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative"
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 z-10"
                onClick={() => setIsPlaying(false)}
              >
                <X className="w-4 h-4 mr-2" />
                Close Video
              </Button>

              {/* Embedded Video */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`${video.videoUrl}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Features Highlighted in Video */}
        {!isPlaying && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-sm mb-3">Yang Akan Anda Lihat di Video:</h5>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>Live system walkthrough</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>Key features demo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>Real use cases</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>Mobile app preview</span>
              </div>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
