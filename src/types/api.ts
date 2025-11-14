import { QueryKey, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

type ResponseError = AxiosError<{
    statusCode : number;
    message : string;
    error : string;
}>

type UseMutationCustomOptions<TData = unknown, TVariables = unknown>
= Omit<
UseMutationOptions<TData, Error, TVariables, unknown>,
'mutationFn'>

type UseQueryCustomOptions<TQueyrFnData=unknown, TData=TQueyrFnData> 
= Omit<UseQueryOptions<TQueyrFnData, ResponseError, TData, QueryKey>, 'queryKey'>

export type {UseMutationCustomOptions, ResponseError, UseQueryCustomOptions}