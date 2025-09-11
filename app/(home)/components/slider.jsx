import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GoArrowUpRight } from "react-icons/go";

export function Slider({ images }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="group bg-transparent border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-200 transition-all duration-200">
          <span>View Gallery</span>
          <GoArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] bg-gradient-to-br from-slate-900 bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg p-0">
        <DialogHeader className="flex items-start justify-between p-4 border-b bg-slate-800/50 border-slate-700">
          <DialogTitle className="text-lg font-semibold text-white">
            Images
          </DialogTitle>
        </DialogHeader>
        <Carousel className="p-2 pt-2">
          <CarouselContent>
            {images?.map((src, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center rounded-md h-[200px] md:h-[400px] w-full">
                  <img
                    src={src || "/placeholder.svg"}
                    className="m-6 h-full w-full   rounded-md"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-blue-900/40 backdrop-blur-md border-blue-400/30 hover:bg-blue-800/50 text-blue-100 hover:text-white shadow-lg transition-all duration-200 left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="bg-blue-900/40 backdrop-blur-md border-blue-400/30 hover:bg-blue-800/50 text-blue-100 hover:text-white shadow-lg transition-all duration-200 right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
