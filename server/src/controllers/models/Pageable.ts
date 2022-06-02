import { OnSerialize } from "@tsed/json-mapper";
import { Default, Description, Integer, Max, Min } from "@tsed/schema";

export class Pageable {
  @Integer()
  @Min(0)
  @Default(0)
  @Description("Page number.")
  @OnSerialize(Number)
  page = 0;

  @Integer()
  @Min(1)
  @Max(50000)
  @Default(25)
  @Description("Number of objects per page.")
  @OnSerialize(Number)
  size = 25;

  constructor(options: Partial<Pageable>) {
    options.page && (this.page = options.page);
    options.size && (this.size = options.size);
  }

  get offset(): number {
    return this.page ? +this.page * this.limit : 0;
  }

  get limit(): number {
    return +this.size;
  }
}
