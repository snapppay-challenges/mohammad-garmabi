type Meta = {
  skipped: number;
  limit: number;
  total: number;
  criteria: Record<string, unknown>;
};

interface IGeneralResponse<T = unknown> {
  meta: Meta;
  items: T;
}
