"use client"
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

interface HackathonCardProps {
  title: string;
  status: string;
  date: string;
  description: string;
  imageUrl: string;
}

export function HackathonCard({
  title,
  status,
  date,
  description,
  imageUrl,
}: HackathonCardProps) {
  // Convert title -> slug for dynamic route
  const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  return (
    <Link href={`/hackathons/${slug}`} className="group w-[350px]">
      <Card className="relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg cursor-pointer">
        {/* Banner Image */}
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold">{title}</h3>

          {/* Status + Date */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <Badge
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                status === "ONGOING"
                  ? "bg-green-500 text-white"
                  : status === "UPCOMING"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-400 text-white"
              }`}
            >
              {status}
            </Badge>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-snug">{description}</p>
        </CardContent>

        {/* Hover "Explore →" Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="inline-flex items-center text-primary font-semibold text-sm">
            Explore <ArrowRight className="ml-1 w-4 h-4" />
          </span>
        </motion.div>
      </Card>
    </Link>
  );
}
