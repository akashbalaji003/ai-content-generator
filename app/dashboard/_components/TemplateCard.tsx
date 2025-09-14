// TemplateCard.tsx
import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
    <div className="group h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      {/* Icon at top left, indented */}
      <div className="mb-4">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 ring-1 ring-slate-200">
          <Image src={item.icon} alt={`${item.name} icon`} width={24} height={24} className="h-6 w-6" />
        </div>
      </div>
      
      {/* Name and description */}
      <div className="flex-1">
        <h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-900 line-clamp-2 sm:line-clamp-1 mb-2">
          {item.name}
        </h3>
        {/* allows full description without clipping */}
        <p className="text-xs sm:text-sm leading-4 sm:leading-5 text-slate-600 min-h-[4rem] sm:min-h-[5rem]">
          {item.desc}
        </p>
      </div>
      {/* keeps footer space consistent if you add buttons later */}
      <div className="mt-auto" />
    </div>
    </Link>
  );
}

export default TemplateCard;