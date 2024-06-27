import { injectable } from 'inversify';
import { Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import { Route } from '../types/route.interface.js';
import { Controller } from './controller.interface.js';
import { Logger } from '../../logger/logger.interface.js';

const DEFAULT_CONTENT_TYPE = 'application/json';

@injectable()
export abstract class BaseController implements Controller {
  readonly _router: Router;

  constructor (
    protected readonly logger: Logger
  ) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  addRoute(route: Route): void {
    const wrapperAsyncHandler = asyncHandler(route.handler.bind(this));
    // this._router[route.method](route.path, wrapperAsyncHandler);
    const middlewareHandlers = route.middlewares?.map(
      (item) => asyncHandler(item.execute.bind(item))
    );
    const allHandlers = middlewareHandlers ? [...middlewareHandlers, wrapperAsyncHandler] : wrapperAsyncHandler;

    this._router[route.method](route.path, allHandlers);
    this.logger.info(`Route registered: ${route.method.toLocaleUpperCase()} ${route.path}`);
  }

  send<T>(res: Response, statusCode: number, data: T): void {
    res
      .type(DEFAULT_CONTENT_TYPE)
      .status(statusCode)
      .json(data);
  }

  // resolves
  ok<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.OK, data);
  }

  created<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.CREATED, data);
  }

  noContent<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.NO_CONTENT, data);
  }
}
