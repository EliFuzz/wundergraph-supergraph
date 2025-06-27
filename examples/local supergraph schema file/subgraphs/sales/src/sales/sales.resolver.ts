import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateSaleInput } from "./dto/create-sale.input";
import { Sale } from "./sale.entity";
import { SalesService } from "./sales.service";

@Resolver(() => Sale)
export class SalesResolver {
  constructor(private readonly salesService: SalesService) {}

  @Query(() => [Sale])
  sales(): Sale[] {
    return this.salesService.findAll();
  }

  @Query(() => Sale, { nullable: true })
  sale(@Args("id") id: string): Sale | undefined {
    return this.salesService.findById(id);
  }

  @Query(() => Number)
  totalRevenue(): number {
    return this.salesService.getTotalRevenue();
  }

  @Mutation(() => Sale)
  createSale(@Args("input") input: CreateSaleInput): Sale {
    return this.salesService.create(input);
  }
}
