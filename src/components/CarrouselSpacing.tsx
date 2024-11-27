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
        {skillsCards.map(({ title, icon: Icon }) => (
          <CarouselItem key={title} className="basis-1/5">
            <div className="flex items-center justify-center gap-2 bg-zinc-100 rounded-[4px] p-4 h-[200px]">
              {/* <Icon /> */}
              <p className="text-sm font-semibold text-black">{title}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
