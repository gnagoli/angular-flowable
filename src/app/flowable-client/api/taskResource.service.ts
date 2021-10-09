/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { TaskRepresentation } from '../model/taskRepresentation';
import { TaskUpdateRepresentation } from '../model/taskUpdateRepresentation';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TaskResourceService {

    protected basePath = 'https://localhost:8081';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * getSubTasks
     *
     * @param taskId taskId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubTasks(taskId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<TaskRepresentation>>;
    public getSubTasks(taskId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<TaskRepresentation>>>;
    public getSubTasks(taskId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<TaskRepresentation>>>;
    public getSubTasks(taskId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling getSubTasks.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Array<TaskRepresentation>>(`${this.basePath}/app/rest/tasks/${encodeURIComponent(String(taskId))}/subtasks`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getTask
     *
     * @param taskId taskId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTask(taskId: string, observe?: 'body', reportProgress?: boolean): Observable<TaskRepresentation>;
    public getTask(taskId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TaskRepresentation>>;
    public getTask(taskId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TaskRepresentation>>;
    public getTask(taskId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling getTask.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<TaskRepresentation>(`${this.basePath}/app/rest/tasks/${encodeURIComponent(String(taskId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateTask
     *
     * @param taskId taskId
     * @param updated updated
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTask(taskId: string, updated: TaskUpdateRepresentation, observe?: 'body', reportProgress?: boolean): Observable<TaskRepresentation>;
    public updateTask(taskId: string, updated: TaskUpdateRepresentation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<TaskRepresentation>>;
    public updateTask(taskId: string, updated: TaskUpdateRepresentation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<TaskRepresentation>>;
    public updateTask(taskId: string, updated: TaskUpdateRepresentation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling updateTask.');
        }

        if (updated === null || updated === undefined) {
            throw new Error('Required parameter updated was null or undefined when calling updateTask.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<TaskRepresentation>(`${this.basePath}/app/rest/tasks/${encodeURIComponent(String(taskId))}`,
            updated,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}