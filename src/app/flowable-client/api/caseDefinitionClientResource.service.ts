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
export class CaseDefinitionClientResourceService {

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
     * getCaseDefinition
     *
     * @param definitionId definitionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseDefinition(definitionId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getCaseDefinition(definitionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getCaseDefinition(definitionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getCaseDefinition(definitionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getCaseDefinition.');
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/case-definitions/${encodeURIComponent(String(definitionId))}`,
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
     * @param definitionId definitionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getJobs(definitionId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getJobs(definitionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getJobs(definitionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getJobs(definitionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getJobs.');
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/case-definitions/${encodeURIComponent(String(definitionId))}/jobs`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getProcessInstances
     *
     * @param definitionId definitionId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessInstances(definitionId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getProcessInstances(definitionId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getProcessInstances(definitionId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getProcessInstances(definitionId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getProcessInstances.');
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/case-definitions/${encodeURIComponent(String(definitionId))}/case-instances`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
