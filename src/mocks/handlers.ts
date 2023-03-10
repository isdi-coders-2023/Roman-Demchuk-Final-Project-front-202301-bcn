import { rest } from "msw";
import endpoints from "../routers/endpoints";
import { mockCoinsFromApi } from "./coinMocks";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.the2euro}${endpoints.login}`,
    async (req, res, context) =>
      res(context.status(200), context.json({ token: "1234asdf" }))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${endpoints.the2euro}${endpoints.coins}`,
    async (req, res, context) =>
      res(context.status(200), context.json(mockCoinsFromApi))
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}${endpoints.the2euro}${endpoints.login}`,
    async (req, res, context) => res(context.status(401))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}${endpoints.the2euro}${endpoints.coins}`,
    async (req, res, context) => res(context.status(500))
  ),
];
