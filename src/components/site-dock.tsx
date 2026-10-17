import React from "react";
import {
  IconBriefcase,
  IconHome,
  IconMail,
  IconSettings,
  IconListCheck,
  IconSparkles,
} from "@tabler/icons-react";
import { FloatingDock, DockItem } from "@/components/ui/floating-dock";

const dockItems: DockItem[] = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full" />,
    href: "#home",
  },
  {
    title: "Work",
    icon: <IconBriefcase className="h-full w-full" />,
    href: "#work",
  },
  {
    title: "Services",
    icon: <IconSettings className="h-full w-full" />,
    href: "#services",
  },
  {
    title: "Process",
    icon: <IconListCheck className="h-full w-full" />,
    href: "#process",
  },
  {
    title: "Studio",
    icon: <IconSparkles className="h-full w-full" />,
    href: "#approach",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full" />,
    href: "#contact",
  },
];

export function SiteDock() {
  return (
    <div
      aria-label="Floating quick navigation dock"
      className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4"
    >
      <div className="pointer-events-auto">
        <FloatingDock
          items={dockItems}
          desktopClassName="items-end gap-3 rounded-full border border-white/15 bg-ink-950/90 px-4 py-2.5 shadow-dock backdrop-blur-xl"
          mobileClassName="rounded-full"
        />
      </div>
    </div>
  );
}
