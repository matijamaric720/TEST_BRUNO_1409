"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((elm, i) => {
        const isActive =
          elm.link && pathname.split("/")[1] === elm.link.split("/")[1];
        const isSubActive = elm.subMenu?.some(
          (sub) => pathname.split("/")[1] === sub.link.split("/")[1]
        );

        return (
          <li key={i} className={elm.subMenu ? "has-children" : ""}>
            {elm.link ? (
              <Link
                href={elm.link}
                className={`active ${isActive || isSubActive ? "active-link" : ""}`}
              >
                {elm.title}
              </Link>
            ) : (
              <span className={`active ${isSubActive ? "active-link" : ""}`}>
                {elm.title}
              </span>
            )}

            {elm.subMenu && (
              <ul className="sub-menu">
                {elm.subMenu.map((subItem, i2) => (
                  <li key={i2}>
                    <Link
                      href={subItem.link}
                      className={
                        pathname.split("/")[1] === subItem.link.split("/")[1]
                          ? "active-link"
                          : ""
                      }
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
}
