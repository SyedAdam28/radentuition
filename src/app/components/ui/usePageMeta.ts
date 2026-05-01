/**
 * usePageMeta – sets document title & meta description per page.
 */
import { useEffect } from "react";

export function usePageMeta(title: string, description: string, keywords?: string) {
  useEffect(() => {
    document.title = `${title} | RADEN Tutoring Hub`;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector<HTMLMetaElement>(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      if (!element) {
        element = document.createElement("meta");
        if (isProperty) {
          element.setAttribute("property", name);
        } else {
          element.name = name;
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    
    // Open Graph
    updateMeta("og:title", `${title} | RADEN Tutoring Hub`, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", "website", true);

    // Robots
    updateMeta("robots", "index, follow");
  }, [title, description, keywords]);
}
