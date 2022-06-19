import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Pagination from '../../shared/Pagination';
import { fetchTodos } from '../../store/pages/TodosPage/async-actions';

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const currentPageNumber = new URLSearchParams(search).get('page');
  useEffect(() => {
    dispatch(fetchTodos({ _page: Number(currentPageNumber), _limit: 5 }));
    if (!search) {
      navigate('?page=1');
    }
  }, [currentPageNumber, dispatch, navigate, search]);

  const { loading, error, todosData } = useAppSelector((store) => store.todos);

  if (loading) {
    return (
      <>
        <div>Загрузка...</div>
        <Pagination pagesCount={10} itemsAmount={todosData.length} limit={5} />
      </>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {todosData.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <Pagination pagesCount={10} itemsAmount={todosData.length} limit={5} />
    </div>
  );
};

export default TodosPage;
