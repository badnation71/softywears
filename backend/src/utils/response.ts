export interface ApiResponse<T = any> {
  success: boolean
  statusCode: number
  message: string
  data?: T
  errors?: Array<{ field: string; message: string }>
  meta?: {
    timestamp: string
    path: string
    version: string
  }
}

export const sendResponse = <T = any>(
  statusCode: number,
  message: string,
  data?: T,
  errors?: Array<{ field: string; message: string }>
): ApiResponse<T> => {
  return {
    success: statusCode >= 200 && statusCode < 300,
    statusCode,
    message,
    data,
    errors,
    meta: {
      timestamp: new Date().toISOString(),
      path: '',
      version: '1.0.0',
    },
  }
}
