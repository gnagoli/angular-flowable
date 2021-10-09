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

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CmmnJobClientResourceService {

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
     * deleteCmmnJob
     *
     * @param jobId jobId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCmmnJob(jobId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCmmnJob(jobId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCmmnJob(jobId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCmmnJob(jobId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling deleteCmmnJob.');
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

        return this.httpClient.delete<any>(`${this.basePath}/rest/admin/cmmn-jobs/${encodeURIComponent(String(jobId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * executeCmmnJob
     *
     * @param jobId jobId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public executeCmmnJob(jobId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public executeCmmnJob(jobId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public executeCmmnJob(jobId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public executeCmmnJob(jobId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling executeCmmnJob.');
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

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/cmmn-jobs/${encodeURIComponent(String(jobId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCmmnJobStacktrace
     *
     * @param jobId jobId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCmmnJobStacktrace(jobId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getCmmnJobStacktrace(jobId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getCmmnJobStacktrace(jobId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getCmmnJobStacktrace(jobId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling getCmmnJobStacktrace.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<string>(`${this.basePath}/rest/admin/cmmn-jobs/${encodeURIComponent(String(jobId))}/stacktrace`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCmmnJob
     *
     * @param jobId jobId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCmmnJob(jobId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getCmmnJob(jobId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getCmmnJob(jobId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getCmmnJob(jobId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling getCmmnJob.');
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/cmmn-jobs/${encodeURIComponent(String(jobId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * moveCmmnJob
     *
     * @param jobId jobId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public moveCmmnJob(jobId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public moveCmmnJob(jobId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public moveCmmnJob(jobId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public moveCmmnJob(jobId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (jobId === null || jobId === undefined) {
            throw new Error('Required parameter jobId was null or undefined when calling moveCmmnJob.');
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

        return this.httpClient.post<any>(`${this.basePath}/rest/admin/move-cmmn-jobs/${encodeURIComponent(String(jobId))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
