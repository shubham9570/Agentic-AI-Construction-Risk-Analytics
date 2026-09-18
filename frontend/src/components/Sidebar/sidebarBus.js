export const SIDEBAR_TOGGLE_EVENT = "buildai:toggle-sidebar";

export function toggleSidebar() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(SIDEBAR_TOGGLE_EVENT));
  }
}
