export type FilterType = 'asc' | 'desc' | 'all';
export interface IFilterProps {
  filter: FilterType;
  onChange: (filter: FilterType) => void;
}
