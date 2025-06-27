import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CampaignPayload, CreateCampaignInput } from "src/graphql.schema";
import { MarketingService } from "./marketing.service";

@Resolver("Campaign")
export class MarketingResolver {
  constructor(private readonly marketingService: MarketingService) {}

  @Query("campaigns")
  campaigns(): CampaignPayload[] {
    return this.marketingService.findAll();
  }

  @Query("campaign")
  campaign(@Args("id") id: string): CampaignPayload | undefined {
    return this.marketingService.findById(id);
  }

  @Query("activeCampaigns")
  activeCampaigns(): CampaignPayload[] {
    return this.marketingService.findActive();
  }

  @Query("totalMarketingBudget")
  totalMarketingBudget(): number {
    return this.marketingService.getTotalBudget();
  }

  @Query("activeMarketingBudget")
  activeMarketingBudget(): number {
    return this.marketingService.getActiveBudget();
  }

  @Mutation("createCampaign")
  createCampaign(@Args("input") input: CreateCampaignInput): CampaignPayload {
    return this.marketingService.create(input);
  }
}
