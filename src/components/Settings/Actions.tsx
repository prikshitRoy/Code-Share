import { cn } from "@/lib/cn";
import { snap } from "@/lib/snap";
import Loader from "../ui/Loader";

import { useState } from "react";
/* import { useSession } from "next-auth/react"; */
import { AnimatePresence, motion } from "framer-motion";
import { Check, X, Link, Copy, ImageIcon } from "lucide-react";

type ButtonType = "DEFAULT" | "SUCCESS" | "FAILURE" | "LOADING";

interface Button {
  id: string;
  label: Partial<{ [key in ButtonType]: string }>;
  icon: { [key in ButtonType]: JSX.Element };
  action: () => Promise<void>;
  isDisabled?: boolean;
  hotKey: {
    key: string;
    options?: {
      enabled?: boolean;
      preventDefault?: boolean;
    };
  };
}

export default function Actions() {
  /*   const { status: sessionStatus } = useSession(); */

  const statusIcons = {
    SUCCESS: <Check size={16} aria-hidden="true" />,
    FAILURE: <X size={16} aria-hidden="true" />,
    LOADING: <Loader />,
  };

  const buttons: Button[] = [
    {
      id: "copy-link",
      label: {
        DEFAULT: "Copy link",
        SUCCESS: "Link Copied",
      },
      icon: {
        DEFAULT: <Link size={16} aria-hidden="true" />,
        ...statusIcons,
      },
      action: () => snap("COPY_LINK"),
      isDisabled: false /* sessionStatus === "unauthenticated", */,
      hotKey: {
        key: "meta+shift+c",
        options: {
          preventDefault: true,
        },
      },
    },
    {
      id: "copy-image",
      label: {
        DEFAULT: "Copy image",
        SUCCESS: "Image copied",
      },
      icon: {
        DEFAULT: <Copy size={16} aria-hidden="true" />,
        ...statusIcons,
      },
      action: () => snap("COPY_IMAGE"),
      hotKey: {
        key: "meta+c",
      },
    },
    {
      id: "download-image",
      label: {
        DEFAULT: "Download as PNG",
        SUCCESS: "Image download started",
      },
      icon: {
        DEFAULT: <ImageIcon size={16} aria-hidden="true" />,
        ...statusIcons,
      },
      action: () => snap("DOWNLOAD_IMAGE"),
      hotKey: {
        key: "meta+s",
        options: {
          preventDefault: true,
        },
      },
    },
  ];

  return (
    <div className={cn("grid grid-cols-3 place-items-center p-2")}>
      {buttons.map((button) => (
        <Button key={button.id} {...button} />
      ))}
    </div>
  );
}

function Button({
  id,
  label,
  icon,
  action,
  isDisabled = false,
  hotKey,
}: Button) {
  const [buttonState, setButtonState] = useState<ButtonType>("DEFAULT");

  async function wrappedAction() {
    try {
      await action();

      setButtonState("SUCCESS");
    } catch (e) {
      setButtonState("FAILURE");
    } finally {
      const timer = setTimeout(() => setButtonState("DEFAULT"), 2500);

      return () => clearTimeout(timer);
    }
  }

  return (
    <button
      type="button"
      onClick={wrappedAction}
      disabled={buttonState !== "DEFAULT" || isDisabled}
      className={cn(
        "flex items-center justify-center rounded-lg px-1.5 py-1",
        "select-none outline-none",
        "transition-all duration-100 ease-in-out",
        "enabled:hover:bg-white/20 enabled:hover:text-amlost-white",
        "focus:text-amlost-white",
        "disabled:cursor-not-allowed disabled:opacity-50"
      )}
      aria-label={id}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={buttonState}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.08, delay: 0.08 }}
        >
          <div className={cn("flex items-center gap-2")}>
            {icon[buttonState]}
            {label[buttonState] ?? label.DEFAULT}
          </div>
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
