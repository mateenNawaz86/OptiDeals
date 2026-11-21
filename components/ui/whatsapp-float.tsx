import { messages, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Chat button pinned to the corner of every page. */
export function WhatsAppFloat() {
  return (
    <aside aria-label="WhatsApp chat">
      <a
        href={whatsappHref(messages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with OptiDeals on WhatsApp"
        className="group fixed right-4 bottom-4 z-40 flex items-center sm:right-6 sm:bottom-6"
      >
        <span className="bg-night-800 ease-out-expo pointer-events-none mr-3 hidden translate-x-2 rounded-full px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg inset-ring inset-ring-white/10 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
          Chat with us
        </span>
        <span className="relative flex size-14 items-center justify-center">
          <span className="bg-whatsapp/50 motion-safe:animate-ping-slow absolute inset-0 rounded-full" />
          <span className="bg-whatsapp text-night-950 shadow-whatsapp ease-out-expo relative flex size-14 items-center justify-center rounded-full transition duration-300 group-hover:scale-110">
            <WhatsAppIcon className="size-7" />
          </span>
        </span>
      </a>
    </aside>
  );
}
