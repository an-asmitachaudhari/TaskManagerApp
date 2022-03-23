export interface Task {
  _id: string;

  taskName: String;
  date: Date;
  reminder: Date;
  urgent: Boolean;
  note: String;
  status: String;
  finishedDate: Date;
}
