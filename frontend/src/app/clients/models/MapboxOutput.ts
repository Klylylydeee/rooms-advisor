import { Feature } from 'src/app/clients/models/Feature';

export interface MapboxOutput{
    attribution: String;
    features: Feature[];
    query: [];
}