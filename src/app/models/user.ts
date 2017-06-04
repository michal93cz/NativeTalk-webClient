import { Opinion } from "./opinion";

export class User {
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
