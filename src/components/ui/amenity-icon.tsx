import {
  Camera,
  Video,
  ShieldCheck,
  Flame,
  Zap,
  ArrowUpDown,
  Car,
  UserCheck,
  Droplets,
  Recycle,
  Phone,
  Trees,
  Armchair,
  DoorOpen,
  Sun,
  PlugZap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Video,
  ShieldCheck,
  Flame,
  Zap,
  ArrowUpDown,
  Car,
  UserCheck,
  Droplets,
  Recycle,
  Phone,
  Trees,
  Armchair,
  DoorOpen,
  Sun,
  PlugZap,
};

export function AmenityIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Camera;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
