export default interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  page: number;
  size: number;
}
