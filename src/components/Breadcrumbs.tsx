import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-sm ${className}`}>
      <ol
        className="flex items-center gap-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            href="/"
            itemProp="item"
            className="text-[color:var(--text-tertiary)] hover:text-[color:var(--foreground)] transition-colors flex items-center gap-1 dark:text-gray-400 dark:hover:text-white"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name" className="sr-only">Início</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <ChevronRight className="w-4 h-4 text-[color:var(--text-tertiary)] dark:text-gray-600" />
            {item.href ? (
              <Link
                href={item.href}
                itemProp="item"
                className="text-[color:var(--text-tertiary)] hover:text-[color:var(--foreground)] transition-colors dark:text-gray-400 dark:hover:text-white"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-[color:var(--foreground)] font-medium dark:text-white">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
