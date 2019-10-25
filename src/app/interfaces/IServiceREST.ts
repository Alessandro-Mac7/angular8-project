export interface IServiceREST {
  getAll();
  get(id: number);
  delete(id: number);
  save(model: any);
  update(model: any);
}
