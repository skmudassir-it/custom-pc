import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBolt, faShield, faUsers } from "@fortawesome/free-solid-svg-icons";

const stats = [
  { icon: faStar, value: "500+", label: "Builds Delivered" },
  { icon: faBolt, value: "4.9", label: "Average Rating" },
  { icon: faShield, value: "72hr", label: "Burn-In Testing" },
  { icon: faUsers, value: "6", label: "Master Builders" },
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <FontAwesomeIcon icon={stat.icon} className="size-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
