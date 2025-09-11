import { icons } from "../technologies";
import { BiQuestionMark } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Technologies({ technologies }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {technologies.map((tech) => (
        <Tooltip key={tech}>
          <TooltipTrigger
            key={tech}
            className="group relative w-8 h-8 rounded-full border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer flex items-center justify-center"
          >
            {icons[tech] ?? <BiQuestionMark />}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tech}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
