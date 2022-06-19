import { $api } from '../../../api/api-instance';

export const TodosService = {
  getTodos: (params: { _page: number; _limit: number }) => $api.get('/todos', { params }),
};
