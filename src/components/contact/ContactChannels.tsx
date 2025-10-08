"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { contactContent } from "@/content/contato";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const channelVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

interface ChannelCardProps {
  channel: (typeof contactContent.channels)[number];
  index: number;
}

function ChannelCard({ channel, index }: ChannelCardProps) {
  const { ref, shouldAnimate } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      variants={channelVariants}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate ? undefined : "visible"}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={shouldAnimate ? { once: true, margin: "0px 0px -15% 0px" } : undefined}
      transition={{ duration: 0.5, ease: "easeOut", delay: shouldAnimate ? index * 0.05 : 0 }}
      className="flex flex-col rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-5 shadow-[0_22px_50px_-28px_var(--card-shadow)] transition-colors dark:border-white/10 dark:bg-[#212121]"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--header-link-muted)] dark:text-neutral-300">
        {channel.label}
      </span>
      <p className="mt-2 text-base font-semibold text-[color:var(--foreground)] dark:text-white">
        {channel.href ? (
          <Link
            href={channel.href}
            className="transition hover:text-[#DD0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F77F00] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-muted)] dark:focus-visible:ring-offset-[#121212]"
          >
            {channel.value}
          </Link>
        ) : (
          channel.value
        )}
      </p>
      <p className="mt-1 text-sm text-[color:var(--text-secondary)] dark:text-neutral-200">
        {channel.description}
      </p>
    </motion.div>
  );
}

export function ContactChannels() {
  return (
    <div className="grid gap-4">
      {contactContent.channels.map((channel, index) => (
        <ChannelCard key={channel.label} channel={channel} index={index} />
      ))}
    </div>
  );
}
