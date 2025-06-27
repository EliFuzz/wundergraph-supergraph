import { CampaignPayload } from "src/graphql.schema";

export class Campaign implements CampaignPayload {
  id: string;
  name: string;
  description: string;
  budget: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
}
