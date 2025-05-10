"use client"

import type React from "react"
import { Eye, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type DashboardListingCardProps = {
  imageUrl: string
  title: string
  toWho: string
  details: { key: string; value: string }[]
  address: string
  price: string
  paymentMethod: string
  id: string
  views: number
  createdDate: string
  onDelete?: (id: string) => void
  className?: string
}

const DashboardListingCard: React.FC<DashboardListingCardProps> = ({
  imageUrl,
  title,
  toWho,
  details,
  address,
  price,
  paymentMethod,
  id,
  views,
  createdDate,
  onDelete,
  className,
}) => {
  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div className="p-0 border-2 rounded-lg border-muted bg-card hover:bg-card/80 transition-all duration-300 ease-in-out">
        <div className="flex flex-col md:flex-row w-full">
          {/* Image - Full width on mobile, fixed width on desktop */}
          <div className="w-full md:w-40 h-48 md:h-full flex-shrink-0">
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>

          {/* Content area */}
          <div className="flex flex-col md:flex-row flex-grow p-4 gap-4">
            {/* Main content */}
            <div className="flex-grow space-y-2">
              <h2 className="text-lg font-semibold text-foreground line-clamp-2">{title}</h2>

              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="secondary" className="text-xs">
                  {toWho}
                </Badge>

                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  {details.map((item, idx) => (
                    <span key={idx} className="whitespace-nowrap">
                      <span className="font-medium">{item.key}:</span> {item.value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                <span className="line-clamp-1">{address}</span>
              </div>

              <p className="text-primary font-semibold">
                {price}/{paymentMethod}
              </p>
            </div>

            {/* Meta and actions - Right aligned on desktop, bottom on mobile */}
            <div className="flex flex-row md:flex-col justify-between md:justify-start items-end md:items-end md:text-right space-y-0 md:space-y-2 pt-2 md:pt-0 border-t md:border-t-0 mt-2 md:mt-0">
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center md:justify-end gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{views}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{createdDate}</span>
                </div>
              </div>

              <Button variant="destructive" size="sm" onClick={() => onDelete?.(id)} className="mt-2 md:mt-auto">
                DELETE AD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardListingCard
