import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { client } from '../../api/client';

const initialState = {
  questions: [],
  status: 'idle',
  error: null
}

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  const response = await client.get(`http://localhost:8080/cdamassy2021/api/question`);
  console.log(response);
  return response.data
})

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        questionAdded: {
        reducer(state, action) {
          state.questions.push(action.payload)
        },
        prepare(libelle, userId, propositions) {
          // omit prepare logic
        }
      },
      reponseAdded(state, action) {
        const { questionId, reponse } = action.payload
        const existingQuestion = state.questions.find(question => question.idQuestion === questionId)
        if (existingQuestion) {
            existingQuestion.reponses[reponse]++
        }
      }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchQuestions.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchQuestions.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.questions = state.questions.concat(action.payload)
        })
        .addCase(fetchQuestions.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  })

export const { questionAdded, reponseAdded } = questionsSlice.actions

export default questionsSlice.reducer

export const selectAllQuestions = state => state.questions.questions

export const selectQuestionById = (state, questionId) =>
  state.questions.questions.find(question => question.idQuestion === questionId)
