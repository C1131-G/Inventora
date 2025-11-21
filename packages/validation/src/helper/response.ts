export type Success<T> = {
    success: true;
    data: T;
};

export type Failure = {
    success: false;
    error: any;
};

export type Result<T> = Success<T> | Failure;