import { Injectable } from "@nestjs/common";
import { Campaign } from "./campaign.entity";

@Injectable()
export class MarketingService {
  private campaigns: Campaign[] = [
    {
      id: "1",
      name: "Summer Sale 2024",
      description: "Annual summer discount campaign",
      budget: 50000,
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      isActive: true,
    },
    {
      id: "2",
      name: "Product Launch Campaign",
      description: "Launch campaign for new enterprise features",
      budget: 75000,
      startDate: "2024-02-01",
      endDate: "2024-03-31",
      isActive: false,
    },
    {
      id: "3",
      name: "Holiday Promotion",
      description: "End of year holiday promotion",
      budget: 30000,
      startDate: "2024-12-01",
      endDate: "2024-12-31",
      isActive: true,
    },
  ];

  findAll(): Campaign[] {
    return this.campaigns;
  }

  findById(id: string): Campaign | undefined {
    return this.campaigns.find((campaign) => campaign.id === id);
  }

  findActive(): Campaign[] {
    return this.campaigns.filter((campaign) => campaign.isActive);
  }

  create(campaignData: Omit<Campaign, "id">): Campaign {
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      ...campaignData,
    };
    this.campaigns.push(newCampaign);
    return newCampaign;
  }

  getTotalBudget(): number {
    return this.campaigns.reduce((total, campaign) => total + campaign.budget, 0);
  }

  getActiveBudget(): number {
    return this.campaigns.filter((campaign) => campaign.isActive).reduce((total, campaign) => total + campaign.budget, 0);
  }
}
