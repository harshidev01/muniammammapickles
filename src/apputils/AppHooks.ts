import { imageUplaod } from "@/servcies/app/imageUplaod";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export function useImageUplaod() {
  const {
    isPending,
    mutate: uplaodImage,
    data,
  } = useMutation({
    mutationFn: (data: FormData) => imageUplaod(data),
  });

  return { data, isPending, uplaodImage };
}

export function useImageLoader() {
  useEffect(() => {
    const handleImage = (img: HTMLImageElement) => {
      if (img.complete) {
        img.setAttribute("data-loaded", "true");
      } else {
        img.addEventListener("load", () => {
          img.setAttribute("data-loaded", "true");
        });
      }
    };

    // Initial load
    document.querySelectorAll("img").forEach((img) => handleImage(img));

    // Observe future DOM changes (e.g., route changes)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            node.querySelectorAll?.("img").forEach((img) => handleImage(img));
            if (node.tagName === "IMG") handleImage(node as HTMLImageElement);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
}

export function useGetEmailId() {
  const emailId = localStorage.getItem("MAPEmailId");
  return emailId;
}
export function useGetName() {
  const name = localStorage.getItem("MAPName");
  return name;
}
export function useGetProfileUrl() {
  const profile = localStorage.getItem("MAPProfile");
  return profile;
}
export function useGetAddressFilled() {
  const addressFillded = localStorage.getItem("MAPAddressFilled");
  return addressFillded?.toString();
}
