import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const logger = new Logger();

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const parsedErrorMessage =
      exception instanceof HttpException
        ? (exception.getResponse() as any).message || exception.getResponse()
        : exception.message;

    const errorMessage = Array.isArray(parsedErrorMessage)
      ? `The following problem(s) were found in the request structure: ${parsedErrorMessage.join(
          ',',
        )}`
      : parsedErrorMessage;

    logger.error(exception.message, exception.stack, 'Api Exception Filter');

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error: exception.name,
      message: errorMessage,
    });
  }
}
