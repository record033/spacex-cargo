export interface IEditCargoInput {
  boxesValue: string | null | undefined;
  onEdit(newValue: string): void;
}
