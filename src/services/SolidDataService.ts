import {
  getSolidDataset,
  getThing,
  getTermAll
} from "@inrupt/solid-client";
import type { Session } from "@inrupt/solid-client-authn-browser";
import type { SolidDataset, ThingPersisted } from "@inrupt/solid-client";
import type { Quad_Object } from "rdf-js"

export interface SolidDataServiceOptions {
  session: Session,
  dataset: SolidDataset | string,
  thing: ThingPersisted | string,
  property: string
}

export default {
  async getDataset(datasetUrl: string, options?: Partial<Pick<SolidDataServiceOptions, "session">>): Promise<SolidDataset> {
    return getSolidDataset(datasetUrl, options?.session?.info.isLoggedIn ? { fetch: options.session.fetch } : undefined);
  },
  async getThing(thingUrl: string, options?: Partial<Pick<SolidDataServiceOptions, "dataset" | "session">>): Promise<ThingPersisted | null> {
    const dataset: SolidDataset = typeof options?.dataset === "object" ? options?.dataset : await this.getDataset(options?.dataset ?? thingUrl, options?.session ? { session: options.session } : undefined);
    return getThing(dataset, thingUrl)
  },
  async getTerms(property: string, options: Partial<Pick<SolidDataServiceOptions, "dataset" | "session">> & { thing: ThingPersisted | string }): Promise<Quad_Object[]> {
    const thing: ThingPersisted | null = typeof options.thing === "object" ? options.thing : await this.getThing(options.thing, options);
    if (!thing) return [];
    return getTermAll(thing, property);
  }
}
