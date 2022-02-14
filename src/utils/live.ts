import { property } from "lit/decorators.js";

export const live = property({ type: Object, hasChanged: () => true });
