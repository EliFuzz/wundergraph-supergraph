import { Module } from "@nestjs/common";
import { MarketingResolver } from "./marketing.resolver";
import { MarketingService } from "./marketing.service";

@Module({
  providers: [MarketingResolver, MarketingService],
})
export class MarketingModule {}
