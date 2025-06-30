import { Injectable } from "@nestjs/common";
import { Sale } from "./sale.entity";

@Injectable()
export class SalesService {
  private sales: Sale[] = [
    {
      id: "1",
      amount: 199.99,
      productName: "Premium Software License",
      customerEmail: "john@example.com",
      saleDate: "2024-01-15",
    },
    {
      id: "2",
      amount: 299.99,
      productName: "Enterprise Support Package",
      customerEmail: "jane@company.com",
      saleDate: "2024-01-16",
    },
    {
      id: "3",
      amount: 99.99,
      productName: "Basic Plan Subscription",
      customerEmail: "mike@startup.io",
      saleDate: "2024-01-17",
    },
  ];

  findAll(): Sale[] {
    return this.sales;
  }

  findById(id: string): Sale | undefined {
    return this.sales.find((sale) => sale.id === id);
  }

  create(saleData: Omit<Sale, "id">): Sale {
    const newSale: Sale = {
      id: Date.now().toString(),
      ...saleData,
    };
    this.sales.push(newSale);
    return newSale;
  }

  getTotalRevenue(): number {
    return this.sales.reduce((total, sale) => total + sale.amount, 0);
  }
}
