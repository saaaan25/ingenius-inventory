import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { es } from "date-fns/locale";

export const DateFormItem = ({ field }) => {
  const handleDateChange = (date) => {
    if (!date) return;
    const currentDate = field.value ? new Date(field.value) : new Date();
    date.setHours(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
    field.onChange(date.toISOString());
  };

  const handleTimeChange = (time) => {
    if (!time) return;
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const currentDate = field.value ? new Date(field.value) : new Date();
    currentDate.setHours(hours, minutes, seconds || 0);
    field.onChange(currentDate.toISOString());
  };

  return (
    <FormItem>
      <FormLabel>Fecha y Hora</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
            >
              {field.value ? (
                format(new Date(field.value), "PPP p", { locale: es })
              ) : (
                <span>Elige una fecha y hora</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 z-50" align="end" side="bottom">
          <Calendar
            mode="single"
            selected={field.value ? new Date(field.value) : undefined}
            onSelect={handleDateChange}
            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
            initialFocus
            locale={es}
            className="bg-white border-zinc-200 border rounded-lg"
          />
          <div className="p-2">
            <input
              type="time"
              step="1"
              value={field.value ? format(new Date(field.value), "HH:mm:ss") : "00:00:00"}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};
