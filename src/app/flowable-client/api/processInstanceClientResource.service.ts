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

import { JsonNode } from '../model/jsonNode';
import { ObjectNode } from '../model/objectNode';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProcessInstanceClientResourceService {

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
     * changeActivityState
     *
     * @param processInstanceId processInstanceId
     * @param changeStateBody changeStateBody
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changeActivityState(processInstanceId: string, changeStateBody: JsonNode, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public changeActivityState(processInstanceId: string, changeStateBody: JsonNode, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public changeActivityState(processInstanceId: string, changeStateBody: JsonNode, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public changeActivityState(processInstanceId: string, changeStateBody: JsonNode, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling changeActivityState.');
        }

        if (changeStateBody === null || changeStateBody === undefined) {
            throw new Error('Required parameter changeStateBody was null or undefined when calling changeActivityState.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/change-state`,
            changeStateBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * createVariable
     *
     * @param processInstanceId processInstanceId
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createVariable(processInstanceId: string, body: ObjectNode, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createVariable(processInstanceId: string, body: ObjectNode, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createVariable(processInstanceId: string, body: ObjectNode, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createVariable(processInstanceId: string, body: ObjectNode, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling createVariable.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createVariable.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/variables`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteVariable
     *
     * @param processInstanceId processInstanceId
     * @param variableName variableName
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteVariable(processInstanceId: string, variableName: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteVariable(processInstanceId: string, variableName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteVariable(processInstanceId: string, variableName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteVariable(processInstanceId: string, variableName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling deleteVariable.');
        }

        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling deleteVariable.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/variables/${encodeURIComponent(String(variableName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * executeAction
     *
     * @param processInstanceId processInstanceId
     * @param actionBody actionBody
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public executeAction(processInstanceId: string, actionBody: JsonNode, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public executeAction(processInstanceId: string, actionBody: JsonNode, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public executeAction(processInstanceId: string, actionBody: JsonNode, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public executeAction(processInstanceId: string, actionBody: JsonNode, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling executeAction.');
        }

        if (actionBody === null || actionBody === undefined) {
            throw new Error('Required parameter actionBody was null or undefined when calling executeAction.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}`,
            actionBody,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getDecisionExecutions
     *
     * @param processInstanceId processInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDecisionExecutions(processInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getDecisionExecutions(processInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getDecisionExecutions(processInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getDecisionExecutions(processInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getDecisionExecutions.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/decision-executions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getJobs
     *
     * @param processInstanceId processInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getJobs(processInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getJobs(processInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getJobs(processInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getJobs(processInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getJobs.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/jobs`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProcessInstance
     *
     * @param processInstanceId processInstanceId
     * @param runtime runtime
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessInstance(processInstanceId: string, runtime?: boolean, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getProcessInstance(processInstanceId: string, runtime?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getProcessInstance(processInstanceId: string, runtime?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getProcessInstance(processInstanceId: string, runtime?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getProcessInstance.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (runtime !== undefined && runtime !== null) {
            queryParameters = queryParameters.set('runtime', <any>runtime);
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getSubProcesses
     *
     * @param processInstanceId processInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubProcesses(processInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getSubProcesses(processInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getSubProcesses(processInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getSubProcesses(processInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getSubProcesses.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/subprocesses`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getSubtasks
     *
     * @param processInstanceId processInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubtasks(processInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getSubtasks(processInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getSubtasks(processInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getSubtasks(processInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getSubtasks.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/tasks`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getVariables
     *
     * @param processInstanceId processInstanceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getVariables(processInstanceId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getVariables(processInstanceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getVariables(processInstanceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getVariables(processInstanceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling getVariables.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/variables`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * migrateProcessInstance
     *
     * @param processInstanceId processInstanceId
     * @param migrationDocument migrationDocument
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public migrateProcessInstance(processInstanceId: string, migrationDocument: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public migrateProcessInstance(processInstanceId: string, migrationDocument: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public migrateProcessInstance(processInstanceId: string, migrationDocument: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public migrateProcessInstance(processInstanceId: string, migrationDocument: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling migrateProcessInstance.');
        }

        if (migrationDocument === null || migrationDocument === undefined) {
            throw new Error('Required parameter migrationDocument was null or undefined when calling migrateProcessInstance.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/migrate`,
            migrationDocument,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateVariable
     *
     * @param processInstanceId processInstanceId
     * @param variableName variableName
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateVariable(processInstanceId: string, variableName: string, body: ObjectNode, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateVariable(processInstanceId: string, variableName: string, body: ObjectNode, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateVariable(processInstanceId: string, variableName: string, body: ObjectNode, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateVariable(processInstanceId: string, variableName: string, body: ObjectNode, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (processInstanceId === null || processInstanceId === undefined) {
            throw new Error('Required parameter processInstanceId was null or undefined when calling updateVariable.');
        }

        if (variableName === null || variableName === undefined) {
            throw new Error('Required parameter variableName was null or undefined when calling updateVariable.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateVariable.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        return this.httpClient.put<any>(`${this.basePath}/rest/admin/process-instances/${encodeURIComponent(String(processInstanceId))}/variables/${encodeURIComponent(String(variableName))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
