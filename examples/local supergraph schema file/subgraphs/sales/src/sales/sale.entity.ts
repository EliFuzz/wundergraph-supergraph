import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class Sale {
  @Field(() => ID)
  id: string;

  @Field()
  amount: number;

  @Field()
  productName: string;

  @Field()
  customerEmail: string;

  @Field()
  saleDate: string;
}
