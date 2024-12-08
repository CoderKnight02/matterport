"use client";

import { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  Car,
  HomeIcon,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const miamiAirports = [
  { value: "MIA", label: "Miami International Airport" },
  { value: "FLL", label: "Fort Lauderdale-Hollywood International Airport" },
  { value: "OPF", label: "Miami-Opa Locka Executive Airport" },
  { value: "TMB", label: "Miami Executive Airport" },
];

export default function TravelBooking() {
  const [bookingType, setBookingType] = useState("room-flight");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg transform -translate-y-1/2">
      <RadioGroup
        defaultValue="room-flight"
        className="flex flex-wrap justify-around gap-6 mb-6"
        onValueChange={setBookingType}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="room-flight" id="room-flight" />
          <Label htmlFor="room-flight" className="flex items-center gap-1">
            <HomeIcon size={16} /> Room + <Plane size={16} /> Flight
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="room-flight-car" id="room-flight-car" />
          <Label htmlFor="room-flight-car" className="flex items-center gap-1">
            <HomeIcon size={16} /> Room + <Plane size={16} /> Flight +
            <Car size={16} /> Car
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="room-car" id="room-car" />
          <Label htmlFor="room-car" className="flex items-center gap-1">
            <HomeIcon size={16} /> Room + <Car size={16} /> Car
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <RadioGroupItem value="room" id="room" />
          <Label htmlFor="room" className="flex items-center gap-1">
            <HomeIcon size={16} /> Room
          </Label>
        </div>
      </RadioGroup>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
            <PlaneTakeoff className="h-4 w-4" />
            ORIGIN
          </Label>
          <input
            type="text"
            placeholder="From City/Airport"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="relative">
          <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
            <PlaneLanding className="h-4 w-4" />
            DESTINATION
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Miami Airport" />
            </SelectTrigger>
            <SelectContent>
              {miamiAirports.map((airport) => (
                <SelectItem key={airport.value} value={airport.value}>
                  {airport.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            DATES
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dateRange && "text-muted-foreground"
                )}
              >
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button className="bg-black text-white hover:bg-gray-800 px-6">
          Book My Vacation
        </Button>
      </div>
    </div>
  );
}
