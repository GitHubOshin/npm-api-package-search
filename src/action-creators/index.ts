import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-type'
import { Action } from '../actions'
import { IRepositoriesResponse } from '../@types/api-response'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const { data } = await axios.get<IRepositoriesResponse>(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term
          }
        }
      )

      const names = data.objects.map((result) => {
        return result.package.name
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
    } catch (error) {
      const err = error as { message: string }

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}
