import { Opinion } from "./opinion";

export class User {
  _id: string;
  name: string;
  bio: string;
  default_language: string;
  default_city: string;
  created_at: string;
  opinions: [ Opinion ];
  average_opinion: number;

  constructor(
    _id: string,
    name: string,
    bio: string,
    native_language: string,
    default_city: string,
    created_at: string,
    default_district?: string,
    default_country?: string,
    opinions?: [ Opinion ],
    average_opinion?: number
  ) { }
}
