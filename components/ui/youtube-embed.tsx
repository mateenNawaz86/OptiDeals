"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "./icons";

/**
 * Click-to-load YouTube player. Only the poster image loads with the page; the player
 * (and YouTube's scripts and cookies) load when the visitor presses play.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-night-900 relative aspect-video overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="ease-out-expo object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="from-night-950/70 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
          <span className="absolute top-1/2 left-1/2 flex size-18 -translate-1/2 items-center justify-center sm:size-24">
            <span className="motion-safe:animate-ping-slow absolute inset-0 rounded-full bg-white/40" />
            <span className="text-night-950 ease-out-expo relative flex size-full items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <PlayIcon className="size-7 sm:size-9" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
