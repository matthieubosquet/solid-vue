import {
  getSolidDataset,
  getThing,
  getStringNoLocale
} from "@inrupt/solid-client";

export default {
  async getDataset(datasetUrl: string) {
    return getSolidDataset(datasetUrl);
  },
  async getThing(thingUrl: string, datasetUrl?: string) {
    datasetUrl = datasetUrl ?? thingUrl;
    return getThing(await this.getDataset(datasetUrl), thingUrl)
  },
  async getString(property: string, thingUrl: string, datasetUrl?: string) { 
    return getStringNoLocale(await this.getThing(thingUrl, datasetUrl) as any, property);
  }
}
