import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, useEffect } from "react";

export type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

export type FloatingDockProps = {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
};

export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

function FloatingDockMobile({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  // Close when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="campus-dock-nav"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 bottom-full mb-3 flex flex-col items-center gap-2.5"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                aria-label={item.title}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ delay: index * 0.03, duration: 0.15 }}
                className="flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/20 bg-ink-900/95 text-paper shadow-2xl backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-paper active:scale-95 transition-transform"
              >
                <span className="h-5 w-5 flex items-center justify-center">{item.icon}</span>
                <span className="sr-only">{item.title}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close quick navigation dock" : "Open quick navigation dock"}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink-900/95 text-paper shadow-2xl backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-paper active:scale-95 transition-all",
          open && "bg-paper text-ink border-paper"
        )}
      >
        <IconLayoutNavbarCollapse className={cn("h-5 w-5 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
      </button>
    </div>
  );
}

function FloatingDockDesktop({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <nav
      aria-label="Quick section navigation"
      className={cn("hidden md:flex", className)}
      onMouseMove={(event) => mouseX.set(event.clientX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
    >
      {items.map((item) => (
        <DockIcon key={item.title} item={item} mouseX={mouseX} />
      ))}
    </nav>
  );
}

function DockIcon({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  const distance = useTransform(mouseX, (value) => {
    if (typeof window === "undefined" || !ref.current || !Number.isFinite(value)) return 999;
    const bounds = ref.current.getBoundingClientRect();
    return value - (bounds.left + bounds.width / 2);
  });

  const rawSize = useTransform(distance, [-120, 0, 120], [42, 58, 42]);
  const size = useSpring(rawSize, {
    mass: 0.12,
    stiffness: 180,
    damping: 15,
  });

  const effectiveSize = prefersReducedMotion ? 44 : size;

  return (
    <motion.a
      ref={ref}
      href={item.href}
      aria-label={item.title}
      style={{ width: effectiveSize, height: effectiveSize }}
      className="group relative flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink-900/90 text-paper/90 hover:text-white hover:border-white/40 shadow-xl backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-paper transition-colors"
    >
      <span className="flex h-5 w-5 items-center justify-center transition-transform group-hover:scale-110">
        {item.icon}
      </span>
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-white/15 bg-ink-950/95 px-2.5 py-1 text-[11px] font-mono tracking-wider text-paper opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {item.title}
      </span>
    </motion.a>
  );
}
