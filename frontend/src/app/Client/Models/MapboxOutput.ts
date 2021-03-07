import { Feature } from '../Models/Feature';

export interface MapboxOutput{
    attribution: String;
    features: Feature[];
    query: [];
}