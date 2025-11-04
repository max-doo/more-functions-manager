
export interface FunctionItem {
  name: string;
  description: string;
  children: FunctionItem[];
  icon?: string;
}

export type MenuItem = FunctionItem;