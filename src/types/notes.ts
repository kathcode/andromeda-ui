export interface INote {
  category: string;
  createdAt: Date
  recordLink: string;
  tags: Array<string>
  textContent: string
  title: string;
  _id: string
}