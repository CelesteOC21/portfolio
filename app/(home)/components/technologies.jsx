import { icons } from "../technologies";
import { BiQuestionMark } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Technologies({ technologies }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {technologies.map((tech) => (
        <Tooltip key={tech}>
          <TooltipTrigger
            key={tech}
            className="group relative w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer flex items-center justify-center"
          >
            {icons[tech] ?? <BiQuestionMark />}
          </TooltipTrigger>
          <TooltipContent className="bg-slate-800/90 backdrop-blur-md border border-white/10 text-white text-xs">
            <p>{tech}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
