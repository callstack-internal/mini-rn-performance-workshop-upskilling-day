import axios, {AxiosResponse} from 'axios';

type baseOptions = 'ids' | 'limit' | 'page' | 'fields';
type artworksIncludes =
  | 'artist_pivots'
  | 'catalogue_pivots'
  | 'dates'
  | 'place_pivots'
  | 'sites';
type exhibitionsIncludes = 'artworks' | 'sites';

type allOptions = baseOptions;
type allIncludes = artworksIncludes & exhibitionsIncludes;

type endpointParams = {[key in allOptions]?: string} & {
  include?: allIncludes[];
};

export class ArtService {
  protected static BASE_URL = 'https://api.artic.edu/api/v1';
  protected static ENDPOINTS = {
    'collections/artworks': `${ArtService.BASE_URL}/artworks`,
    'collections/exhibitions': `${ArtService.BASE_URL}/exhibitions`,
  };

  constructor({}) {}

  private getEndpoint(
    address: keyof typeof ArtService.ENDPOINTS,
    params?: endpointParams,
  ): string | null {
    const url = ArtService.ENDPOINTS[address];
    if (!url) {
      console.error(
        `Provided address {${address}} doesn't exists. Aborting...`,
      );
      return null;
    }

    return this.parseParams(url, params);
  }

  private parseParams = (endpoint: string, params?: endpointParams) => {
    if (!params) {
      return endpoint;
    }

    const keys = Object.keys(params);
    const result = keys.reduce<string>(
      (prev, curr, idx) =>
        `${prev}${idx === 0 ? '?' : '&'}${curr}=${params[curr as allOptions]}`,
      endpoint,
    );

    return result;
  };

  public fetch = async (
    address: keyof typeof ArtService.ENDPOINTS,
    params?: endpointParams,
  ): Promise<AxiosResponse<any> | unknown | null> => {
    const endpoint = this.getEndpoint(address, params);
    if (!endpoint) {
      return null;
    }

    try {
      const data = await axios.get(endpoint);
      return data?.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
}

export const artService = new ArtService({});
