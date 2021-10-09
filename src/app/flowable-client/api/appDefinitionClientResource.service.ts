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
export class AppDefinitionClientResourceService {

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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/app-definitions/${encodeURIComponent(String(definitionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCaseDefinitions
     *
     * @param definitionId definitionId
     * @param deploymentId deploymentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCaseDefinitions(definitionId: string, deploymentId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getCaseDefinitions(definitionId: string, deploymentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getCaseDefinitions(definitionId: string, deploymentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getCaseDefinitions(definitionId: string, deploymentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getCaseDefinitions.');
        }

        if (deploymentId === null || deploymentId === undefined) {
            throw new Error('Required parameter deploymentId was null or undefined when calling getCaseDefinitions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deploymentId !== undefined && deploymentId !== null) {
            queryParameters = queryParameters.set('deploymentId', <any>deploymentId);
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/app-definitions/${encodeURIComponent(String(definitionId))}/case-definitions`,
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
     * getDecisionTables
     *
     * @param definitionId definitionId
     * @param deploymentId deploymentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDecisionTables(definitionId: string, deploymentId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getDecisionTables(definitionId: string, deploymentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getDecisionTables(definitionId: string, deploymentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getDecisionTables(definitionId: string, deploymentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getDecisionTables.');
        }

        if (deploymentId === null || deploymentId === undefined) {
            throw new Error('Required parameter deploymentId was null or undefined when calling getDecisionTables.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deploymentId !== undefined && deploymentId !== null) {
            queryParameters = queryParameters.set('deploymentId', <any>deploymentId);
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/app-definitions/${encodeURIComponent(String(definitionId))}/decision-tables`,
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
     * getFormDefinitions
     *
     * @param definitionId definitionId
     * @param deploymentId deploymentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFormDefinitions(definitionId: string, deploymentId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getFormDefinitions(definitionId: string, deploymentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getFormDefinitions(definitionId: string, deploymentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getFormDefinitions(definitionId: string, deploymentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getFormDefinitions.');
        }

        if (deploymentId === null || deploymentId === undefined) {
            throw new Error('Required parameter deploymentId was null or undefined when calling getFormDefinitions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deploymentId !== undefined && deploymentId !== null) {
            queryParameters = queryParameters.set('deploymentId', <any>deploymentId);
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/app-definitions/${encodeURIComponent(String(definitionId))}/form-definitions`,
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
     * getProcessDefinitions
     *
     * @param definitionId definitionId
     * @param deploymentId deploymentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProcessDefinitions(definitionId: string, deploymentId: string, observe?: 'body', reportProgress?: boolean): Observable<JsonNode>;
    public getProcessDefinitions(definitionId: string, deploymentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JsonNode>>;
    public getProcessDefinitions(definitionId: string, deploymentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JsonNode>>;
    public getProcessDefinitions(definitionId: string, deploymentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (definitionId === null || definitionId === undefined) {
            throw new Error('Required parameter definitionId was null or undefined when calling getProcessDefinitions.');
        }

        if (deploymentId === null || deploymentId === undefined) {
            throw new Error('Required parameter deploymentId was null or undefined when calling getProcessDefinitions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deploymentId !== undefined && deploymentId !== null) {
            queryParameters = queryParameters.set('deploymentId', <any>deploymentId);
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

        return this.httpClient.get<JsonNode>(`${this.basePath}/rest/admin/app-definitions/${encodeURIComponent(String(definitionId))}/process-definitions`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
