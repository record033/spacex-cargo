export interface IEditCargoInput {
  boxesValue: string | null;
  onEdit(newValue: string): void;
}
