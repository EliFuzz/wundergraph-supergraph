
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCampaignInput {
    name: string;
    description: string;
    budget: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
}

export class CampaignPayload {
    id: string;
    name: string;
    description: string;
    budget: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
}

export abstract class IQuery {
    abstract campaigns(): CampaignPayload[] | Promise<CampaignPayload[]>;

    abstract campaign(id: string): Nullable<CampaignPayload> | Promise<Nullable<CampaignPayload>>;

    abstract activeCampaigns(): CampaignPayload[] | Promise<CampaignPayload[]>;

    abstract totalMarketingBudget(): number | Promise<number>;

    abstract activeMarketingBudget(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createCampaign(input: CreateCampaignInput): CampaignPayload | Promise<CampaignPayload>;
}

type Nullable<T> = T | null;
