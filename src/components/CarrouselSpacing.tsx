import { skillsCards } from "@/lib/SkillsCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="-ml-4">
        {skillsCards.map(({ title, icon }) => (
          <CarouselItem
            key={title}
            className="xl:basis-1/5 basis-1/3 shadow-sm"
          >
            <div className="flex flex-col gap-2 items-center justify-center bg-zinc-100 dark:bg-[#222222] rounded-[4px] p-4 h-[200px]">
              <span>{icon}</span>
              <p className="md:text-xl text-sm font-semibold text-black dark:text-white">
                {title}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
