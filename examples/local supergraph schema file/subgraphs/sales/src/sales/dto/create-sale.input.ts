import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSaleInput {
  @Field()
  amount: number;

  @Field()
  productName: string;

  @Field()
  customerEmail: string;

  @Field()
  saleDate: string;
}
